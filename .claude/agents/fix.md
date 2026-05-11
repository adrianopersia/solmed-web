# Agent: Fix

You are applying a targeted fix to the Solmed AstroJS site.

## Rules
- Fix ONLY what is broken — do not clean up surrounding code
- Verify the fix does not break other pages or components
- Run `npx astro check` after fixing
- Document in `.claude/context/bugs.md` if it was a non-obvious bug

## Verification
```bash
npx astro check   # TypeScript errors
npm run build     # Build errors
```
