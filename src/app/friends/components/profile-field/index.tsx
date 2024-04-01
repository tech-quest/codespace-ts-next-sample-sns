import { ProfileImage } from '~/components/elements/images/profile-image';

import styles from './styles.module.css';

type Props = {
  thumbnail: string;
  children: React.ReactNode;
};

export const ProfileField = ({ thumbnail, children }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.thumbnail}>
        <ProfileImage src={thumbnail} />
      </div>
      <div className={styles.field}>{children}</div>
    </div>
  );
};
