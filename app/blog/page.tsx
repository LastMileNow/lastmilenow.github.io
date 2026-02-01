import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'

export default function BlogPage() {
  const allPostsData = getSortedPostsData()

  return (
    <div className="container" style={{ padding: '8rem 2rem' }}>
      <h1 className="section-title">Latest Updates</h1>
      <div className="posts-grid">
        {allPostsData.map(({ id, title, subtitle }) => (
          <Link href={`/blog/${id}`} key={id} className="card post-card">
            <span className="post-date">{id.substring(0, 10)}</span>
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
            <span className="read-more">Read More →</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
