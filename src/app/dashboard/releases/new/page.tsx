import Link from 'next/link';

export default function NewReleasePage() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <aside className="w-64 bg-gray-800 p-4">
        <nav>
          <ul>
            <li className="mb-4">
              <Link
                href="/dashboard"
                className="block rounded p-2 hover:bg-gray-700"
              >
                Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/dashboard/releases"
                className="block rounded p-2 hover:bg-gray-700"
              >
                Releases
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/dashboard/analytics"
                className="block rounded p-2 hover:bg-gray-700"
              >
                Analytics
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/dashboard/payouts"
                className="block rounded p-2 hover:bg-gray-700"
              >
                Payouts
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold">New Release</h1>
        <form className="mt-8 max-w-lg">
          <div className="mb-4">
            <label htmlFor="title" className="mb-2 block text-white">
              Song Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full rounded bg-gray-800 px-4 py-2 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="artist" className="mb-2 block text-white">
              Artist Name
            </label>
            <input
              type="text"
              id="artist"
              className="w-full rounded bg-gray-800 px-4 py-2 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="artwork" className="mb-2 block text-white">
              Cover Artwork
            </label>
            <input
              type="file"
              id="artwork"
              className="w-full rounded bg-gray-800 px-4 py-2 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="audio" className="mb-2 block text-white">
              Audio File
            </label>
            <input
              type="file"
              id="audio"
              className="w-full rounded bg-gray-800 px-4 py-2 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-500"
          >
            Create Release
          </button>
        </form>
      </main>
    </div>
  );
}
