import { PlainImage } from '~/components/elements/images/plain-image';

import styles from './styles.module.css';

type Props = {
  src: string;
  alt?: string;
};

export const FluidImage = ({ src, alt }: Props) => {
  return <PlainImage src={src} alt={alt} className={styles.root} />;
};
