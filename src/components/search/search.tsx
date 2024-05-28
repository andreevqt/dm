import {useRef} from 'react';

import {Cross} from 'icons/cross';

import styles from './search.module.scss';

type SearchProps = {
  query: string;
  placeholder?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onClear?: () => void;
};

export const Search = ({placeholder, query, onChange, onClear}: SearchProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const handleClear = () => {
    ref.current?.focus();
    onClear?.();
  };
  return (
    <div className={styles.root}>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={onChange}
        className={styles.input}
      />
      {query && <Cross className={styles.cross} onClick={handleClear} />}
    </div>
  );
};
