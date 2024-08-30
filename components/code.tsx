import styles from '../styles/components/code.module.css';
import { PluginVersion } from '@studiorack/core';

type CodeProps = {
  plugin: PluginVersion;
};

const Code = ({ plugin }: CodeProps) => {
  if (plugin.tags.includes('sfz')) {
    return (
      <span>
        <pre className={styles.dependency}>studiorack plugin install sfztools/sfizzz</pre>
        <pre className={styles.dependency}>studiorack plugin install {plugin.id}</pre>
      </span>
    );
  } else if (plugin.tags.includes('sf2')) {
    return (
      <span>
        <pre className={styles.dependency}>studiorack plugin install studiorack/juicysf</pre>
        <pre className={styles.dependency}>studiorack plugin install {plugin.id}</pre>
      </span>
    );
  } else {
    return <pre className={styles.dependency}>studiorack plugin install {plugin.id}</pre>;
  }
};

export default Code;
