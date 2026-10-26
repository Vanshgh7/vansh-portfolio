# Vansh Pipaliya — 3D Portfolio

Personal 3D interactive portfolio of **Vansh Pipaliya**, Full-Stack Developer and ML & DevSecOps engineer. Built with React, TypeScript, Three.js, React Three Fiber, and GSAP.

Based on the open-source 3d-portfolio template by akashrmalhotra (MIT).

## Features

- Responsive portfolio layout with interactive 3D character and physics-based tech sphere simulation.
- GSAP-powered animations, smooth scrolling, and custom cursor effects.
- Sections covering About Me, What I Do, Career Experience, Featured Projects, Tech Stack, and Contact.

## Tech Stack

### Core
- React 18
- TypeScript
- Vite

### Animation & 3D
- GSAP + `@gsap/react`
- Three.js
- `@react-three/fiber`
- `@react-three/drei`
- `@react-three/postprocessing`
- `@react-three/cannon`
- `@react-three/rapier`

### Supporting Libraries
- `react-icons`
- `react-fast-marquee`

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

1. Clone repository:
   ```bash
   git clone https://github.com/Vanshgh7/3d-portfolio.git
   cd 3d-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

## Available Scripts

- `npm run dev` — Starts Vite dev server.
- `npm run build` — Runs TypeScript check and builds for production.
- `npm run preview` — Locally previews production build.
- `npm run lint` — Runs ESLint checks.

## Deployment

1. Build for production:
   ```bash
   npm run build
   ```

2. Deploy the generated `dist/` directory to your static hosting provider (e.g. static hosting platforms).

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
