import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type MergedHTMLAttributes = ButtonHTMLAttributes<HTMLElement> & AnchorHTMLAttributes<HTMLElement>;

export type ButtonVariant = 'solid' | 'outlined' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonColor = 'base' | 'primary' | 'secondary' | 'gradient';

export interface ButtonProps extends MergedHTMLAttributes {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  block?: boolean;
}
