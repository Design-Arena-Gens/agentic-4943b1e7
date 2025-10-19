export default function Contact() {
  return (
    <section id="contact" className="bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          Contact Us
        </h2>
        <form className="mx-auto max-w-lg">
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded bg-gray-900 px-4 py-2 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded bg-gray-900 px-4 py-2 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="mb-2 block text-white">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full rounded bg-gray-900 px-4 py-2 text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
