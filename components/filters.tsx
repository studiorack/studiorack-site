import { useRouter } from 'next/router';
import { getCategories, getLicenses, getPlatforms } from '../lib/api-browser';
import styles from '../styles/components/filters.module.css';
import MultiSelect from './multi-select';
import { ChangeEvent } from 'react';

type FiltersProps = {
  section: string;
};

const Filters = ({ section }: FiltersProps) => {
  const router = useRouter();
  const search: string = router.query['search'] as string;

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
      <MultiSelect
        label="Category"
        items={getCategories(section)}
      ></MultiSelect>
      <MultiSelect label="License" items={getLicenses()}></MultiSelect>
      <MultiSelect label="Platform" items={getPlatforms()}></MultiSelect>
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
