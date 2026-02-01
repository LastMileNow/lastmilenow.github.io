import { getPostData, getAllPostIds } from '@/lib/posts'
import { remark } from 'remark'
import html from 'remark-html'

export async function generateStaticParams() {
  const paths = getAllPostIds()
  return paths
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const postData = await getPostData(slug)

  const processedContent = await remark()
    .use(html)
    .process(postData.content)
  const contentHtml = processedContent.toString()

  return (
    <article className="container post-container">
      <header className="post-header">
        <h1 className="post-title">{postData.title}</h1>
        {postData.subtitle && <p className="post-subtitle">{postData.subtitle}</p>}
        <div className="post-meta">
          <span>{slug.substring(0, 10)}</span>
          {postData.tags && (
            <div className="tags">
              {postData.tags.map((tag: string) => (
                <span key={tag} className="tag">#{tag}</span>
              ))}
            </div>
          )}
        </div>
      </header>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  )
}
