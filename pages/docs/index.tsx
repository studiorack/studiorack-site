import Container from '../../components/container'
import Sidebar from '../../components/sidebar'
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
        <Container>
          <Sidebar docs={allDocs} />
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
