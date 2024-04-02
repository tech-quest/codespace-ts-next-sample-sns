import Link from 'next/link';

import styles from './styles.module.css';

type CommonProps = {
  children: React.ReactNode;
};
type ButtonProps = CommonProps & {
  type: 'button' | 'submit';
  isDisabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
type LinkProps = CommonProps & {
  type: 'link';
  href: string;
};
type Props = ButtonProps | LinkProps;

export const Button = (props: Props) => {
  if (props.type === 'link') {
    return (
      <Link href={props.href} className={styles.root}>
        {props.children}
      </Link>
    );
  }

  return (
    <button type={props.type} disabled={props.isDisabled} className={styles.root} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
