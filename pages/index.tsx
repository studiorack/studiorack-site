import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import { getPlugins, Plugin } from '../lib/plugins'

export default function Home({
  plugins
}: {
  plugins: Plugin[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Audio plugin registry containing plugin metadata, which is searchable and filterable</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Plugins</h2>
        <ul className={utilStyles.list}>
          {plugins.map(({ author, description, homepage, id, name, tags, version}) => (
            <li className={utilStyles.listItem} key={name}>
              <h3>{name}</h3>
              <p>{name}</p>
              <small className={utilStyles.lightText}>
                v{version}
              </small>
              <hr />
              <div>
                <p className={utilStyles.codeLabel}>Installation:</p>
                <pre className={utilStyles.codeBox}>apm install {id}</pre>
              </div>
              <div>
                <p className={utilStyles.codeLabel}>Download:</p>
                <button className={utilStyles.downloadButton}>Linux</button>
                <button className={utilStyles.downloadButton}>MacOS</button>
                <button className={utilStyles.downloadButton}>Windows</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const plugins = await getPlugins()
  const allPostsData = getSortedPostsData()
  console.log(plugins);
  return {
    props: {
      plugins,
      allPostsData
    }
  }
}
