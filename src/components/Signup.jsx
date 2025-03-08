import React from 'react';

const SignUp = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center "
      style={{
        backgroundImage: "url('src/components/log.jpg')", // Image in the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Macondo, cursive' 
      }}
    >
      <div
        className="p-8 rounded-lg shadow-lg w-full max-w-md"
        style={{ backgroundColor: '#FBEBD6', opacity: 0.9 }} // Apply the hex color and opacity
      >
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-sky-800">Scriptly</h1>
          <button className="text-sky-600 hover:text-sky-800">Back</button>
        </div>

        <h2 className="text-xl font-semibold text-sky-700 mb-4">Sign Up</h2>

        <form>
          <div className="mb-4">
            <label className="block text-sky-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sky-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sky-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sky-700 text-sm font-bold mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full px-3 py-2 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-sky-600">
            Already have an account?{' '}
            <a href="#" className="text-sky-600 hover:text-sky-800">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;