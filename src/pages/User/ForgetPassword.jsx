import React from 'react';
import Header from '../../components/User/Header';
import { Link } from 'react-router-dom';

function ForgetPassword() {
  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-orange-100 to-orange-200 px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 sm:p-10 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-left">Forgot Password?</h2>
          <p className="text-sm text-gray-600 mb-6 text-left">
            Enter your email and we’ll send you a link to reset your password.
          </p>

          <form className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
              />
            </div>

            {/* Reset Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-semibold rounded-md text-sm hover:shadow-lg transition-all"
            >
              Send Reset Link
            </button>
          </form>

          {/* Go Back to Login */}
          <p className="mt-6 text-sm text-center text-gray-600">
            Remember your password?{' '}
            <Link to="/login" className="text-purple-600 font-medium hover:underline">
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
