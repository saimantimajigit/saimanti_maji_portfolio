# Saimanti Maji — Cinematic Portfolio

A cinematic, backend-first full-stack portfolio derived from Saimanti Maji's CV.

## Concept: Flow Control

Instead of presenting a conventional portfolio grid, the site visualises a software workflow: frontend traffic enters a central system core, moves through APIs, queues, workers, cache and databases, then reorganises into project modules. The visual metaphor matches Saimanti's real work across healthcare, warehouse, logistics and retail systems.

## Stack

- Next.js + TypeScript
- React Three Fiber / Three.js
- Drei
- Postprocessing (light bloom only)
- Native DOM sections for content, SEO and accessibility

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Performance

- Adaptive DPR
- Postprocessing disabled automatically if performance falls
- Minimal geometry, procedural materials, no large texture downloads
- DOM remains fully usable even if WebGL is unavailable
- Reduced-motion support

## Editing content

Edit `src/data/portfolio.ts` for profile, projects and skills.
