import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import styles from '../styles/components/list.module.css';
import Header from './header';
import Card from './card';
import Filters from './filters';
import Crumb from './crumb';
import Tabs from './tabs';
import { getParam } from '../lib/plugin';
import { DEFAULT_SORT, sortOptions, sortPackages } from '../lib/utils';
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
  const sortValue = sort && sort[0] ? sort[0] : DEFAULT_SORT;
  const sortedItems = sortPackages(items, sortValue);

  const onSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const query = { ...router.query };
    if (event.target.value === DEFAULT_SORT) {
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
          <label className={styles.listSortLabel} htmlFor="list-sort">
            Sort by
          </label>
          <select id="list-sort" className={styles.listSort} value={sortValue} onChange={onSortChange}>
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
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
