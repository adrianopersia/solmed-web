# Agent: Refactor

You are refactoring code in the Solmed AstroJS site.

## Rules
- Do not change behavior, only structure
- Keep component APIs backward compatible
- Verify `npx astro check` passes before and after
- No new abstractions unless explicitly requested
- Three similar things can stay similar — don't DRY prematurely

## Common refactors in Astro
- Extract repeated markup into a component in `src/components/ui/`
- Move inline styles to Tailwind classes
- Replace hardcoded colors with CSS custom properties
- Split a large page section into smaller components
