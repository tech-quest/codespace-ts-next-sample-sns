import clsx from 'clsx';

import styles from './styles.module.css';

type Props = {
  src: string;
  alt?: string;
  className?: string;
};

export const PlainImage = ({ src, alt, className }: Props) => {
  return <img src={src} alt={alt ?? ''} className={`${styles.root} ${className}`} />;
};
