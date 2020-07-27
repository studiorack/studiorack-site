import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import HeroPost from '../../components/hero-post'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import { getAllDocs } from '../../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import Doc from '../../types/doc'

type Props = {
  allDocs: Doc[]
}

const Index = ({ allDocs }: Props) => {
  const heroDoc = allDocs[0]
  const moreDocs = allDocs.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroDoc && (
            <HeroPost
              title={heroDoc.title}
              coverImage={heroDoc.coverImage}
              date={heroDoc.date}
              author={heroDoc.author}
              slug={heroDoc.slug}
              excerpt={heroDoc.excerpt}
            />
          )}
          {moreDocs.length > 0 && <MoreStories docs={moreDocs} />}
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
