# Agents Guide - LastMileNow.github.io

This is a Next.js static site built with TypeScript. Use this guide when contributing.

## Development Commands

```bash
npm run dev       # Start development server (http://localhost:3000)
npm run build     # Build production static export
npm run start     # Start production server
npm run lint      # Run ESLint for code quality
```

**Note:** This project exports static HTML (`output: 'export'` in next.config.js). No test framework is configured.

## Project Structure

- `app/` - Next.js App Router pages (layout.tsx, page.tsx, [slug]/page.tsx)
- `lib/` - Shared utilities (posts.ts for blog, pages.ts for static pages)
- `content/` - Markdown content files (with fallback to root directory)
- `assets/` - Legacy CSS/JS files from original Jekyll site

## Code Style Guidelines

### Imports
- Use `@/` path alias for absolute imports: `import { x } from '@/lib/posts'`
- Use single quotes for all imports
- Order: external libraries → internal modules → types

```typescript
import { remark } from 'remark'
import { getPageData } from '@/lib/pages'
import type { Metadata } from 'next'
```

### Components & Pages
- Use function components with `export default` (async for data fetching)
- Use `export async function generateStaticParams()` for dynamic routes
- Use `export const metadata: Metadata` for page metadata

```typescript
export const metadata: Metadata = { title: 'Page Title' }

export default async function Page({ params }: { params: { slug: string } }) {
  const data = getData(params.slug)
  return <div>{/* JSX */}</div>
}
```

### TypeScript
- `strict` mode enabled - always type function parameters and returns
- Use inline types for simple objects, interfaces for reusable shapes
- Type assertion with `as` when parsing external data (gray-matter, etc.)

```typescript
function getPostData(slug: string) {
  return { slug, ...(matterResult.data as { title: string }) }
}
```

### Naming Conventions
- **Files**: kebab-case (page.tsx, blog-list.tsx, posts.ts)
- **Components**: PascalCase (BlogPage, HeroSection, PostCard)
- **Functions**: camelCase (getSortedPostsData, getAllPageSlugs)
- **Constants**: PascalCase for exports, camelCase for local

### Error Handling
- Return `null` from data helpers when file not found (lib/posts.ts:12)
- Use `notFound()` from `next/navigation` in pages for missing content
- Check `fs.existsSync()` before reading files (lib/posts.ts:11)

### Styling
- Global CSS with CSS custom properties in `app/globals.css`
- Use CSS variables for theming: `var(--accent)`, `var(--background)`
- Utility classes follow semantic naming: `.card`, `.container`, `.btn-primary`
- Inline styles only for dynamic values: `style={{ padding: '8rem 2rem' }}`
- Dark mode via `[data-theme='dark']` attribute selector

### Markdown Content
- Posts in `content/_posts/` (fallback to `_posts/`)
- Static pages in `content/` (fallback to root)
- Use gray-matter for frontmatter: `title`, `subtitle`, `date`, `tags`
- Process with remark and remark-html for rendering

```typescript
const processedContent = await remark().use(html).process(markdown)
```

### Icons
- Use lucide-react: `import { ArrowRight, Heart } from 'lucide-react'`
- Pass `size={20}` or `color="var(--accent)"` as props

### Linting
- ESLint configured with Next.js preset
- Run `npm run lint` before committing
- Fix all warnings/errors

### File Organization
- Keep page components in `app/` directory matching routes
- Data fetching utilities in `lib/`
- Export multiple related functions from single lib file (posts.ts:10-56)
