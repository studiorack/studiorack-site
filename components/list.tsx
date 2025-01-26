import styles from '../styles/components/list.module.css';
import { PluginTypes, ProjectTypes } from '@studiorack/core';
import Header from './header';
import Card from './card';
import Filters from './filters';
import Crumb from './crumb';
import Tabs from './tabs';
import { PackageInterface } from '@open-audio-stack/core';

type ListProps = {
  filters?: boolean;
  items: PackageInterface[];
  type: string;
  tabs?: PluginTypes | ProjectTypes;
  title: string;
};

const List = ({ filters = true, items, type, tabs, title }: ListProps) => (
  <section className={styles.list}>
    <Crumb items={[type]}></Crumb>
    <Header title={title} count={items.length} />
    {filters ? <Filters section={type} /> : ''}
    {tabs ? <Tabs items={tabs} /> : ''}
    <div className={styles.listGrid}>
      {items.map((item: PackageInterface, index: number) => (
        <Card section={type} item={item} index={index} key={`${item.slug}-${index}`}></Card>
      ))}
    </div>
  </section>
);

export default List;
