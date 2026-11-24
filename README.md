# The Boston Pledge — Official Web Platform

> **A global fellowship dedicated to grassroots awakening, village self-reliance, and sustainable global equity through voluntary public service.**

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 📖 Table of Contents

- [About The Boston Pledge](#about-the-boston-pledge)
- [Key Features & Pages](#key-features--pages)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Design System & Theme](#design-system--theme)
- [Contributing](#contributing)
- [Contact & Support](#contact--support)

---

## 🌍 About The Boston Pledge

**The Boston Pledge (TBP)** is an independent, volunteer-driven non-profit incubator founded in 2001 to catalyze grassroots development and economic dignity in undernourished and rural communities. Guided by Chairman **Dr. Partha S. Ghosh** and an international council of faculty, corporate executives, and grassroots practitioners, all leadership and advisory roles operate **100% pro bono** with zero monetary compensation.

Our key areas of focus include:
- **Grassroots Entrepreneurship**: Mass entrepreneurship clinics, village micro-enterprises, and self-help groups.
- **Youth & Digital Empowerment**: International youth leadership, software internships, and digital connectivity.
- **Rural Education & Literacy**: Educator roundtables (EdSP) linking global educators with rural schools.
- **Safe Water & Ecological Resilience**: Arsenic remediation, community water filters, and sustainable village development.

---

## 🚀 Key Features & Pages

The application is built on the **Next.js App Router** with full Static Site Generation (SSG), prerendering all 56 routes with optimized performance and backwards-compatible redirects:

### 🏛️ About Us (Nested Routes)
| Route | Page | Description |
|---|---|---|
| `/about` | **Overview** | Foundational legacy story with direct inline video player, core mission pillars, and governance overview. |
| `/about/vision-mission` | **Vision & Mission** | The core vision doctrine, Albert Einstein quote banner, 3 actionable mission objectives, and the 10 Overarching Doctrines. |
| `/about/our-team` | **Our Team** | Executive Leadership and Advisory Council in a responsive grid with category filtering and biography modal popups. |
| `/about/media` | **Our Frames** | Visual archive with category filtering, YouTube embeds, and full-screen lightbox modal. |
| `/about/constitution` | **Constitution** | Charter guidelines, 6 Core Values, Rabindranath Tagore quote, and institutional compass card. |
| `/about/reflections` | **Reflections** | Thought leadership, featured video discourse, Chairman Dr. Partha S. Ghosh biography, quote, and keynote symposium archive. |

### 🌿 Programs & Direct Engagement
| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero banner, core mission pillars, featured events, news preview, leadership preview, and interactive initiatives grid. |
| `/initiatives` | **Initiatives Hub** | 5 core program pillars with alternating visual layouts and dynamic icons. |
| `/initiatives/[id]` | **Initiative Detail** | Dedicated individual detail pages for each pillar (`digital`, `youth`, `edsp`, `esp`, `rural-innovation`) featuring frameworks, case studies, internships, and field reports. |
| `/events` | **Events Hub** | Comprehensive event archive with categorized filtering and search. |
| `/events/[slug]` | **Event Detail** | Dynamic SSG routes with agenda timelines, speaker profiles, and registration links. |
| `/latest-updates` | **News & Updates** | Field reports, articles, and milestones categorized by topic. |
| `/latest-updates/[slug]` | **Article Detail** | Full-length articles, conference proceedings, and media releases. |
| `/be-a-volunteer` | **Be A Volunteer** | Volunteer eligibility ethos, 6 basic assumptions, 6 behavioral guidelines, and application form. |
| `/donate` | **Donate** | 501(c)(3) tax-deductible donation portal with preset amount tiles ($10, $20, $30, $40), custom amount field, and impact breakdown. |
| `/contact` | **Contact Us** | Consolidated hero, symmetrical direct channels, inquiry form, and live Google Maps embed for Winchester, MA headquarters. |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (Version 16, App Router, Turbopack)
- **Library**: [React](https://react.dev/) 19 & React DOM
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & CSS keyframes
- **Icons**: Custom accessible SVGs & Lucide-compatible icons
- **Fonts**: [Geist](https://vercel.com/font) via `next/font`
- **Images & Video**: Next.js `<Image>` with responsive sizing and YouTube inline video embed

---

## 📁 Project Structure

```text
boston-pledge/
├── app/                          # Next.js App Router routes
│   ├── about/                    # About Us section
│   │   ├── constitution/         # Constitution & Charter page
│   │   ├── media/                # Our Frames media gallery
│   │   ├── our-team/             # Team page with bio modal popups
│   │   ├── reflections/          # Reflections & keynote symposium archive
│   │   ├── vision-mission/       # Vision & Mission doctrines page
│   │   └── page.tsx              # About Us overview page
│   ├── be-a-volunteer/           # Be A Volunteer page & application form
│   ├── contact/                  # Contact page & live map embed
│   ├── donate/                   # 501(c)(3) Donation portal
│   ├── events/                   # Events hub & dynamic [slug] routes
│   │   └── [slug]/               # Dynamic individual event detail page
│   ├── initiatives/              # Initiatives hub & dynamic [id] routes
│   │   └── [id]/                 # Dynamic individual initiative detail page
│   ├── latest-updates/           # Latest news & dynamic [slug] routes
│   │   └── [slug]/               # Dynamic individual news article page
│   ├── globals.css               # Global CSS & Tailwind configuration
│   ├── layout.tsx                # Root layout (Navbar, Footer, ScrollToTop)
│   └── page.tsx                  # Home page
├── components/                   # Reusable UI component modules
│   ├── about/                    # About section components (Hero, Story, Pillars, Team)
│   ├── common/                   # Navbar, Footer, Icons, Logo, Modals, ScrollReveal
│   ├── constitution/             # Constitution hero, values, guidelines, CTA
│   ├── contact/                  # Unified hero, direct channels, contact form & map
│   ├── donate/                   # Donate hero, donation form, impact cards
│   ├── events/                   # Event cards, feed, detail layouts
│   ├── home/                     # Hero, preview sections, initiatives grid, news
│   ├── initiatives/              # Initiative pillars, hero, and comprehensive detail view
│   ├── latest-updates/           # Update feeds & detail views
│   ├── media/                    # Interactive media lightbox & category filters
│   ├── our-team/                 # Executive team cards & bio modal
│   ├── reflections/              # Discourse video player & symposium archive
│   ├── vision-mission/           # Vision & Mission sections & doctrines
│   └── volunteer/                # Volunteer form, principles, ground rules
├── lib/                          # Data models, content stores & utilities
│   ├── about/                    # Vision-mission, constitution, reflections data
│   ├── eventsData.ts             # Events data & slug generator
│   ├── eventsDetails.ts          # Comprehensive event details
│   ├── Initiatives.ts            # Detailed initiative pillars & programs data
│   ├── latestUpdates.ts          # Latest news data accessor
│   ├── latestUpdatesData.ts      # News & field updates data
│   ├── ourTeamDetails.ts         # Full team member data & bios
│   └── volunteerData.ts          # Volunteer principles, ground rules & form
├── public/                       # Static assets, logos, and optimized graphics
│   ├── images/                   # Project images and badges
│   ├── logo.png                  # The Boston Pledge official logo
│   └── favicon.ico               # Site favicon
├── next.config.ts                # Next.js configuration (Turbopack, redirects, images)
├── package.json                  # Dependencies & project scripts
├── tsconfig.json                 # TypeScript compiler configuration
└── README.md                     # Project documentation
```

---

## 💻 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.18.0` or higher (Node 20+ recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/boston-pledge.git
   cd boston-pledge
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📜 Available Scripts

| Script | Command | Purpose |
|---|---|---|
| **Development** | `npm run dev` | Launches development server with Turbopack fast refresh. |
| **Build** | `npm run build` | Compiles TypeScript and creates optimized production build. |
| **Start** | `npm run start` | Runs the built production server locally. |
| **Lint** | `npm run lint` | Runs ESLint to check for code quality and style errors. |
| **Type Check** | `npx tsc --noEmit` | Validates TypeScript types across the entire repository. |

---

## 🎨 Design System & Theme

The user interface uses a bespoke color palette inspired by nature, grassroots earthiness, and editorial dignity:

| Color Token | Hex Code | Usage |
|---|---|---|
| **Brand Olive** | `#414D3C` | Primary buttons, active states, key icons, badges |
| **Forest Dark** | `#242D21` | Dark card backgrounds, high-contrast headings, footer |
| **Warm Canvas** | `#FAF8F5` | Primary page background, soft card surfaces |
| **Muted Cream** | `#F3EDE3` | Secondary badge backgrounds, neutral chips |
| **Border Neutral** | `#ECE7DF` | Clean subtle card borders and section dividers |
| **Body Text** | `#4E5748` / `#1E231C` | High-contrast accessible typography |

---

## 🤝 Contributing

Contributions to improve The Boston Pledge web platform are warmly welcomed:

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add amazing feature"
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

---

## 📬 Contact & Support

- **Organization**: The Boston Pledge
- **Headquarters**: 7 Wainwright Rd Unit 66, Winchester, MA 01890, USA
- **Email**: [contact@thebostonpledge.org](mailto:contact@thebostonpledge.org)
- **Phone**: +1 617-512-3038
- **Website**: [https://thebostonpledge.org](https://thebostonpledge.org)

---

*© 2026 The Boston Pledge. All rights reserved. A 501(c)(3) non-profit organization.*
