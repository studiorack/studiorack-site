import Layout from '../../components/layout'
import { getAllPluginPaths, getPluginData, Plugin } from '../../lib/plugins'
import Head from 'next/head'
import styles from '../../styles/plugin.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

export default function Post({
  plugin
}: {
  plugin: Plugin
}) {
  const {basePath} = useRouter()
  return (
    <Layout>
      <Head>
        <title>{plugin.name}</title>
      </Head>
      <article>
        <div className={styles.header}>
          <div className={styles.headerInner}>
            <img className={styles.image} src={`https://github.com/${plugin.id}/releases/latest/download/plugin.png`} alt={plugin.name} />
            <div className={styles.details}>
              <h3 className={styles.title}>{plugin.name} <span className={styles.version}>v{plugin.version}</span></h3>
              <p className={styles.author}>By <a href={plugin.homepage} target="_blank">{plugin.author}</a></p>
              <p>{plugin.description}</p>
              <ul className={styles.tags}>
                <img className={styles.icon} src={`${basePath}/images/icon-tag.svg`} alt="Tags" />
                {plugin.tags.map((tag) => (
                  <li className={styles.tag} key={tag}>{tag},</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.options}>
          <div className={styles.row}>
            <div className={`${styles.cell} ${styles.download}`}>
              <p>Download .zip file:</p>
              <a className={`button ${styles.button}`} href={`https://github.com/${plugin.id}/releases/latest/download/plugin-linux.zip`}>Linux</a>
              <a className={`button ${styles.button}`} href={`https://github.com/${plugin.id}/releases/latest/download/plugin-mac.zip`}>MacOS</a>
              <a className={`button ${styles.button}`} href={`https://github.com/${plugin.id}/releases/latest/download/plugin-win.zip`}>Windows</a>
            </div>
            <div className={`${styles.cell} ${styles.install}`}>
              <p>Install via command line:</p>
              <pre className={styles.codeBox}>studiorack install {plugin.id}</pre>
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
