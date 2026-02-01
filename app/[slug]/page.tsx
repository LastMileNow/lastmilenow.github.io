import { getPageData, getAllPageSlugs } from '@/lib/pages'
import { remark } from 'remark'
import html from 'remark-html'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = getAllPageSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const pageData = getPageData(slug)

  if (!pageData) {
    notFound()
  }

  const processedContent = await remark()
    .use(html)
    .process(pageData.content)
  const contentHtml = processedContent.toString()

  return (
    <article className="container page-container">
      <header className="page-header">
        <h1 className="page-title">{pageData.title}</h1>
        {pageData.subtitle && <p className="page-subtitle">{pageData.subtitle}</p>}
      </header>
      <div
        className="page-content"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  )
}
