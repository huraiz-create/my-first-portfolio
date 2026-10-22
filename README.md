# Hassan Huraiz — Premium AI & ML Engineering Portfolio

> A distinctive, modern, recruiter-ready personal portfolio website built with React, Vite, Tailwind CSS, and Lucide Icons. Designed with an authentic student voice, deep dark mode aesthetic, atmospheric lighting, and interactive neural visuals.

---

## 🌟 Portfolio Overview

This portfolio presents Hassan Huraiz as an authentic, high-potential **AI & ML Engineering Student** at **AJ Institute of Engineering and Technology (AJIET)**, Mangaluru. It reflects active curiosity in Generative AI, intelligent applications, and modern web development without inflating experience or fabricating credentials.

### Key Highlights
- **Visual Identity**: Deep charcoal and black surfaces (`#07090E`), subtle grid textures, glowing radial accents, and crisp electric cyan/indigo typography.
- **Hero AI Visual**: Interactive canvas simulating a neural topological network with node proximity physics and central core glyph.
- **Honest Academic Disclosures**: Explicit verification checklists with *"Not yet added"* badges for pending datasets, models, repositories, and demos.
- **Coherent Design System**: Glassmorphism cards, responsive navigation with mobile drawer, full-featured project modal with keyboard accessibility (Escape key, backdrop dismiss), and copy-to-clipboard email toast.

---

## 📂 Project Structure

```text
hassan-portfolio/
├── public/
│   └── favicon.svg               # Custom AI monogram favicon
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky glassmorphic navbar with active scroll spy
│   │   ├── Hero.tsx              # Editorial hero with CTAs, quick links & location
│   │   ├── NeuralCanvas.tsx      # Interactive canvas neural network simulation
│   │   ├── About.tsx             # Academic background, overview card & 3 core pillars
│   │   ├── Skills.tsx            # 4 categorized learning areas (A, B, C, D)
│   │   ├── Projects.tsx          # Featured academic & concept project cards
│   │   ├── ProjectModal.tsx      # Deep dive modal with problem, objectives & evidence checklist
│   │   ├── AcademicJourney.tsx   # Formal education card & 10 explored subjects
│   │   ├── WhatImExploring.tsx   # 3 exploration vectors (AI in Ed, GenAI, Web Dev)
│   │   ├── Contact.tsx           # Direct channels + pre-filled message draft form
│   │   └── Footer.tsx            # Wordmark, directory links & dynamic copyright
│   ├── data/
│   │   └── portfolioData.ts      # Single source of truth for all portfolio content
│   ├── types/
│   │   └── index.ts              # TypeScript interfaces
│   ├── App.tsx                   # Main root view
│   ├── index.css                 # Tailwind CSS v4 styling & animations
│   ├── main.tsx                  # React DOM mount point
│   └── vite-env.d.ts             # Vite client types
├── index.html                    # SEO tags, OpenGraph & Google Fonts
├── package.json
├── tsconfig.json
└── vite.config.ts                # Vite config with React & Tailwind plugins
```

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js (v18 or higher recommended; developed on Node v22.14.0)
- npm (v9 or higher)

### Installation
```bash
# Navigate to the project directory
cd "C:\Users\PC - 11\.gemini\antigravity\scratch\hassan-portfolio"

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit **`http://localhost:5173`** in your browser.

### Build for Production
```bash
npm run build
```
The optimized production bundle will be created in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 🛠️ How to Update and Add Projects

All project information is centralized in **`src/data/portfolioData.ts`**. You do not need to rewrite UI components to update your projects!

### Updating Existing Projects
To add your actual GitHub link, dataset link, or screenshots to **Student Performance Prediction**:
1. Open `src/data/portfolioData.ts`.
2. Locate `featuredProjects`.
3. In `evidence`, update the values:
```typescript
evidence: {
  dataset: "Kaggle Student Alcohol Consumption / Academic Dataset",
  resultsAndScreenshots: "Available in /assets/results.png",
  githubRepo: "https://github.com/your-username/student-performance-prediction",
  liveDemo: "https://your-demo-url.vercel.app"
}
```

### Adding Future Projects
Simply append a new project object to the `featuredProjects` array in `src/data/portfolioData.ts`:
```typescript
{
  id: "new-project-id",
  title: "Your New Project Title",
  category: "Academic AI/ML Project",
  status: "In Progress / Prototype",
  badgeType: "academic",
  shortDescription: "A concise overview of what you built...",
  problemStatement: "The challenge being solved...",
  objectives: [
    "First concrete goal",
    "Second concrete goal"
  ],
  proposedTechnologies: ["Python", "FastAPI", "React"],
  evidence: {
    dataset: "Public dataset name",
    resultsAndScreenshots: "Screenshot path",
    githubRepo: "https://github.com/...",
    liveDemo: "Not yet added"
  },
  implementationStage: "Prototype Stage",
  isConcept: false,
  accentColor: "cyan"
}
```

---

## 🌐 How to Deploy

### Option 1: Vercel (Recommended)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Hassan Huraiz portfolio"
   git remote add origin https://github.com/<your-username>/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**.

### Option 2: Netlify
1. Run `npm run build`.
2. Drag and drop the `dist/` folder into Netlify Drop at [app.netlify.com/drop](https://app.netlify.com/drop), or link your GitHub repository.

---

## 📋 Recruiter & Academic Checklist
- [x] Genuine student voice: authentic learning, experimentation, and growth.
- [x] Accurate degree: CSE (AI & ML) at AJIET, Mangaluru.
- [x] Strictly excluded private personal projects ("5 Years of Us").
- [x] Working LinkedIn and Email mailto links.
- [x] Detailed project modal with clear evidence disclosures.
- [x] 100% responsive on Mobile, Tablet, and Desktop.
- [x] Zero console errors and clean build output.
