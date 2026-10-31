import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Try content/_posts first, then fallback to _posts
const postsDirectory = fs.existsSync(path.join(process.cwd(), 'content', '_posts'))
    ? path.join(process.cwd(), 'content', '_posts')
    : path.join(process.cwd(), '_posts')

export function getSortedPostsData() {
    if (!fs.existsSync(postsDirectory)) return []

    // Get file names under /_posts
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
        .filter(fn => fn.endsWith('.md'))
        .map((fileName) => {
            // Remove ".md" from file name to get id
            const id = fileName.replace(/\.md$/, '')

            // Read markdown file as string
            const fullPath = path.join(postsDirectory, fileName)
            const fileContents = fs.readFileSync(fullPath, 'utf8')

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents)

            // Combine the data with the id
            return {
                id,
                ...(matterResult.data as { date: string; title: string; subtitle?: string;[key: string]: any }),
            }
        })
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.id < b.id) {
            return 1
        } else {
            return -1
        }
    })
}

// Parse YYYY-M-D from the start of a post id and return a zero-padded YYYY-MM-DD
export function getPostDate(id: string): string {
    const match = id.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/)
    if (!match) return ''
    const [, year, month, day] = match
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
}

export function getAllPostIds() {
    if (!fs.existsSync(postsDirectory)) return []
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames
        .filter(fn => fn.endsWith('.md'))
        .map((fileName) => {
            return {
                slug: fileName.replace(/\.md$/, ''),
            }
        })
}

export async function getPostData(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    return {
        slug,
        content: matterResult.content,
        ...(matterResult.data as { date: string; title: string; subtitle?: string; tags?: string[];[key: string]: any }),
    }
}
