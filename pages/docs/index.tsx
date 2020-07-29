import { Component } from 'react'
import Container from '../../components/container'
import Layout from '../../components/layout'
import { getAllDocs } from '../../lib/api'
import Head from 'next/head'
import Doc from '../../types/doc'
import { withRouter, Router } from 'next/router'

class DocList extends Component<{
  allDocs,
  router: Router
}, {
  allDocs: Doc[]
  router: Router
}> {

  constructor(props) {
    super(props)
    this.state = {
      allDocs: props.allDocs,
      router: props.router
    }
  }

  render() {
    return (
    <>
      <Layout>
        <Head>
          <title>Documentation</title>
        </Head>
        <Container docs={this.state.allDocs}>
          <h1>Documentation</h1>
          <p>Welcome to the StudioRack official documentation!</p>
          <p><a href={`${this.state.router.basePath}/docs/01-getting-started`}>Getting started &gt;</a></p>
        </Container>
      </Layout>
    </>
    )
  }
}
export default withRouter(DocList)

export const getStaticProps = async () => {
  const allDocs = getAllDocs([
    'title',
    'slug'
  ])

  return {
    props: { allDocs },
  }
}
