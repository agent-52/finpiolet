import React from 'react';
// @ts-ignore
import "../../index.css"

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="flex items-center gap-12 max-w-container w-full justify-center">
        
        {/* Left Section - Graphic & Info */}
        <div className="w-image-card flex flex-col">
          {/* Dashboard Image Placeholder */}
          <div className="w-full h-image-placeholder rounded-2xl image-placeholder shadow-card mb-6">
            <img src="" alt="" />
          </div>

          {/* Text Content */}
          <h3 className="text-base font-bold text-black mb-1">
            AI-Powered Financial Intelligence
          </h3>
          <p className="text-sm text-gray-500">
            Make smarter financial decisions with real-time analytics, automated insights, and personalized recommendations.
          </p>
        </div>

        {/* Right Section - Sign In Card */}
        <div className="w-card bg-white rounded-2xl p-10 shadow-card flex flex-col">
          
          {/* Logo Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-logo rounded-lg p-2 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 17l6-6 4 4 8-8" />
                <path d="M17 7h4v4" />
              </svg>
            </div>
            <span className="text-xl font-bold text-black">FinPilot</span>
          </div>

          {/* Title & Subtitle */}
          <h1 className="text-2xl font-bold text-black">Welcome Back</h1>
          <p className="text-sm text-gray-500 mt-1 mb-6">
            Manage your finances with AI-powered insights
          </p>

          {/* Form */}
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            
            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-600">Email</label>
              <div className="bg-input border-input rounded-lg px-4 py-3 flex items-center">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="input-field"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-600">Password</label>
              <div className="bg-input border-input rounded-lg px-4 py-3 flex items-center justify-between">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input-field"
                />
                {/* Eye Icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer' }}>
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <a href="#forgot" className="text-xs font-medium text-gray-500 link">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-primary bg-btn rounded-lg py-3 text-sm font-semibold mt-2">
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center text-xs text-gray-500 mt-6">
            Don't have an account?{' '}
            <a href="#signup" className="text-black font-semibold link">
              Sign Up
            </a>
          </div>

          {/* Security Footer */}
          <div className="text-center text-xs text-gray-400 mt-5 flex items-center justify-center gap-1">
            <span>Protected by enterprise grade security and encryption</span>
          </div>

        </div>

      </div>
    </div>
  );
}