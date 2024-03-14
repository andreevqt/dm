import {ReactNode} from 'react';
import {clsx} from 'clsx';

import styles from './container.module.scss';

type TContainerProps = {
  children?: ReactNode;
  className?: string;
};

export const Container = ({children, className}: TContainerProps) => (
  <div className={clsx(styles.container, className)}>{children}</div>
);
