'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
          Welcome to Moonchild
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
          A modern platform for sharing posts and taking notes. Explore the
          navigation above to get started.
        </p>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
              📝 Posts
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Share your thoughts and ideas with the community through blog
              posts.
            </p>
            <Link
              href="/posts"
              className="inline-block rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
            >
              View Posts
            </Link>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
              📓 Notes
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Keep track of your personal notes and important information.
            </p>
            <Link
              href="/notes"
              className="inline-block rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
            >
              View Notes
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
