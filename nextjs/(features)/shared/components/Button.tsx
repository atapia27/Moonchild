

import { twMerge } from 'tailwind-merge';

const BUTTON_VARIANTS = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400',
  danger: 'bg-red-500 text-white hover:bg-red-600',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof BUTTON_VARIANTS;
}

export default function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyle = 'rounded px-4 py-2 transition focus:outline-none';
  const variantStyle = BUTTON_VARIANTS[variant];
  const mergedClassName = twMerge(baseStyle, variantStyle, className);

  return (
    <button className={mergedClassName} {...props}>
      {children}
    </button>
  );
}
