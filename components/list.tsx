import styles from '../styles/components/list.module.css';
import { PluginVersion, PluginVersionLocal } from '@studiorack/core';
import Header from './header';
import Card from './card';
import Filters from './filters';
import Crumb from './crumb';

type ListProps = {
  filters?: boolean;
  plugins: PluginVersion[] | PluginVersionLocal[];
  type: string;
  title: string;
};

const List = ({ filters = true, plugins, type, title }: ListProps) => (
  <section className={styles.list}>
    <Crumb items={[type]}></Crumb>
    <Header title={title} count={plugins.length} />
    {filters ? <Filters section={type} /> : ''}
    <div className={styles.listGrid}>
      {plugins.map((plugin: PluginVersion | PluginVersionLocal, pluginIndex: number) => (
        <Card section={type} plugin={plugin} pluginIndex={pluginIndex} key={`${plugin.id}-${pluginIndex}`}></Card>
      ))}
    </div>
  </section>
);

export default List;
