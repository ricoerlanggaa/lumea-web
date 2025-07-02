import Link from 'next/link';
import classNames from '@/helpers/classNames';
import type { ButtonColor, ButtonProps, ButtonSize, ButtonVariant } from './Button.d';

const variantClasses: Record<ButtonVariant, string> = {
  solid: 'btn',
  outlined: 'btn btn-outline',
  ghost: 'btn btn-ghost',
};
const sizeClasses: Record<ButtonSize, string> = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
};
const colorClasses: Record<ButtonColor, string> = {
  base: '',
  primary: 'btn-primary',
  secondary: 'btn-secondary hover:bg-secondary',
  gradient: 'btn-primary',
};

export default function Button({
  type = 'button',
  variant = 'solid',
  size = 'md',
  color = 'base',
  block,
  disabled,
  href,
  className,
  children,
  ...rest
}: ButtonProps) {
  const isGradient = color === 'gradient' && !disabled;
  const btnClasses = classNames(
    variantClasses[variant],
    sizeClasses[size],
    colorClasses[color],
    isGradient && variant === 'outlined' && 'border-none border-gradient hover:before:content-none',
    disabled && 'btn-disabled',
    block && 'btn-block',
    className,
  );
  const content = isGradient ? (
    <span className="text-gradient inline-flex items-center">{children}</span>
  ) : (
    children
  );

  return href ? (
    <Link href={href} className={btnClasses} role="button" aria-disabled={disabled} {...rest}>
      {content}
    </Link>
  ) : (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={btnClasses}
      disabled={disabled}
      aria-disabled={disabled}
      {...rest}
    >
      {content}
    </button>
  );
}
