import { ReactNode } from 'react';
import styles from '../styles/components/header.module.css';

type HeaderProps = {
  children?: ReactNode;
  count?: number;
  title: string;
};

const Header = ({ title, count, children }: HeaderProps) => (
  <div className={styles.header}>
    <h3 className={styles.headerTitle}>
      {title} {count ? <span className={styles.headerCount}>({count})</span> : ''}
    </h3>
    {children}
  </div>
);

export default Header;
