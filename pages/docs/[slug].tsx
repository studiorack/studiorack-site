import { Component } from 'react'
import Container from '../../components/container'
import Layout from '../../components/layout'
import { getDocBySlug, getAllDocs } from '../../lib/api'
import Doc from '../../types/doc'
import markdownStyles from '../../styles/doc.module.css'
import remark from 'remark'
import html from 'remark-html'
import { withRouter, Router } from 'next/router'

class DocDetail extends Component<{
  allDocs,
  doc,
  router: Router
}, {
  allDocs: Doc[]
  doc: Doc
  router: Router
}> {

  constructor(props) {
    super(props)
    this.state = {
      allDocs: props.allDocs,
      doc: props.doc,
      router: props.router
    }
  }

  render() {
    return (
    <Layout>
      <Container docs={this.state.allDocs}>
        <h1>{this.state.doc.title}</h1>
        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: this.state.doc.content }}
        />
      </Container>
    </Layout>
    )
  }
}
export default withRouter(DocDetail)

type Params = {
  params: {
    slug: string
  }
}

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export async function getStaticProps({ params }: Params) {
  const allDocs = getAllDocs([
    'title',
    'slug'
  ])

  const doc = getDocBySlug(params.slug, [
    'title',
    'slug',
    'content'
  ]) as Doc
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
  const docs = getAllDocs(['slug']) as Doc[]

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