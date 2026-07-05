# Saksham Portfolio

A modern, dark, glassmorphism-themed personal portfolio built with **React**, **Vite**, and **Tailwind CSS**, featuring smooth **Framer Motion** animations throughout.

![Tech Stack](https://img.shields.io/badge/React-18-3B82F6) ![Tech Stack](https://img.shields.io/badge/Vite-5-8B5CF6) ![Tech Stack](https://img.shields.io/badge/TailwindCSS-3-06B6D4)

## ✨ Features

- Fully responsive (mobile, tablet, laptop, desktop)
- Dark glassmorphism UI with animated gradient accents
- Hero section with typing animation (react-type-animation)
- Animated counters and progress bars
- Filterable project grid
- Vertical timeline for education & experience
- Certificates grid with view/download actions
- Contact form wired to EmailJS with validation and toast notifications
- Sticky navbar with scroll progress bar and active-link highlighting
- Scroll-to-top button, page loader, and smooth scrolling throughout
- Client-side routing (React Router DOM) with a 404 page
- Accessible: visible focus states and `prefers-reduced-motion` support

## 🛠️ Tech Stack

| Category | Technology |
| --- | --- |
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | React Icons, Lucide React |
| Routing | React Router DOM |
| Typing Effect | React Type Animation |
| Smooth Scroll | React Scroll |
| Contact Form | EmailJS (`@emailjs/browser`) |
| Notifications | React Toastify |

## 📁 Project Structure

```
saksham-portfolio/
├── public/
│   ├── favicon.ico
│   └── resume.pdf
├── src/
│   ├── assets/            # images, icons, logos
│   ├── components/        # all reusable UI components & sections
│   ├── layouts/           # MainLayout wrapping every page
│   ├── pages/             # routed pages (Home, Projects, Resume, Certificates, 404)
│   ├── data/              # static content (skills, projects, education, etc.)
│   ├── hooks/             # custom hooks (scroll progress, active section, etc.)
│   ├── utils/              # constants and helper functions
│   ├── styles/            # global CSS
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

## ⚙️ Customization

### Personal information

Edit `src/utils/constants.js` to update your name, profession, bio, contact details, and taglines.

### Content sections

Edit the files in `src/data/` to update:
- `skills.js` — categorized skills and proficiency levels
- `projects.js` — project cards, tech stack, links
- `education.js` — work experience & education timeline
- `certificates.js` — certifications grid
- `socialLinks.js` — social media links

### EmailJS setup (Contact form)

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Create an Email Service and an Email Template.
3. Copy your **Service ID**, **Template ID**, and **Public Key**.
4. Paste them into `EMAILJS_CONFIG` in `src/utils/constants.js`.

### Colors & fonts

Edit `tailwind.config.js` to adjust the color palette (`primary`, `secondary`, `accent`, `background`, `card`) or fonts (`poppins`, `inter`).

### Resume & favicon

Replace `public/resume.pdf` and `public/favicon.ico` with your own files (same filenames).

### Profile & project images

Placeholder images use [placehold.co](https://placehold.co). Replace the `image` URLs in `src/data/projects.js`, `src/data/certificates.js`, and the profile photo in `src/components/About.jsx` with your own assets in `src/assets/images/`.

## 📄 License

This project is free to use for personal portfolio purposes.
