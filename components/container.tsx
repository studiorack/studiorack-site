import { ReactNode, FunctionComponent } from 'react'
import Doc from '../types/doc'
import styles from '../styles/docs.module.css'

type Props = {
  docs: Doc[]
  children?: ReactNode
}

const Container: FunctionComponent = ({ docs, children }: Props) => {
  return <div className={styles.container}>
      <div className={styles.sidebar}>
        <ul>
          {docs.map((doc) => (
            <li key={doc.slug}><a href={`/docs/${doc.slug}`}>{doc.title}</a></li>
          ))}
        </ul>
      </div>
      <div className={styles.content}>
        {children}
      </div>
  </div>
}

export default Container
