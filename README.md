# TechSolutions

TechSolutions is a modern B2B technology-services website created for a fictional digital consultancy. The project focuses on clear service communication, strong visual hierarchy, and a responsive interface that presents a professional technology brand.

It is intentionally frontend-first: a deployable portfolio website that demonstrates modern React and Next.js development without requiring a database or custom server.

## Highlights

- Modern responsive landing page for a technology consultancy
- Clear service, process, value proposition, and contact sections
- Motion-enhanced interactions with Framer Motion
- Lucide icon system for a consistent interface language
- Mobile-first responsive layout
- Static architecture ready to connect to a future CRM, contact API, or backend service
- Production deployment compatibility with Vercel

## Experience Design

The site is structured around how a prospective client evaluates a technology partner: understanding the offer, reviewing services, seeing the approach, and moving naturally to contact. The visual system uses focused typography, restrained color, accessible contrast, and responsive spacing to keep the experience professional across screens.

## Project Structure

```text
techsolutions/
├── app/            Next.js App Router pages and components
├── public/         Static assets
├── package.json    Dependencies and project scripts
├── next.config.ts  Next.js configuration
└── tsconfig.json   TypeScript configuration
```

## Technology

- Next.js 15
- React 19
- TypeScript
- Framer Motion
- Lucide React
- CSS
- Vercel-ready deployment

## Engineering Notes

- The project uses the Next.js App Router architecture.
- Components are written in TypeScript for clearer contracts and safer refactoring.
- Animation is used selectively to support hierarchy and interaction, not as decoration.
- The frontend is structured so form handling and backend integrations can be introduced later without redesigning the interface.

## Author

Built by [Arlind Hyseni](https://www.arlindhyseni.online) as a frontend portfolio project.
## Live Demo
https://techsolutions-nextjs.vercel.app/
