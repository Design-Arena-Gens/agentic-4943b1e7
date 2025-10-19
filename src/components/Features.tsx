export default function Features() {
  return (
    <section id="features" className="bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded bg-gray-900 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Fast Delivery
            </h3>
            <p className="text-gray-400">
              Get your music live on major platforms within 48 hours.
            </p>
          </div>
          <div className="rounded bg-gray-900 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Keep 100% of Your Royalties
            </h3>
            <p className="text-gray-400">
              You keep all the money you earn from your music.
            </p>
          </div>
          <div className="rounded bg-gray-900 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Powerful Analytics
            </h3>
            <p className="text-gray-400">
              Track your streams, downloads, and earnings with our detailed
              analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
