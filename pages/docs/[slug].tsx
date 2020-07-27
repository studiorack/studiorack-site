import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getDocBySlug, getAllDocs } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import Doc from '../../types/doc'
import Sidebar from '../../components/sidebar'

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
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {doc.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:image" content={doc.ogImage.url} />
              </Head>
              <Sidebar docs={allDocs} />
              <PostHeader
                title={doc.title}
                coverImage={doc.coverImage}
                date={doc.date}
                author={doc.author}
              />
              <PostBody content={doc.content} />
            </article>
          </>
        )}
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