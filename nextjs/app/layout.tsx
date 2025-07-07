import './globals.css'
import Navbar from '../(features)/shared/components/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
