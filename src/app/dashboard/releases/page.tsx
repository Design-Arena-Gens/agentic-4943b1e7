import Link from 'next/link';

export default function ReleasesPage() {
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
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Releases</h1>
          <Link
            href="/dashboard/releases/new"
            className="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-500"
          >
            New Release
          </Link>
        </div>
        <div className="mt-8">
          <p>You have no releases yet.</p>
        </div>
      </main>
    </div>
  );
}
