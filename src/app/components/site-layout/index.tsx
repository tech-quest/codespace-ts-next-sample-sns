import { SiteMenuBar } from './components/site-menu-bar';
import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
};

export const SiteLayout = ({ children }: Props) => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <SiteMenuBar />
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
