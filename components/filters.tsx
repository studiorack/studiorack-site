import { useRouter } from 'next/router';
import styles from '../styles/components/filters.module.css';
import MultiSelect from './multi-select';
import { ChangeEvent, useEffect, useState } from 'react';
import {
  licenses,
  pluginCategoryInstruments,
  PluginCategoryOption,
  PluginType,
  pluginTypes,
  presetTypes,
  ProjectFormatOption,
  projectFormats,
  projectTypes,
  RegistryType,
  systemTypes,
} from '@open-audio-stack/core';
import { pluginCategoryEffects } from '@open-audio-stack/core';
import { getParam } from '../lib/plugin';
import { detectSystemType } from '../lib/system';

type FiltersProps = {
  section: RegistryType;
};

const FILTER_KEYS = ['type', 'category', 'system', 'license', 'search'];

const Filters = ({ section }: FiltersProps) => {
  const router = useRouter();
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  useEffect(() => {
    if (!router.isReady || router.query.system) return;
    const detected = detectSystemType();
    if (detected) {
      router.replace({ pathname: router.pathname, query: { ...router.query, system: detected } });
    }
  }, [router.isReady]);

  const type = getParam(router, 'type');
  const search = getParam(router, 'search');
  let categories: PluginCategoryOption[] | ProjectFormatOption[] =
    type && type[0] === PluginType.Effect ? pluginCategoryEffects : pluginCategoryInstruments;
  let types;
  // TODO move this logic to parent
  if (section === RegistryType.Plugins) {
    types = pluginTypes;
  } else if (section === RegistryType.Presets) {
    types = presetTypes;
  } else {
    categories = projectFormats;
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

  const toggleFilter = (slug: string) => {
    setOpenFilter(prev => (prev === slug ? null : slug));
  };

  const closeFilter = () => setOpenFilter(null);

  const hasActiveFilters = FILTER_KEYS.some(key => router.query[key]);

  const clearFilters = () => {
    const query = { ...router.query };
    FILTER_KEYS.forEach(key => delete query[key]);
    setOpenFilter(null);
    router.push({
      pathname: router.pathname,
      query,
    });
  };

  return (
    <div className={styles.filters}>
      <span className={styles.filtersTitle}>Filter by:</span>
      <MultiSelect
        label="System"
        items={systemTypes}
        isOpen={openFilter === 'system'}
        onToggle={() => toggleFilter('system')}
        onClose={closeFilter}
      ></MultiSelect>
      <MultiSelect
        label="Type"
        items={types}
        isOpen={openFilter === 'type'}
        onToggle={() => toggleFilter('type')}
        onClose={closeFilter}
      ></MultiSelect>
      <MultiSelect
        label="Category"
        items={categories}
        isOpen={openFilter === 'category'}
        onToggle={() => toggleFilter('category')}
        onClose={closeFilter}
      ></MultiSelect>
      <MultiSelect
        label="License"
        items={licenses}
        isOpen={openFilter === 'license'}
        onToggle={() => toggleFilter('license')}
        onClose={closeFilter}
      ></MultiSelect>
      <input
        className={styles.filtersSearch}
        placeholder="Keyword"
        type="search"
        id="search"
        name="search"
        value={search ? search[0] : ''}
        onChange={onSearch}
      />
      {hasActiveFilters && (
        <button type="button" className={styles.filtersClear} onClick={clearFilters}>
          Clear all
        </button>
      )}
    </div>
  );
};

export default Filters;
