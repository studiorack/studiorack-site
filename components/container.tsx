import Doc from '../types/doc'
import styles from '../styles/docs.module.css'

export default function Container({
  children,
  docs
}: {
  children: React.ReactNode
  docs: Doc[]
}) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h4>Documentation</h4>
        <ul className={styles.menu}>
          {docs.map((doc) => (
            <li className={styles.menuItem} key={doc.slug}><a href={`/docs/${doc.slug}`}>{doc.title}</a></li>
          ))}
        </ul>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
