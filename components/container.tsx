import { Component } from 'react'
import Doc from '../types/doc'
import styles from '../styles/docs.module.css'
import { withRouter, Router } from 'next/router'

class Container extends Component<{
  children,
  docs
  router: Router
}, {
  children: React.ReactNode
  docs: Doc[]
  router: Router
}> {

  constructor(props) {
    super(props)
    this.state = {
      children: props.children,
      docs: props.docs.filter(doc => doc.slug !== '06-command-line'),
      router: props.router
    }
  }

  render() {
    return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h4>Documentation</h4>
        <ul className={styles.menu}>
          {this.state.docs.map((doc) => (
            <li className={styles.menuItem} key={doc.slug}><a href={`${this.state.router.basePath}/docs/${doc.slug}`}>{doc.title}</a></li>
          ))}
        </ul>
        <h4>API Reference</h4>
        <ul className={styles.menu}>
          <li className={styles.menuItem} key="06-command-line"><a href={`${this.state.router.basePath}/docs/06-command-line`}>Command line</a></li>
        </ul>
      </div>
      <div className={styles.content}>
        {this.state.children}
      </div>
    </div>
    )
  }
}
export default withRouter(Container)
