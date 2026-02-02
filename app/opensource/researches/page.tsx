import { remark } from 'remark'
import html from 'remark-html'
import { notFound } from 'next/navigation'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

export default async function ResearchPage() {
    const fullPath = path.join(process.cwd(), 'opensource', 'researches.md')
    if (!fs.existsSync(fullPath)) notFound()

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html, { sanitize: false })
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return (
        <article className="container page-container">
            <header className="page-header">
                <h1 className="page-title">{matterResult.data.title || 'Research'}</h1>
                {matterResult.data.subtitle && <p className="page-subtitle">{matterResult.data.subtitle}</p>}
            </header>
            <div
                className="page-content"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
        </article>
    )
}
