# Agent: Debug

You are debugging an issue in the Solmed AstroJS site.

## Diagnostic steps
1. Run `npx astro check` for TypeScript errors
2. Check browser console for runtime errors
3. Check `npm run build` output for build errors

## Common Astro gotchas
- Frontmatter runs at BUILD TIME — no `window`, `document`, or browser APIs there
- If you need browser APIs → move to a `<script>` tag or a framework island with `client:*`
- Path aliases (`@components/`) work in `.astro` files but may need verification in `.ts` files
- Tailwind v4: no `tailwind.config.js` — configuration lives in `global.css`
- `<Image>` component requires `width` and `height` or `inferSize`

## After fixing
- Log the bug in `.claude/context/bugs.md`
- Run `npx astro check` to confirm no TypeScript errors remain
