import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import Layout from '../../components/layout'
import { getDocBySlug, getAllDocs } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import Doc from '../../types/doc'
import markdownStyles from '../../components/markdown-styles.module.css'

type Props = {
  allDocs: Doc[]
  doc: Doc
  preview?: boolean
}

const DocDetail = ({ allDocs, doc, preview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !doc?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container docs={allDocs}>
        <h1>{doc.title}</h1>
        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: doc.content }}
        />
      </Container>
    </Layout>
  )
}

export default DocDetail

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const allDocs = getAllDocs([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  const doc = getDocBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(doc.content || '')

  return {
    props: {
      allDocs,
      doc: {
        ...doc,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const docs = getAllDocs(['slug'])

  return {
    paths: docs.map((docs) => {
      return {
        params: {
          slug: docs.slug,
        },
      }
    }),
    fallback: false,
  }
}