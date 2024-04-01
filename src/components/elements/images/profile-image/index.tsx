import { FluidImage } from '~/components/elements/images/fluid-image';

import styles from './styles.module.css';

type Props = {
  src: string;
};
export const ProfileImage = ({ src }: Props) => {
  return (
    <div className={styles.root}>
      <FluidImage src={src} />
    </div>
  );
};
