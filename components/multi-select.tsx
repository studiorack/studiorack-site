import { useRouter } from 'next/router';
import { includesValue, toSlug } from '../lib/utils';
import styles from '../styles/components/multi-select.module.css';

type MultiSelectProps = {
  label: string;
  values: string[];
};

const MultiSelect = ({ label, values }: MultiSelectProps) => {
  const router = useRouter();
  const slug: string = toSlug(label);

  const showCheckboxes = (e: any) => {
    e.preventDefault();
    e.target.blur();
    window.focus();
    var checkboxes = document.getElementById(label);
    if (checkboxes?.style.display === 'block') {
      if (checkboxes) checkboxes.style.display = 'none';
    } else {
      if (checkboxes) checkboxes.style.display = 'block';
    }
  };

  const isChecked = (value: string) => {
    if (!router.query[slug]) return false;
    return includesValue(router.query[slug], value);
  };

  const updateUrl = () => {
    const form: HTMLFormElement = document.getElementById(
      slug,
    ) as HTMLFormElement;
    router.query[slug] = Array.from(new FormData(form).keys());
    router.push({
      pathname: router.pathname,
      query: router.query,
    });
  };

  return (
    <form className={styles.multiselect} id={slug}>
      <select
        className={`${styles.multiselectTitle} ${styles['icon-' + slug]}`}
        onMouseDown={showCheckboxes}
      >
        <option>{label}</option>
      </select>
      <div className={styles.multiselectCheckboxes} id={label}>
        {values.map((value: string, index: number) => (
          <label
            className={styles.multiselectLabel}
            htmlFor={toSlug(value)}
            key={toSlug(value)}
          >
            <input
              className={styles.multiselectInput}
              type="checkbox"
              id={toSlug(value)}
              name={toSlug(value)}
              onClick={updateUrl}
              defaultChecked={isChecked(value)}
            />
            {value}
          </label>
        ))}
      </div>
    </form>
  );
};

export default MultiSelect;
