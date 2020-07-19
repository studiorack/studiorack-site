import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const siteTitle = 'StudioRack'
export const siteDesc = 'Automate your plugin publishing workflow, easy plugin installation and management'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  const {basePath} = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        <meta name="description" content={siteDesc} />
        <meta property="og:image" content="{`${basePath}/images/creators.jpg`}" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&amp;display=swap" rel="stylesheet"></link>
      </Head>
      <header className={styles.header}>
        <a href={`${basePath}/`} className={styles.headerLink}>
          <img className={styles.logoImage} src={`${basePath}/images/studio-rack-logo.svg`} alt={siteTitle} />
          <span className={styles.logoText}>Studio<span className={styles.logoTextBold}>Rack</span></span>
        </a>
        <ul className={styles.navigation}>
          <li><a href="#template">Plugin template</a></li>
          <li><a href="#app">App &amp; tools</a></li>
          <li><a href="#plugins">Plugins</a></li>
        </ul>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
