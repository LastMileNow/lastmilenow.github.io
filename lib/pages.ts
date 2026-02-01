import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Try content directory first, then fallback to root
const contentDirectory = fs.existsSync(path.join(process.cwd(), 'content'))
    ? path.join(process.cwd(), 'content')
    : process.cwd()

export function getPageData(slug: string) {
    const fullPath = path.join(contentDirectory, `${slug}.md`)
    if (!fs.existsSync(fullPath)) return null

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
        slug,
        content: matterResult.content,
        ...(matterResult.data as { title: string; subtitle?: string;[key: string]: any }),
    }
}

export function getAllPageSlugs() {
    // Only return markdown files that aren't posts or system files
    const fileNames = fs.readdirSync(contentDirectory)
    const systemFiles = ['README', 'LICENSE', 'NEW_MISSION', 'CHANGELOG']

    return fileNames
        .filter(fn => fn.endsWith('.md'))
        .map(fn => fn.replace(/\.md$/, ''))
        .filter(slug => !systemFiles.includes(slug))
}
