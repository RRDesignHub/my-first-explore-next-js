
export default function LoginPage() {
  return (
    <div className="flex py-20 items-center justify-center ">
    <div className="w-full max-w-md space-y-6 p-8 bg-gray-200 shadow-md rounded-xl">
      <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Login
        </button>
      </form>

      <p className="text-center text-gray-600">
        Don't have an account? <a href="/register" className="text-blue-500">Register</a>
      </p>
    </div>
  </div>
  )
}
