# DevLog

DevLog is a simple, open-source project journal built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). It gives you a place to document what you are building, why you made key decisions, the problems you encountered, and the milestones you reached.

The site is driven by Markdown, so adding a project or posting an update does not require a database or CMS. Clone the repository, replace the example content with your own, and deploy it as a static site.

## Features

- A landing page listing all of your projects
- A dedicated timeline for each project
- Optional milestone tracking
- Markdown project updates with tags and images
- Light and dark themes
- Static output that can be hosted on most web platforms

## Get started

You will need [Node.js 22.12 or newer](https://nodejs.org/) and npm.

```sh
git clone https://github.com/lmvicente/devlog.git
cd devlog
npm install
npm run dev
```

Open `http://localhost:4321` in your browser.

## Make it yours

Start by removing the example folders inside `src/project-log/`. Then update the following files with your own name, copy, and visual identity:

- `src/component/Header.astro` — site name, logo letter, and header tagline
- `src/pages/index.astro` — homepage heading and introduction
- `src/layouts/BaseLayout.astro` — default page description and other document metadata
- `public/favicon.svg` — browser icon
- `src/styles/global.css` — global styles and theme changes

Project data is validated by `src/content.config.ts`. Update its schemas if you want to add or change frontmatter fields.

## Add a project

Create a folder in `src/project-log/`. The folder name becomes the project's URL slug, so use a short, lowercase, hyphenated name.

```text
src/project-log/my-project/
└── index.md
```

Add the project's details to `index.md`:

```md
---
title: "My Project"
description: "A short explanation of what I am building and why."
startedDate: 2026-07-26
techstack: "Astro, TypeScript, Tailwind CSS"
---
```

The project will appear automatically on the homepage at `/projects/my-project`.

## Add a log entry

Add another Markdown file to the same project folder. The filename is only used to organize your content, but a date-first format keeps the directory easy to scan.

```text
src/project-log/my-project/
├── index.md
└── 2026-07-26-project-kickoff.md
```

Each entry needs a title and date:

```md
---
title: "Project kickoff"
date: 2026-07-26
tags: [planning, research]
milestone: true
---

Today I defined the first version of the project and documented the main
constraints. Next, I will build the smallest working prototype.
```

`milestone` defaults to `false`, and `tags` is optional. Entries marked as milestones also appear in the project's milestone tracker.

To include an image, place it beside the entry and reference it with a relative path:

```md
---
title: "First prototype"
date: 2026-07-30
cover: ./prototype.png
---

![The first working prototype](./prototype.png)
```

Log entries are displayed chronologically using their `date` value.

## Project structure

```text
/
├── public/                     # Static files such as the favicon
├── src/
│   ├── component/             # Reusable Astro components
│   ├── layouts/               # Shared page layout and metadata
│   ├── pages/                 # Homepage and generated project routes
│   ├── project-log/           # Your Markdown projects and entries
│   ├── styles/                # Global styles
│   └── content.config.ts      # Project and entry schemas
├── astro.config.mjs
└── package.json
```

## Available commands

- `npm run dev` starts the local development server.
- `npm run build` creates a production build in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run astro -- --help` shows the available Astro CLI commands.

## Deploy

Run `npm run build`, then deploy the generated `dist/` directory to any static hosting provider. Astro also provides deployment guides for [GitHub Pages, Netlify, Vercel, Cloudflare, and other platforms](https://docs.astro.build/en/guides/deploy/).

## Contributing

Contributions are welcome. Open an issue to suggest an improvement or submit a pull request with a focused change.


## License

Licensed under the [MIT License](LICENSE).