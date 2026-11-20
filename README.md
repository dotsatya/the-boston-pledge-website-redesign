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

**The Boston Pledge (TBP)** is an independent, volunteer-driven non-profit incubator founded to catalyze grassroots development and economic dignity in undernourished and rural communities. Guided by Chairman **Dr. Partha S. Ghosh** and an international council of faculty, corporate executives, and grassroots practitioners, all leadership and advisory roles operate **100% pro bono** with zero monetary compensation.

Our key areas of focus include:
- **Grassroots Entrepreneurship**: Village-level micro-enterprises and self-help groups.
- **Rural Education & Literacy**: Digital classrooms, books, and youth learning kits.
- **Safe Water & Sanitation**: Arsenic detection and community filtration initiatives across rural delta communities.
- **Holistic Public Service**: Bridging privileged academic and corporate expertise with rural needs.

---

## 🚀 Key Features & Pages

The application is built on the **Next.js App Router** with full Static Site Generation (SSG):

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero banner, core mission pillars, featured events, news preview, and leadership highlights. |
| `/about` | **Overview** | Foundational narrative, historical legacy story, organizational pillars, and public reflections. |
| `/vision-mission` | **Vision & Mission** | The core vision doctrine, Albert Einstein quote banner, 3 actionable mission objectives, and the 10 Overarching Doctrines. |
| `/constitution` | **Constitution** | Charter guidelines, 6 Core Values, Rabindranath Tagore quote, and institutional compass card. |
| `/our-team` | **Our Team** | Executive Leadership and Advisory Council in a responsive 4-column grid with animated modal biography popups. |
| `/media` | **Our Frames** | Photo & Video gallery with category filtering, video embed players, and full-screen lightbox modal. |
| `/initiatives` | **Initiatives** | Deep-dive into grassroots programs across Education, Healthcare, Clean Water, and Youth Mentorship. |
| `/events` | **Events Hub** | Upcoming global symposiums, webinars, and past conference archive. |
| `/events/[slug]` | **Event Detail** | Dynamic SSG routes with agenda timelines, speaker profiles, and registration links. |
| `/latest-updates` | **News & Updates** | Field reports, newsletters, and milestones categorized by topic. |
| `/be-a-volunteer` | **Be A Volunteer** | Volunteer eligibility ethos, 6 basic assumptions/principles, 6 behavioral guidelines, Dr. Ghosh quote, and volunteer application form. |
| `/donate` | **Donate** | 501(c)(3) tax-deductible donation portal with preset amount tiles ($10, $20, $30, $40), custom amount field, donor details form, and transparent impact breakdown. |
| `/contact` | **Contact Us** | Symmetrical contact inquiry form with live Google Maps embed for Winchester, MA headquarters. |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (Version 16, App Router, Turbopack)
- **Library**: [React](https://react.dev/) 19 & React DOM
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: Custom accessible SVGs & Lucide Icons
- **Fonts**: [Geist](https://vercel.com/font) via `next/font`

---

## 📁 Project Structure

```text
boston-pledge/
├── app/                          # Next.js App Router routes
│   ├── about/                    # About Us page
│   ├── be-a-volunteer/           # Be A Volunteer page & application form
│   ├── constitution/             # Constitution & Charter page
│   ├── contact/                  # Contact page & live map embed
│   ├── donate/                   # 501(c)(3) Donation portal
│   ├── events/                   # Events hub & dynamic [slug] routes
│   ├── initiatives/              # Initiatives page
│   ├── latest-updates/           # Latest news & dynamic [slug] routes
│   ├── media/                    # Our Frames media gallery
│   ├── our-team/                 # Team page with bio modal popups
│   ├── vision-mission/           # Vision & Mission page
│   ├── globals.css               # Global CSS & Tailwind configuration
│   ├── layout.tsx                # Root layout (Navbar, Footer, ScrollToTop)
│   └── page.tsx                  # Home page
├── components/                   # Reusable UI component modules
│   ├── about/                    # About section components
│   ├── common/                   # Navbar, Footer, Icons, Logo, Modals
│   ├── constitution/             # Constitution hero, values, guidelines, CTA
│   ├── contact/                  # Contact form & Google Maps embed
│   ├── donate/                   # Donate hero, donation form, impact cards
│   ├── events/                   # Event cards, feed, detail layouts
│   ├── home/                     # Hero, previews, sections
│   ├── initiatives/              # Initiative pillars & hero
│   ├── latest-updates/           # Update feeds & detail views
│   ├── media/                    # Interactive media lightbox & category filters
│   ├── our-team/                 # Executive team cards & bio modal
│   ├── vision-mission/           # Vision & Mission sections & doctrines
│   └── volunteer/                # Volunteer form, principles, ground rules
├── lib/                          # Data models, content stores & utilities
│   ├── about/                    # Constitution, media, overview, team data
│   ├── eventsData.ts             # Events data & slug generator
│   ├── eventsDetails.ts          # Comprehensive event details
│   ├── latestUpdatesData.ts      # News & field updates data
│   └── volunteerData.ts          # Volunteer principles, ground rules & form
├── public/                       # Static assets, logos, and optimized graphics
│   ├── images/                   # Project images and badges
│   └── favicon.ico               # Site favicon
├── next.config.ts                # Next.js configuration (Turbopack, images)
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
| **Forest Dark** | `#242D21` | Dark card backgrounds, high-contrast headings |
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
