import styles from '../styles/layout.module.css';
import { getBasePath, isSelected } from '../lib/path';

const Navigation = () => (
  <div className={styles.navigation}>
    <input className={styles.menuBtn} type="checkbox" id="menu-btn" />
    <label className={styles.menuIcn} htmlFor="menu-btn">
      <span className={styles.menuNavIcn}></span>
    </label>
    <ul className={styles.menu}>
      <li>
        <a href={`${getBasePath()}/`} className={`${styles.navItem} ${isSelected('/')}`}>
          Tools
        </a>
      </li>
      <li>
        <a href={`${getBasePath()}/instruments`} className={`${styles.navItem} ${isSelected('/instruments')}`}>
          Instruments
        </a>
      </li>
      <li>
        <a href={`${getBasePath()}/effects`} className={`${styles.navItem} ${isSelected('/effects')}`}>
          Effects
        </a>
      </li>
      <li>
        <a href={`${getBasePath()}/docs`} className={`${styles.navItem} ${isSelected('/docs')}`}>
          Docs
        </a>
      </li>
      <li>
        <a href="https://discord.gg/9D94f98PxP" className={`${styles.navButton} button`} target="_blank">
          Community
          <img
            className={styles.navButtonIcon}
            src={`${getBasePath()}/images/icon-external-link.svg`}
            alt="External link"
            loading="lazy"
          />
        </a>
      </li>
    </ul>
  </div>
);

export default Navigation;
