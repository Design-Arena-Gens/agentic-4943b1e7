export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          Simple Pricing
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded bg-gray-800 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">Starter</h3>
            <p className="mb-4 text-4xl font-bold text-white">
              $19<span className="text-lg font-normal">/year</span>
            </p>
            <ul className="text-gray-400">
              <li className="mb-2">Unlimited Releases</li>
              <li className="mb-2">1 Artist</li>
              <li className="mb-2">Keep 100% of Royalties</li>
            </ul>
            <a
              href="/signup"
              className="mt-8 inline-block rounded bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-500"
            >
              Sign Up
            </a>
          </div>
          <div className="rounded bg-gray-800 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">Pro</h3>
            <p className="mb-4 text-4xl font-bold text-white">
              $49<span className="text-lg font-normal">/year</span>
            </p>
            <ul className="text-gray-400">
              <li className="mb-2">Unlimited Releases</li>
              <li className="mb-2">5 Artists</li>
              <li className="mb-2">Keep 100% of Royalties</li>
            </ul>
            <a
              href="/signup"
              className="mt-8 inline-block rounded bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-500"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
