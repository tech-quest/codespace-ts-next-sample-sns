import { FluidImage } from '~/components/elements/images/fluid-image';

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
      <div></div>
    </div>
  );
};
