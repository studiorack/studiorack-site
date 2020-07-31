import { Component } from 'react'
import Head from 'next/head'
import styles from '../styles/layout.module.css'
import { withRouter, Router } from 'next/router'

export const siteTitle = 'StudioRack'
export const siteDesc = 'Automate your plugin publishing workflow, easy plugin installation and management'

class Layout extends Component<{
  children,
  home,
  router: Router
}, {
  children: React.ReactNode
  home?: boolean
  router: Router
}> {

  constructor(props) {
    super(props)
    this.state = {
      children: props.children,
      home: props.home,
      router: props.router
    }
  }

  isSelected = (path) => {
    if (path === '/') {
      return this.state.router.asPath === path ? 'active': ''
    }
    return this.state.router.asPath.startsWith(path) ? 'active': ''
  }

  render() {
    return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content={siteDesc} />
        <meta property="og:image" content={`${this.state.router.basePath}/images/creators-mobile.jpg`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&amp;display=swap" rel="stylesheet"></link>
        <link rel="apple-touch-icon" sizes="180x180" href={`${this.state.router.basePath}/icons/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${this.state.router.basePath}/icons/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${this.state.router.basePath}/icons/favicon-16x16.png`} />
        <link rel="manifest" href={`${this.state.router.basePath}/icons/site.webmanifest`}></link>
      </Head>
      <header className={styles.header}>
        <a href={`${this.state.router.basePath}/`} className={styles.headerLink}>
          <img className={styles.logoImage} src={`${this.state.router.basePath}/images/studio-rack-logo.svg`} alt={siteTitle} />
          <span className={styles.logoText}>Studio<span className={styles.logoTextBold}>Rack</span></span>
        </a>
        <ul className={styles.navigation}>
          <li><a href={`${this.state.router.basePath}/`} className={this.isSelected('/')}>Tools</a></li>
          <li><a href={`${this.state.router.basePath}/plugins`} className={this.isSelected('/plugins')}>Plugins</a></li>
          <li><a href={`${this.state.router.basePath}/docs`} className={this.isSelected('/docs')}>Docs</a></li>
        </ul>
      </header>
      <main>{this.state.children}</main>
    </div>
    )
  }
}
export default withRouter(Layout)
