# CyReN — Cyber Resilient Networks Lab

Website for the Cyber Resilient Networks (CyReN) Lab, directed by Junaid Farooq
at the University of Michigan-Dearborn. Built with [Astro](https://astro.build)
in the University of Michigan palette, image-led editorial design.

## Deploying to the CyReN GitHub Pages repo

This folder is a complete site ready to push to the `mjfarooq.github.io-cyren`
repository. It is configured as a project page served at
`https://mjfarooq.github.io/mjfarooq.github.io-cyren/` (see `base` in
`astro.config.mjs`). To publish:

1. Copy these files into a clone of the `mjfarooq.github.io-cyren` repo.
2. Commit and push to `main`.
3. In that repo's settings, set Pages → Build and deployment → Source to
   **GitHub Actions**. The included `.github/workflows/deploy.yml` does the rest.

## Adding your real photos

Drop the shoot into `public/images/` over the branded placeholders, keeping the
same file names so nothing else needs to change:

- `public/images/hero-team.jpg` — full-bleed homepage hero (a team or lab shot)
- `public/images/team/farooq.jpg`, `xingqi.jpg`, `yuhui.jpg`, `ritesh.jpg`, `ehsan.jpg` — portraits
- `public/images/thrusts/oran.jpg`, `zerotrust.jpg`, `uav.jpg`, `ai.jpg` — research thrust images
- `public/images/gallery/g1.jpg` … `g6.jpg` — gallery strip

To change who appears or what a section says, edit the JSON in `src/data/`
(`lab.json`, `team.json`, `news.json`, `gallery.json`, `projects.json`).
Publications come from `src/data/publications.json`, the same list as the
faculty site.

## Local preview

```bash
npm install
npm run dev      # http://localhost:4321/mjfarooq.github.io-cyren
npm run build
```
