

import { twMerge } from 'tailwind-merge';

const INPUT_VARIANTS = {
  default: 'border-gray-300 focus:ring-blue-400',
  error: 'border-red-400 focus:ring-red-400',
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: keyof typeof INPUT_VARIANTS;
}

export default function Input({
  variant = 'default',
  className,
  ...props
}: InputProps) {
  const baseStyle = 'rounded border px-3 py-2 focus:outline-none transition';
  const variantStyle = INPUT_VARIANTS[variant];
  const mergedClassName = twMerge(baseStyle, variantStyle, className);

  return <input className={mergedClassName} {...props} />;
}
