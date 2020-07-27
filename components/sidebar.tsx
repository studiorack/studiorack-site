import PostPreview from './post-preview'
import Doc from '../types/doc'
import styles from '../styles/sidebar.module.css'

type Props = {
  docs: Doc[]
}

const Sidebar = ({ docs }: Props) => {
  return (
    <div className={styles.sidebar}>
      <ul>
        {docs.map((doc) => (
          <li key={doc.slug}><a href={`/docs/${doc.slug}`}>{doc.title}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
