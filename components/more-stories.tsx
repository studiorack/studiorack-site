import PostPreview from './post-preview'
import Doc from '../types/doc'

type Props = {
  docs: Doc[]
}

const MoreStories = ({ docs }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {docs.map((doc) => (
          <PostPreview
            key={doc.slug}
            title={doc.title}
            coverImage={doc.coverImage}
            date={doc.date}
            author={doc.author}
            slug={doc.slug}
            excerpt={doc.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
