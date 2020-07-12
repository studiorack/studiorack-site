import { Component } from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import { getPlugins, Plugin } from '../lib/plugins'

export default class App extends Component<{
  plugins: Plugin[]
}, {
  pluginsFiltered: Plugin[]
  query: string,
}> {

  constructor(props) {
    super(props)
    this.state = {
      pluginsFiltered: props.plugins,
      query: ''
    }
  }

  handleChange = (event) => {
    const query = event.target.value.toLowerCase()
    const filtered = this.props.plugins.filter((plugin) => {
      if (plugin.name.toLowerCase().indexOf(query) != -1 ||
        plugin.description.toLowerCase().indexOf(query) != -1 ||
        plugin.tags.includes(query)) {
        return plugin;
      }
      return false;
    })
    this.setState({
      pluginsFiltered: filtered,
      query: query
    })
    console.log(query, filtered);
  }

  render() {
    return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Audio plugin registry containing plugin metadata, which is searchable and filterable</p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <div className={utilStyles.header}>
            <h2 className={[utilStyles.headingLg, utilStyles.headerCell].join(' ')}>Plugins</h2>
            <input className={utilStyles.headerSearch} placeholder="Search" value={this.state.query} onChange={this.handleChange} />
          </div>
          <ul className={utilStyles.list}>
            {this.state.pluginsFiltered.map(({ author, description, homepage, id, name, tags, version}) => (
              <li className={utilStyles.listItem} key={name}>
                <h3>{name} <small className={utilStyles.lightText}>v{version}</small></h3>
                <p>{name}</p>
                <hr />
                <div className={utilStyles.row}>
                  <div className={utilStyles.cell}>
                    <p className={utilStyles.codeLabel}>Download:</p>
                    <a className={utilStyles.downloadButton} href={`https://github.com/${id}/releases/latest/download/plugin-linux.zip`}>Linux</a>
                    <a className={utilStyles.downloadButton} href={`https://github.com/${id}/releases/latest/download/plugin-mac.zip`}>MacOS</a>
                    <a className={utilStyles.downloadButton} href={`https://github.com/${id}/releases/latest/download/plugin-win.zip`}>Windows</a>
                  </div>
                  <div className={utilStyles.cell}>
                    <p className={utilStyles.codeLabel}>Install command:</p>
                    <pre className={utilStyles.codeBox}>apm install {id}</pre>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    )
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const plugins = await getPlugins()
  const allPostsData = getSortedPostsData()
  console.log(plugins)
  return {
    props: {
      plugins,
      allPostsData
    }
  }
}
