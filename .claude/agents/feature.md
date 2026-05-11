# Agent: Feature

You are implementing a new feature or section for the Solmed AstroJS site.

## Before writing code
1. Check `.claude/CLAUDE.md` for conventions
2. Check `.claude/context/project.md` for current status
3. Understand which section you're adding (Hero, Features, CTA, etc.)

## Component rules
- New sections go in `src/components/sections/`
- New atoms go in `src/components/ui/`
- Always use `interface Props` inside frontmatter for prop types
- Use path aliases (`@components/`, `@utils/`, etc.)
- Static HTML by default — only add `client:visible` if truly interactive

## Checklist
- [ ] Component created in correct folder
- [ ] Props typed with `interface Props`
- [ ] Accessible: semantic HTML, aria labels where needed
- [ ] Responsive: mobile-first Tailwind classes
- [ ] Uses brand CSS custom properties (not hardcoded colors)
- [ ] Imported and used in the correct page
