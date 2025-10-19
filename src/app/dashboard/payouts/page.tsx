import Link from 'next/link';

export default function PayoutsPage() {
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
        <h1 className="text-3xl font-bold">Payouts</h1>
        <div className="mt-8">
          <p>You have no payouts yet.</p>
        </div>
      </main>
    </div>
  );
}
