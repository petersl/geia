import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { classNames } from '~/lib/class-names';
import classes from './button.module.css';

type StylingProps = {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'soft' | 'accent' | 'danger';
};

const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & StylingProps>(
  ({ children, className, size = 'base', type = 'button', variant = 'secondary', ...rest }, ref) => {
    const buttonClassName = classes[`${variant}${size}`] ?? classes.secondarybase;
    return (
      <button ref={ref} className={classNames(buttonClassName, className)} {...rest} type={type}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
