import { Component } from 'react'
import styles from '../styles/layout.module.css'
import { withRouter, Router } from 'next/router'

type NavigationProps = {
  home?: boolean,
  router: Router
}

class Navigation extends Component<{
  home?: boolean,
  router: Router
}, {
  home?: boolean
  router: Router
}> {

  constructor(props: NavigationProps) {
    super(props)
    this.state = {
      home: props.home,
      router: props.router
    }
  }

  isSelected = (path: string) => {
    if (path === '/') {
      return this.state.router.asPath === path ? styles.navItemActive: ''
    }
    return this.state.router.asPath.startsWith(path) ? styles.navItemActive: ''
  }

  render() {
    return (
    <div className={styles.navigation}>
      <input className={styles.menuBtn} type="checkbox" id="menu-btn" />
      <label className={styles.menuIcn} htmlFor="menu-btn"><span className={styles.menuNavIcn}></span></label>
      <ul className={styles.menu}>
        <li><a href={`${this.state.router.basePath}/`} className={`${styles.navItem} ${this.isSelected('/')}`}>Tools</a></li>
        <li><a href={`${this.state.router.basePath}/plugins`} className={`${styles.navItem} ${this.isSelected('/plugins')}`}>Plugins</a></li>
        <li><a href={`${this.state.router.basePath}/docs`} className={`${styles.navItem} ${this.isSelected('/docs')}`}>Docs</a></li>
        <li>
          <a href="https://discord.gg/6VSA7n6J" className={`${styles.navButton} button`} target="_blank">Community
          <img
            className={styles.navButtonIcon}
            src={`${this.state.router.basePath}/images/icon-external-link.svg`}
            alt="External link"
            loading="lazy"
          />
          </a>
        </li>
      </ul>
    </div>
    )
  }
}
export default withRouter(Navigation)
