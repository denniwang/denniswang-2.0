import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'


type BlogProps = {
  limit?: number,
}

export function BlogPosts(props:BlogProps) {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .slice(0,props.limit ?? Infinity) 
        .map((post) => (
          <Link
            key={post.slug}
            className="group flex flex-col space-y-1 mb-4 transition-transform duration-200 ease-out hover:translate-x-1"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-muted w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="tracking-tight">
                {post.metadata.title}
                <span
                  aria-hidden="true"
                  className="ml-1 inline-block opacity-0 -translate-x-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0"
                  style={{ color: 'var(--accent)' }}
                >
                  →
                </span>
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
