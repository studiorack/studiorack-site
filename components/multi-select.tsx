import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { includesValue, toSlug } from '../lib/utils';
import styles from '../styles/components/multi-select.module.css';
import {
  ArchitectureOption,
  LicenseOption,
  PluginCategoryOption,
  PluginTypeOption,
  PresetTypeOption,
  ProjectFormatOption,
  ProjectTypeOption,
  SystemTypeOption,
} from '@open-audio-stack/core';

type MultiSelectProps = {
  label: string;
  items:
    | PluginTypeOption[]
    | PresetTypeOption[]
    | ProjectTypeOption[]
    | ProjectFormatOption[]
    | PluginCategoryOption[]
    | LicenseOption[]
    | ArchitectureOption[]
    | SystemTypeOption[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
};

const MultiSelect = ({ label, items, isOpen, onToggle, onClose }: MultiSelectProps) => {
  const router = useRouter();
  const slug: string = toSlug(label);
  const containerRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  const handleToggle = (e: any) => {
    e.preventDefault();
    e.target.blur();
    onToggle();
  };

  const isChecked = (value: string) => {
    if (!router.query[slug]) return false;
    return includesValue(router.query[slug], value);
  };

  const updateUrl = () => {
    const form: HTMLFormElement = document.getElementById(slug) as HTMLFormElement;
    router.query[slug] = Array.from(new FormData(form).keys());
    router.push({
      pathname: router.pathname,
      query: router.query,
    });
  };

  const selectedCount = items.filter(item => isChecked(item.value)).length;

  return (
    <form className={styles.multiselect} id={slug} ref={containerRef}>
      <select className={`${styles.multiselectTitle} ${styles['icon-' + slug]}`} onMouseDown={handleToggle}>
        <option>
          {label}
          {selectedCount > 0 ? ` (${selectedCount})` : ''}
        </option>
      </select>
      <div className={`${styles.multiselectCheckboxes} ${isOpen ? styles.multiselectCheckboxesOpen : ''}`}>
        {items.map(item => (
          <label className={styles.multiselectCheckbox} key={toSlug(item.value)} title={item.name}>
            <input
              className={styles.multiselectInput}
              type="checkbox"
              id={toSlug(item.value)}
              name={toSlug(item.value)}
              onClick={updateUrl}
              defaultChecked={isChecked(item.value)}
            />
            <span className={styles.multiselectLabel}>{item.name}</span>
          </label>
        ))}
      </div>
    </form>
  );
};

export default MultiSelect;
