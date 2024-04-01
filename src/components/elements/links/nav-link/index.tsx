'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps } from 'react';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string;
};

export const NavLink = ({ children, ...props }: Props) => {
  const pathname = usePathname();
  const isActive = pathname.indexOf(props.href) === 0;

  return (
    <Link {...props} className={props.className} data-active={isActive}>
      {children}
    </Link>
  );
};
