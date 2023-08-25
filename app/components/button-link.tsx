import type { LinkProps } from '@remix-run/react';
import { Link } from '@remix-run/react';
import { forwardRef } from 'react';
import { classNames } from '~/lib/class-names';
import classes from './button.module.css';

type StylingProps = {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'soft' | 'accent' | 'danger';
};

const ButtonLink = forwardRef<HTMLAnchorElement, LinkProps & StylingProps>(
  ({ children, className, size = 'base', variant = 'secondary', ...rest }, ref) => {
    const buttonClassName = classes[`${variant}${size}`] ?? classes.secondarybase;
    return (
      <Link ref={ref} className={classNames(buttonClassName, className)} {...rest}>
        {children}
      </Link>
    );
  },
);

ButtonLink.displayName = 'ButtonLink';

export default ButtonLink;
