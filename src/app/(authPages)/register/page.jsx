export default function RegisterPage() {
  return (
    <div className="flex py-20 items-center justify-center ">
      <div className="w-full max-w-md space-y-6 p-8 bg-gray-200 shadow-md rounded-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Register
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>

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
              placeholder="Create a password"
            />
          </div>

          <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
            Register
          </button>
        </form>

        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
