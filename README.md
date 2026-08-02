# Portfolio — Rudranil Mondal

A personal portfolio frontend showcasing featured projects, tech stack, and contact form. Built with React + Vite and styled with Tailwind CSS. The site includes 3D models (Three.js / react-three-fiber), GSAP animations, and an interactive projects carousel.

## What this repo contains

- A React (Vite) single-page portfolio front-end located under `src/`.
- Project data and site constants in `src/constants/index.js` (`projects`, `navLinks`, `tech lists`).
- Sections implemented under `src/sections/` (Hero, Projects/Showcase, TechStack, Contact, Footer, etc.).
- Reusable UI components under `src/components/` (Button, AnimatedCounter, NavBar, 3D models).
- Public assets (images and models) in `public/`.

## Features

- Responsive hero with integrated 3D model.
- Projects carousel with Live Demo and GitHub links.
- Tech stack showcase using 3D models and icons.
- Contact form wired to EmailJS (uses env vars).
- Smooth animations driven by GSAP.

## Tech stack / Key dependencies

- Runtime: Node.js, npm
- Frameworks & libraries:
	- `react`, `react-dom`
	- `vite` (dev server / build)
	- `tailwindcss` (styling)
	- `gsap` and `@gsap/react` (animations)
	- `three`, `@react-three/fiber`, `@react-three/drei` (3D models)
	- `react-hot-toast` (toasts)
	- `@emailjs/browser` (contact form email)

You can see the full dependency list in `package.json`.

## Local setup

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
npm run preview
```

## Environment variables

The contact form requires EmailJS keys. Create a `.env` file at the project root (Vite expects `VITE_` prefixes):

```
VITE_EMAIL_SERVICE_ID=your_service_id
VITE_EMAIL_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key
```

## How to update featured projects

- Edit `src/constants/index.js` and update the `projects` array. Each project object uses these keys:
	- `title` (string)
	- `description` (string)
	- `tech` (string[])
	- `liveLink` (string) — link to live demo (optional)
	- `githubLink` (string)
	- `imgPath` (string) — path under `public/images`
	- `date` (string)

- The projects carousel (`src/sections/ShowcaseSection.jsx`) currently shows a "Live Demo" button only for projects that have a demo. That logic is controlled by the `demoProjects` set in that file and the existence of `liveLink` on the project. For clarity you can either:
	- Add the project `title` to the `demoProjects` set, or
	- Add `liveLink` to the project object and then modify the carousel to rely on `project.liveLink` directly (recommended: convert to a `hasDemo` boolean or rely on `liveLink`).

## Assets

- Images live in `public/images/`. Add or replace image files with the same names referenced in `projects`.
- 3D model files are under `public/models/` and referenced from `techStackIcons` and model components.

## Project maintenance notes (recent changes)

- The projects section was refactored to a carousel. Live Demo buttons render when the project is included in the `demoProjects` set and `liveLink` exists.
- `Testimonials`, `Experience` and `LogoSection` are intentionally not rendered in `src/App.jsx` at the moment.
- CTA button component was updated to accept `targetId` for reliable scrolling.

## Troubleshooting

- If a Live Demo button is not showing for a project, confirm that:
	1. The project object includes a valid `liveLink` key.
	2. The project title is present in `src/sections/ShowcaseSection.jsx`'s `demoProjects` set (or change the carousel logic to use `project.liveLink`).

- Broken images: ensure the filename used in `imgPath` exists in `public/images/`.

## Next improvements (optional)

- Replace the `demoProjects` set with a `hasDemo` boolean or simply check `project.liveLink` to determine demo availability.
- Add keyboard navigation and swipe gestures to the carousel for better UX.
- Add unit tests for critical components.

---

If you want, I can: convert the demo detection to a `liveLink`-based check, add keyboard/swipe controls to the carousel, or generate placeholder images for any missing assets—which would you like next?
