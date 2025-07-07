import Link from 'next/link'

interface NavButtonProps {
  text: string
  href?: string
  onClick?: () => void
}

export default function NavButton({
  text,
  href = '#',
  onClick,
}: NavButtonProps) {
  return (
    <Link
      href={href}
      className="rounded-md border border-gray-700 bg-gray-500 px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:text-blue-600 dark:border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-blue-400"
      onClick={onClick}
    >
      {text}
    </Link>
  )
}
