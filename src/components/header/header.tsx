import {Link} from 'react-router-dom';

import {Container} from 'components';

import styles from './header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <Container>
      <Link to="/" className={styles.logo}>
        Детали Машин (Богданов)
      </Link>
    </Container>
  </header>
);
