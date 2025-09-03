import React from 'react';
import Header from '../../components/User/Header';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-orange-100 to-orange-200 px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 sm:p-10 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Login </h2>

          <form className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-left">Email </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 text-left">Password</label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
              />
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link to="/forget-password" className="text-sm text-purple-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white text-sm font-semibold rounded-md shadow hover:shadow-lg transition-all"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 border-t border-gray-200"></div>

          {/* Signup Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/sign-up" className="text-purple-600 font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
