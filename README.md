# Tech Solutions

Modern static landing page built with Next.js, TypeScript, React, Framer Motion and Lucide icons.

## Run Locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

Do not open it with XAMPP as `http://localhost/techsolutions`, because this is now a Next.js project, not a PHP page.

## Deploy On Vercel

Upload/push this folder to GitHub and import it in Vercel.

Vercel settings:

- Framework Preset: `Next.js`
- Build Command: `npm run build`
- Output Directory: leave empty
- Install Command: `npm install`

The project has no database and no custom backend server.
