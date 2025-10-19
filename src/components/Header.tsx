import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold">
          MusicDistro
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/#features" className="hover:text-gray-400">
                Features
              </Link>
            </li>
            <li>
              <Link href="/#pricing" className="hover:text-gray-400">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Link
            href="/login"
            className="mr-4 rounded bg-gray-800 px-4 py-2 hover:bg-gray-700"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded bg-blue-600 px-4 py-2 hover:bg-blue-500"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
