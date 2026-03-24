import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;
const inferredService =
  process.env.SMTP_SERVICE ||
  (process.env.SMTP_HOST?.toLowerCase() === "smtp.gmail.com" ? "gmail" : "");

const transporter = nodemailer.createTransport({
  ...(inferredService
    ? { service: inferredService }
    : { host: process.env.SMTP_HOST, port: smtpPort, secure: smtpSecure }),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify().then(
  () => {
    console.log("SMTP transporter verified");
  },
  (error) => {
    console.error("SMTP transporter verification failed:", error);
  },
);

app.get("/api/health", (_req, res) => {
  res.json({ success: true, service: "contact-server" });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};
  const trimmedName = String(name || "").trim();
  const trimmedEmail = String(email || "").trim();
  const trimmedMessage = String(message || "").trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
  const smtpConfigured =
    Boolean(process.env.SMTP_USER) &&
    Boolean(process.env.SMTP_PASS) &&
    process.env.SMTP_USER !== "your@email.com";

  if (!trimmedName || !trimmedEmail || !trimmedMessage || !emailOk) {
    return res
      .status(400)
      .json({ success: false, error: "Missing required fields" });
  }

  if (!smtpConfigured) {
    return res.status(500).json({
      success: false,
      error: "SMTP is not configured. Update SMTP_USER and SMTP_PASS in .env",
    });
  }

  try {
    const info = await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
      replyTo: trimmedEmail,
      subject: `Portfolio contact from ${trimmedName}`,
      text: `${trimmedMessage}\n\nFrom: ${trimmedName} <${trimmedEmail}>`,
      html: `
        <p>${trimmedMessage.replace(/\n/g, "<br />")}</p>
        <p>From: ${trimmedName} &lt;${trimmedEmail}&gt;</p>
      `.trim(),
    });

    return res.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send email. Check SMTP credentials and app password." });
  }
});

app.listen(port, () => {
  console.log(`Contact server listening on http://localhost:${port}`);
});
