export default function Hero() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center">
        <h1 className="text-5xl font-bold">Distribute Your Music Worldwide</h1>
        <p className="mt-4 text-xl">
          Get your music on Spotify, Apple Music, TikTok, and more.
        </p>
        <a
          href="/signup"
          className="mt-8 rounded bg-blue-600 px-8 py-4 text-lg font-bold hover:bg-blue-500"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
