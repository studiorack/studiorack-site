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
      return this.state.router.asPath === path ? 'active': ''
    }
    return this.state.router.asPath.startsWith(path) ? 'active': ''
  }

  render() {
    return (
    <div className={styles.navigation}>
      <input className={styles.menuBtn} type="checkbox" id="menu-btn" />
      <label className={styles.menuIcn} htmlFor="menu-btn"><span className={styles.menuNavIcn}></span></label>
      <ul className={styles.menu}>
        <li><a href={`${this.state.router.basePath}/`} className={this.isSelected('/')}>Tools</a></li>
        <li><a href={`${this.state.router.basePath}/plugins`} className={this.isSelected('/plugins')}>Plugins</a></li>
        <li><a href={`${this.state.router.basePath}/docs`} className={this.isSelected('/docs')}>Docs</a></li>
      </ul>
    </div>
    )
  }
}
export default withRouter(Navigation)
