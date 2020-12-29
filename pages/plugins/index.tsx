import { Component, ChangeEvent, SyntheticEvent } from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/plugins.module.css'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { withRouter, Router } from 'next/router'
import { pathFromSlashes, Plugin, pluginLatest, pluginsGet } from '@studiorack/core'

type PluginListProps = {
  plugins: Plugin[],
  router: Router
}

class PluginList extends Component<PluginListProps, {
  pluginsFiltered: Plugin[]
  router: Router
  query: string,
}> {

  constructor(props: PluginListProps) {
    super(props)
    this.state = {
      pluginsFiltered: props.plugins || [],
      router: props.router,
      query: ''
    }
  }

  handleChange = (event: ChangeEvent) => {
    const el = event.target as HTMLInputElement
    const query = el.value ? el.value.toLowerCase() : ''
    const filtered = this.props.plugins.filter((plugin) => {
      if (plugin.name.toLowerCase().indexOf(query) !== -1 ||
        plugin.description.toLowerCase().indexOf(query) !== -1 ||
        plugin.tags.includes(query)) {
        return plugin
      }
      return false
    })
    this.setState({
      pluginsFiltered: filtered || [],
      query
    })
  }

  imageError = (event: SyntheticEvent) => {
    const el = event.target as HTMLImageElement
    const fallback = `${this.state.router.basePath}/images/plugin.png`
    if (el.getAttribute('src') !== fallback) {
      el.setAttribute('src', fallback)
    }
    return undefined
  }

  getRepo = (plugin: Plugin) => {
    return plugin.id?.slice(0, plugin.id.lastIndexOf('/'))
  }

  getPluginId = (plugin: Plugin) => {
    return plugin.id?.slice(plugin.id.lastIndexOf('/') + 1)
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={styles.plugins}>
          <div className={styles.pluginsHeader}>
            <h3 className={styles.pluginsTitle}>Plugins <span className={styles.pluginCount}>({this.state.pluginsFiltered.length})</span></h3>
            <input className={styles.pluginsSearch} placeholder="Filter by keyword" value={this.state.query} onChange={this.handleChange} />
          </div>
          <div className={styles.pluginsList}>
            {this.state.pluginsFiltered.map((plugin, pluginIndex) => (
              <Link href="/plugins/[slug]" as={`/plugins/${plugin.slug}`} key={`${plugin.name}-${pluginIndex}`}>
                <div className={styles.plugin}>
                  <div className={styles.pluginDetails}>
                    <div className={styles.pluginHead}>
                      <h4 className={styles.pluginTitle}>{plugin.name} <span className={styles.pluginVersion}>v{plugin.version}</span></h4>
                      {plugin.status === 'installed' ?
                        <span className={styles.pluginButtonInstalled}><img className={styles.pluginButtonIcon} src={`${this.state.router.basePath}/images/icon-installed.svg`} alt="Installed" /></span>
                        :
                        <span className={styles.pluginButton}><img className={styles.pluginButtonIcon} src={`${this.state.router.basePath}/images/icon-download.svg`} alt="Download" /></span>
                      }
                    </div>
                    <ul className={styles.pluginTags}>
                      <img className={styles.pluginIcon} src={`${this.state.router.basePath}/images/icon-tag.svg`} alt="Tags" />
                      {plugin.tags.map((tag, tagIndex) => (
                        <li className={styles.pluginTag} key={`${tag}-${tagIndex}`}>{tag},</li>
                      ))}
                    </ul>
                  </div>
                  { plugin.files.image ?
                    <img className={styles.pluginImage} src={`https://github.com/${this.getRepo(plugin)}/releases/download/${plugin.release}/${plugin.files.image.name}`} alt={plugin.name} onError={this.imageError} />
                    : ""
                  }
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Layout>
    )
  }
}
export default withRouter(PluginList)

export const getStaticProps: GetStaticProps = async () => {
  const plugins = await pluginsGet()
  const list:Plugin[] = []
  for (const pluginId in plugins) {
    const plugin = pluginLatest(plugins[pluginId])
    list.push(plugin)
  }
  return {
    props: {
      plugins: list
    }
  }
}
