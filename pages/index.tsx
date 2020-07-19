import { Component } from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/index.module.css'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getPlugins, Plugin } from '../lib/plugins'
import { withRouter, Router } from 'next/router'

class App extends Component<{
  plugins: Plugin[],
  router: Router
}, {
  pluginsFiltered: Plugin[]
  router: Router
  query: string,
}> {

  constructor(props) {
    super(props)
    this.state = {
      pluginsFiltered: props.plugins,
      router: props.router,
      query: ''
    }
  }

  handleChange = (event) => {
    const query = event.target.value.toLowerCase()
    const filtered = this.props.plugins.filter((plugin) => {
      if (plugin.name.toLowerCase().indexOf(query) != -1 ||
        plugin.description.toLowerCase().indexOf(query) != -1 ||
        plugin.tags.includes(query)) {
        return plugin
      }
      return false
    })
    this.setState({
      pluginsFiltered: filtered,
      query: query
    })
    console.log(query, filtered)
  }

  render() {
    return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={`${styles.section} ${styles.sectionCreators}`} id="template">
          <div className={styles.container}>
            <div className={styles.inner}>
              <img className={styles.sectionImage} src={`${this.state.router.basePath}/images/creators.jpg`} alt="Creators" />
              <h2 className={styles.title}>Automate your plugin publishing workflow</h2>
              <p>Our plugin starter template uses GitHub Actions to build your plugin with the Steinberg VST3 SDK, publishing a new version straight to Github Releases.</p>
              <a className="button" href="https://github.com/audio-project-manager/apm-plugin" target="_blank">Use the plugin template</a>
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.sectionProducers}`} id="app">
          <div className={styles.container}>
            <div className={styles.inner}>
              <img className={styles.sectionImage} src={`${this.state.router.basePath}/images/producers.jpg`} alt="Producers" />
              <h2 className={styles.title}>Easy plugin installation &amp; management</h2>
              <p>Our app and command line tools allow you to search our plugin registry for free plugins. You can install and manage plugin versions all from one place.</p>
              <a className="button" href="https://github.com/audio-project-manager/apm-cli" target="_blank">Install the CLI</a>
            </div>
          </div>
        </section>
        <section className={styles.plugins} id="plugins">
          <div className={styles.pluginsHeader}>
            <h3 className={styles.pluginsTitle}>Plugins</h3>
            <input className={styles.pluginsSearch} placeholder="Filter by keyword" value={this.state.query} onChange={this.handleChange} />
          </div>
          <div className={styles.pluginsList}>
            {this.state.pluginsFiltered.map(({ slug, name, tags, version}) => (
              <Link href="/plugins/[slug]" as={`/plugins/${slug}`} key={name}>
                <div className={styles.plugin}>
                  <img className={styles.pluginImage} src={`${this.state.router.basePath}/images/plugin.jpg`} alt={name} />
                  <div className={styles.pluginDetails}>
                    <h4 className={styles.pluginTitle}>{name} <span className={styles.pluginVersion}>v{version}</span></h4>
                    <ul className={styles.pluginTags}>
                      <img className={styles.pluginIcon} src={`${this.state.router.basePath}/images/icon-tag.svg`} alt="Tags" />
                      {tags.map((tag) => (
                        <li className={styles.pluginTag} key={tag}>{tag},</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Layout>
    )
  }
}
export default withRouter(App)

export const getStaticProps: GetStaticProps = async () => {
  const plugins = await getPlugins()
  console.log(plugins)
  return {
    props: {
      plugins
    }
  }
}
