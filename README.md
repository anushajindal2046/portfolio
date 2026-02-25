## 🚀 Anusha Jindal — Developer Portfolio

Modern, high‑performance personal portfolio with smooth animations, a clean UI, and a fully working email contact flow.  
Built with **React + TypeScript + Vite** on the frontend and **Node.js + Express + NodeMailer** on the backend.

---

### 🌐 Features

- **Animated hero** with dynamic text effects
- **About, Education, Experience, Projects, Skills** sections
- **Inline resume preview + download button**
- **Contact form** wired to NodeMailer (SMTP)
- **Dark / soft light theme** (eye‑friendly)
- **Framer Motion** animations
- **Custom WebGL cursor** on desktop

---

### 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, React Router DOM, Lucide Icons  
- **Backend**: Node.js, Express, NodeMailer, REST API + CORS  
- **Tooling**: ESLint, React Query (ready for data‑driven features)

---

### 📁 Structure (overview)

- `src/components/*Section.tsx` – Hero, About, Education, Experience, Projects, Skills, Resume, Contact
- `src/pages/Index.tsx` – Single‑page layout wiring all sections
- `src/App.tsx`, `src/main.tsx`, `src/index.css` – app shell, entry, theme + Tailwind setup
- `server/index.mjs` – Express + NodeMailer contact API

---

### ⚙️ Setup & Run

```bash
git clone <your-repo-url>
cd portfolio-anusha
npm install

cp .env.example .env    # then fill in SMTP + email details
```

- **Frontend**: `npm run dev` → `http://localhost:5173` (or your Vite port)  
- **Backend**: `npm run server` → `http://localhost:5000` (contact API)

**Important**: For Gmail, use a **16‑character App Password** for `SMTP_PASS`, not your normal password.

---

### 📦 Build, Preview, Lint

```bash
npm run build    # production build
npm run preview  # preview built app
npm run lint     # ESLint checks
```
