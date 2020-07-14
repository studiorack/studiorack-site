import Layout from '../../components/layout'
import { getAllPluginPaths, getPluginData, Plugin } from '../../lib/plugins'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({
  plugin
}: {
  plugin: Plugin
}) {
  return (
    <Layout>
      <Head>
        <title>{plugin.name}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{plugin.name} <small className={utilStyles.lightText}>v{plugin.version}</small></h1>
        <h4>By <a href={plugin.homepage} target="_blank">{plugin.author}</a></h4>
        <p>{plugin.description}</p>
        <ul className={utilStyles.tags}>
          <span>Tags: </span>
          {plugin.tags.map((tag) => (
            <li className={utilStyles.tag} key={tag}>{tag}</li>
          ))}
        </ul>
        <div className={utilStyles.getPlugin}>
          <h3 className={utilStyles.getPluginTitle}>Get the plugin</h3>
          <div className={utilStyles.row}>
            <div className={utilStyles.cell}>
              <p className={utilStyles.codeLabel}>Download .zip file:</p>
              <a className={utilStyles.downloadButton} href={`https://github.com/${plugin.id}/releases/latest/download/plugin-linux.zip`}>Linux</a>
              <a className={utilStyles.downloadButton} href={`https://github.com/${plugin.id}/releases/latest/download/plugin-mac.zip`}>MacOS</a>
              <a className={utilStyles.downloadButton} href={`https://github.com/${plugin.id}/releases/latest/download/plugin-win.zip`}>Windows</a>
            </div>
            <div className={utilStyles.cell}>
              <p className={utilStyles.codeLabel}>Install via command line:</p>
              <pre className={utilStyles.codeBox}>apm install {plugin.id}</pre>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPluginPaths()
  console.log(paths)
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const plugin = await getPluginData(params.slug as string)
  console.log(plugin)
  return {
    props: {
      plugin
    }
  }
}
