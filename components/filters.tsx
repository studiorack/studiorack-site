import { useRouter } from 'next/router';
import styles from '../styles/components/filters.module.css';
import MultiSelect from './multi-select';
import { ChangeEvent } from 'react';
import {
  licenses,
  pluginCategoryInstruments,
  pluginTypes,
  presetTypes,
  projectTypes,
  RegistryType,
  systemTypes,
} from '@open-audio-stack/core';
import { pluginCategoryEffects } from '@open-audio-stack/core';

type FiltersProps = {
  section: RegistryType;
};

const Filters = ({ section }: FiltersProps) => {
  const router = useRouter();
  const search: string = (router.query['search'] as string) || '';
  let categories;
  let types;
  if (section === RegistryType.Plugins) {
    categories = router.query['search'] === RegistryType.Plugins ? pluginCategoryEffects : pluginCategoryInstruments;
    types = pluginTypes;
  } else if (section === RegistryType.Presets) {
    categories = presetTypes;
    types = presetTypes;
  } else {
    categories = projectTypes;
    types = projectTypes;
  }
  const onSearch = (event: ChangeEvent) => {
    const el: HTMLInputElement = event.target as HTMLInputElement;
    router.query['search'] = el.value ? el.value.toLowerCase() : '';
    router.push({
      pathname: router.pathname,
      query: router.query,
    });
  };

  return (
    <div className={styles.filters}>
      <span className={styles.filtersTitle}>Filter by:</span>
      <MultiSelect label="Type" items={types}></MultiSelect>
      <MultiSelect label="Category" items={categories}></MultiSelect>
      <MultiSelect label="License" items={licenses}></MultiSelect>
      <MultiSelect label="System" items={systemTypes}></MultiSelect>
      <input
        className={styles.filtersSearch}
        placeholder="Keyword"
        type="search"
        id="search"
        name="search"
        value={search}
        onChange={onSearch}
      />
    </div>
  );
};

export default Filters;
