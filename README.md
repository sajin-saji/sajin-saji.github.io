# Sajin Saji — Portfolio

> Premium, engineered personal portfolio website for **Sajin Saji** (M.Eng. Mechatronics & Cyber-Physical Systems, TH Deggendorf). Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Overview & Features

- **100% Content Preservation**: Complete preservation of all verified skills, industrial experience, academic degrees, research projects, telemetry stats, and original photography.
- **Bilingual Support (EN / DE)**: Instant reactive English ↔ German translation switcher with persistent client state (`localStorage`) and URL hash routing.
- **Precision Engineered UI**: High-contrast, dark telemetry aesthetic with subtle cyber-cyan accents, telemetry glow rings, and responsive glassmorphic cards.
- **Interactive Features**:
  - Live Ansys Icepak thermal test series comparison bar chart with component temperature reduction metrics.
  - Interactive contact hub with validated input fields and automated `mailto:` URL generator.
  - Asymmetrical project showcases with dual-media previews and evidence chips.
  - Multi-category skills matrix spanning Automation & Robotics, Testing, Programming, CAD/Simulation, and Manufacturing.
  - Responsive navigation with sticky blur header and mobile drawer.
- **Optimized & Type-Safe**: Zero TypeScript or ESLint errors, clean component hierarchy, and zero layout shift.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Google Fonts (`Sora`, `Inter`, `JetBrains Mono`)

---

## 📁 Project Structure

```
├── app/
│   ├── favicon.ico
│   ├── globals.css         # Tailwind CSS directives & custom design tokens
│   ├── icon.svg            # Custom SVG Favicon
│   ├── layout.tsx          # Root layout with Google Fonts, metadata, and LanguageProvider
│   └── page.tsx            # Main page composing all portfolio sections
├── components/
│   ├── Contact.tsx         # Contact info & validated email compose form
│   ├── Education.tsx       # Academic degrees and specialized certifications
│   ├── Experience.tsx      # Industrial engineering career timeline
│   ├── Footer.tsx          # Copyright, affiliations, and back-to-top button
│   ├── Hero.tsx            # High-impact hero with portrait, badge, facts, and pills
│   ├── Navbar.tsx          # Sticky glassmorphic nav with language switcher
│   ├── Projects.tsx        # Project case studies & Ansys Icepak chart
│   ├── Skills.tsx          # 6-category technical competencies matrix
│   └── Stats.tsx           # Key engineering telemetry metrics
├── context/
│   └── LanguageContext.tsx # Reactive bilingual context provider (EN / DE)
├── data/
│   └── portfolioData.ts    # Centralized, typed bilingual content dictionary
├── public/
│   └── images/             # Extracted high-resolution authentic project & portrait images
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## 💻 Development & Build Scripts

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 📬 Contact

- **Email**: [sajinsaji222@gmail.com](mailto:sajinsaji222@gmail.com)
- **LinkedIn**: [sajin-saji-4762561b5](https://linkedin.com/in/sajin-saji-4762561b5)
- **GitHub**: [github.com/sajin-saji](https://github.com/sajin-saji)

© 2026 Sajin Saji. All rights reserved.
