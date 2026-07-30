import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import styles from '../styles/components/list.module.css';
import Header from './header';
import Card from './card';
import Filters from './filters';
import Crumb from './crumb';
import Tabs from './tabs';
import { getParam } from '../lib/plugin';
import { sortOptions, sortPackages } from '../lib/utils';
import {
  PackageInterface,
  PluginFormatOption,
  PresetFormatOption,
  ProjectFormatOption,
  RegistryType,
} from '@open-audio-stack/core';

type ListProps = {
  filters?: boolean;
  items: PackageInterface[];
  type: RegistryType;
  tabs?: PluginFormatOption[] | PresetFormatOption[] | ProjectFormatOption[];
  title: string;
};

const List = ({ filters = true, items, type, tabs, title }: ListProps) => {
  const router = useRouter();
  const sort = getParam(router, 'sort');
  const view = getParam(router, 'view');
  const isListView = view ? view[0] === 'list' : false;
  const sortedItems = sort && sort[0] ? sortPackages(items, sort[0]) : items;

  const onSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const query = { ...router.query };
    if (event.target.value === 'default') {
      delete query.sort;
    } else {
      query.sort = event.target.value;
    }
    router.push({ pathname: router.pathname, query });
  };

  const setView = (next: 'grid' | 'list') => {
    const query = { ...router.query };
    if (next === 'grid') {
      delete query.view;
    } else {
      query.view = next;
    }
    router.push({ pathname: router.pathname, query });
  };

  return (
    <section className={styles.list}>
      <Crumb items={[type]}></Crumb>
      <Header title={title} count={items.length}>
        <div className={styles.listControls}>
          <select className={styles.listSort} value={sort ? sort[0] : 'default'} onChange={onSortChange}>
            <option value="default">Sort: Relevance</option>
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                Sort: {option.label}
              </option>
            ))}
          </select>
          <div className={styles.listView} role="group" aria-label="View">
            <button
              type="button"
              className={`${styles.listViewButton} ${!isListView ? styles.listViewButtonActive : ''}`}
              aria-pressed={!isListView}
              onClick={() => setView('grid')}
            >
              Grid
            </button>
            <button
              type="button"
              className={`${styles.listViewButton} ${isListView ? styles.listViewButtonActive : ''}`}
              aria-pressed={isListView}
              onClick={() => setView('list')}
            >
              List
            </button>
          </div>
        </div>
      </Header>
      {filters ? <Filters section={type} /> : ''}
      {tabs ? <Tabs items={tabs} /> : ''}
      <div className={isListView ? styles.listRows : styles.listGrid}>
        {sortedItems.map((item: PackageInterface, index: number) => (
          <Card
            section={type}
            item={item}
            index={index}
            view={isListView ? 'list' : 'grid'}
            key={`${item.slug}-${index}`}
          ></Card>
        ))}
      </div>
    </section>
  );
};

export default List;
