import { PluginFormatOption, PresetFormatOption, ProjectFormatOption } from '@open-audio-stack/core';
import styles from '../styles/components/tabs.module.css';
import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';

type TabsProps = {
  items: PluginFormatOption[] | PresetFormatOption[] | ProjectFormatOption[];
};

const Tabs = ({ items }: TabsProps) => {
  const router = useRouter();
  let category: string = (router.query['category'] as string) || 'all';
  const search: string = (router.query['search'] as string) || '';

  const isSelected = (path: string) => {
    return category === path ? 'selected' : '';
  };

  const onSearch = (event: ChangeEvent) => {
    const el: HTMLInputElement = event.target as HTMLInputElement;
    router.query['search'] = el.value ? el.value.toLowerCase() : '';
    router.push({
      pathname: router.pathname,
      query: router.query,
    });
  };

  const selectCategory = (event: any) => {
    category = (event.target as HTMLTextAreaElement).getAttribute('data-category') || '';
    router.query['category'] = category || '';
    router.push({
      pathname: router.pathname,
      query: router.query,
    });
  };

  return (
    <div className={styles.tabs}>
      <ul className={styles.tabsCategory}>
        <li>
          <a data-category="all" onClick={selectCategory} className={isSelected('all')}>
            All
          </a>
        </li>
        {items.map((item, index: number) => (
          <li key={`${item.value}-${index}`}>
            <a data-category={item.value} onClick={selectCategory} className={isSelected(item.value)}>
              {item.name}
            </a>
          </li>
        ))}
        <li>
          <input
            className={styles.tabsSearch}
            placeholder="Keyword"
            type="search"
            id="search"
            name="search"
            value={search}
            onChange={onSearch}
          />
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
