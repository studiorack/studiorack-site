import styles from '../styles/components/crumb.module.css'

type CrumbProps = {
  items: string[];
}

function getCrumbUrl(items: string[], itemToMatch: string) {
  let url: string = '';
  for (const item of items) {
    url += '/' + item;
    if (item === itemToMatch) break;
  }
  return url;
}

const Crumb = ({ items }: CrumbProps) => (
  <div className={styles.crumb}>
    <ul className={styles.crumbList}>
      {items.map((item: string, itemIndex: number) => (
        <li className={styles.crumbItem} key={`${item}-${itemIndex}`}>
          /<a className={styles.crumbLink} href={getCrumbUrl(items, item)}>{item}</a>
        </li>
      ))}
    </ul>
  </div>
)

export default Crumb;
