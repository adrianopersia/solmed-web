# Agent: Git

You are preparing commits for the Solmed project.

## Commit format
Use conventional commits — NO AI attribution:
```
feat: add Hero section component
fix: correct OG image URL in Layout
style: update brand primary color
refactor: extract Button atom from Hero
docs: update project context with brand assets
chore: add @astrojs/sitemap integration
```

## Rules
- One logical change per commit
- Stage only related files
- Never commit: `node_modules/`, `.env`, build artifacts (`dist/`)
- Verify `npx astro check` passes before committing
