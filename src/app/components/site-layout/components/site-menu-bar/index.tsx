import { FluidImage } from '~/components/elements/images/fluid-image';
import { NavLink } from '~/components/elements/links/nav-link';

import styles from './styles.module.css';

export const SiteMenuBar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.brand}>
        <h1 className={styles.heading}>
          <span className={styles.logo}>
            <FluidImage src="/images/logo.png" />
          </span>
          Tech Quest SNS
        </h1>
      </div>
      <nav className={styles.menu}>
        <NavLink href="/" className={styles.item}>
          Home
        </NavLink>
        <NavLink href="/friends" className={styles.item}>
          Friends
        </NavLink>
      </nav>
    </div>
  );
};
