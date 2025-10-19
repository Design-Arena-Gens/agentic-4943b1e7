export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="w-full max-w-md rounded bg-gray-800 p-8">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          Create an Account
        </h2>
        <form>
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
            <label htmlFor="password" className="mb-2 block text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full rounded bg-gray-900 px-4 py-2 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-500"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
