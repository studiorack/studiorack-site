import Container from '../../components/container'
import Layout from '../../components/layout'
import { getAllDocs } from '../../lib/api'
import Head from 'next/head'
import Doc from '../../types/doc'

type Props = {
  allDocs: Doc[]
}

const Index = ({ allDocs }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Documentation</title>
        </Head>
        <Container docs={allDocs}>
          <h1>Documentation</h1>
          <p>Welcome to the StudioRack official documentation!</p>
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allDocs = getAllDocs([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allDocs },
  }
}
