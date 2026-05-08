```markdown
# ⚡ SkillForge — Online Course 

> A modern, full-stack online course marketplace where users can browse, enroll, and pay for courses. Built with Next.js 16, MongoDB, and Tailwind CSS.

![SkillForge Banner](https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=1200&q=80)

---

## 🌐 Live Demo

🔗 [https://skill-forge-five-olive.vercel.app]
---

## 📌 Project Overview

SkillForge is a full-stack online learning platform that allows users to:
- Browse a catalog of courses across multiple categories
- Register and log in securely with JWT authentication
- Enroll in courses through a simulated checkout/billing flow
- Track enrolled courses from a personal dashboard
- Instructors can add and manage courses (protected routes)

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 16.2 (App Router) |
| Styling | Tailwind CSS v4 |
| Backend | Next.js API Routes (Serverless) |
| Database | MongoDB Atlas + Mongoose |
| Auth | JWT (jsonwebtoken) + bcryptjs |
| Deployment | Vercel |
| Icons | Lucide React, React Icons |

---

## ✨ Key Features

- 🔐 **JWT Authentication** — Secure register/login with hashed passwords
- 🛡 **Protected Routes** — Add Course page only accessible when logged in
- 🛒 **Billing & Enrollment** — Simulated checkout saves enrollment to MongoDB
- 📊 **User Dashboard** — View all enrolled courses with status tracking
- 🎨 **Dark UI** — Fully responsive, modern dark theme across all devices
- 📱 **Mobile Responsive** — Optimized for sm, md, lg screen sizes
- 🔄 **Persistent Auth** — User session stored in localStorage, navbar updates on route change

---

## 📦 Dependencies

### Core
```json
{
  "next": "16.2.4",
  "react": "19.2.4",
  "react-dom": "19.2.4"
}
```

### Backend & Auth
```json
{
  "mongoose": "^9.6.1",
  "bcryptjs": "^3.0.3",
  "jsonwebtoken": "^9.0.3"
}
```

### UI & Styling
```json
{
  "tailwindcss": "^4",
  "lucide-react": "^1.14.0",
  "react-icons": "^5.6.0"
}
```

---

## 🚀 Installation Guide

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (free tier)
- Git

### 1. Clone the repository
```bash
git clone https://github.com/sakirmohammad775/skill-forge.git
cd skill-forge
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/skillforge?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_key_here
```

> Get your `MONGO_URI` from [MongoDB Atlas](https://cloud.mongodb.com) → Connect → Drivers

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

### 5. Build for production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/route.js       # Login API
│   │   │   └── register/route.js    # Register API
│   │   └── enrollments/route.js     # Enrollment API
│   ├── billing/[id]/page.jsx        # Checkout page
│   ├── courses/
│   │   ├── page.jsx                 # Course listing
│   │   └── [id]/page.jsx            # Course details
│   ├── dashboard/page.jsx           # User dashboard
│   ├── login/page.jsx               # Login page
│   ├── register/page.jsx            # Register page
│   └── products/add/page.jsx        # Add course (protected)
├── components/
│   ├── Navbar.jsx                   # Sticky responsive navbar
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── CourseSection.jsx
│   └── ...
├── data/
│   └── courses.js                   # Static course data
└── lib/
    └── db.js                        # MongoDB connection (cached)
```

---

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGO_URI` | MongoDB Atlas connection string | ✅ |
| `JWT_SECRET` | Secret key for JWT signing | ✅ |

---

## 🌍 Deployment

This project is deployed on **Vercel**.

To deploy your own:

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy ✅

---

## 👤 Author

**Sakir Mohammad**
- GitHub: [@sakirmohammad775](https://github.com/sakirmohammad775)
- Email: sakirmohammad775@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **If you found this useful, please star the repo!**
```

---

## How to add it to GitHub:

**Step 1** — Create `README.md` in your project root:
```bash
# inside SkillForge_Frontend folder
new-item README.md   # Windows
```

**Step 2** — Paste the content above into it

**Step 3** — Push to GitHub:
```bash
git add README.md
git commit -m "add README"
git push
```

**Step 4** — Add to repo "About" section on GitHub:
- Go to your repo → click ⚙️ gear icon next to "About"
- Description: `Full-stack online course marketplace built with Next.js 16, MongoDB & Tailwind CSS`
- Website: `https://skill-forge-five-olive.vercel.app`
- Topics: `nextjs`, `mongodb`, `tailwindcss`, `react`, `jwt`, `fullstack`
