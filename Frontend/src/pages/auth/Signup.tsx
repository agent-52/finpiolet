import React from 'react';
import '../../index.css';

export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      
      {/* Main Combined Outer Box */}
      <div className="signup-card-container rounded-3xl max-w-signup-card w-full shadow-card">
        
        {/* Left Dark Banner Section */}
        <div className="w-dark-panel bg-dark-banner p-10 flex flex-col justify-between text-white">
          
          {/* Top Header Logo */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-white/10 rounded-lg p-2 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 17l6-6 4 4 8-8" />
                  <path d="M17 7h4v4" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">FinPilot</span>
            </div>

            {/* Hero Heading & Subtitle */}
            <h2 className="text-2xl font-bold text-white mb-3" style={{ lineHeight: '1.25' }}>
              Smart finance<br />starts here.
            </h2>
            <p className="text-xs text-gray-400 mb-8" style={{ lineHeight: '1.6' }}>
              Track spending, grow wealth, and hit your goals — all in one place.
            </p>

            {/* Stats Boxes */}
            <div className="flex gap-3 mb-8">
              <div className="stats-box">
                <div className="text-xl font-bold text-white">$2.4M</div>
                <div className="text-xs text-gray-400 mt-1">Assets tracked</div>
              </div>
              <div className="stats-box">
                <div className="text-xl font-bold text-white">18%</div>
                <div className="text-xs text-gray-400 mt-1">Avg. savings</div>
              </div>
            </div>

            {/* Live Chart Graphic */}
            <div className="relative mt-2">
              <div className="flex justify-end mb-1">
                <span className="chart-badge">+24.8%</span>
              </div>
              
              <svg className="w-full" height="120" viewBox="0 0 300 120" fill="none">
                <line x1="0" y1="20" x2="300" y2="20" stroke="#1e293b" strokeDasharray="3 3" />
                <line x1="0" y1="65" x2="300" y2="65" stroke="#1e293b" strokeDasharray="3 3" />
                <line x1="0" y1="110" x2="300" y2="110" stroke="#1e293b" />

                <rect x="15" y="75" width="22" height="35" rx="4" fill="#334155" />
                <rect x="58" y="55" width="22" height="55" rx="4" fill="#334155" />
                <rect x="101" y="65" width="22" height="45" rx="4" fill="#334155" />
                <rect x="144" y="40" width="22" height="70" rx="4" fill="#334155" />
                <rect x="187" y="70" width="22" height="40" rx="4" fill="#334155" />
                <rect x="230" y="30" width="22" height="80" rx="4" fill="#475569" />

                <path d="M 26 80 L 69 57 L 112 67 L 155 38 L 198 68 L 241 22" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="241" cy="22" r="4.5" fill="#ffffff" />
              </svg>
            </div>
          </div>

          {/* Social Proof / Footer */}
          <div className="flex items-center gap-3 mt-8">
            <div className="avatar-group">
              <div className="avatar-circle" style={{ backgroundColor: '#64748b' }}></div>
              <div className="avatar-circle" style={{ backgroundColor: '#94a3b8' }}></div>
              <div className="avatar-circle" style={{ backgroundColor: '#cbd5e1' }}></div>
              <div className="avatar-circle" style={{ backgroundColor: '#e2e8f0' }}></div>
            </div>
            <span className="text-xs text-gray-400">
              Trusted by <strong className="text-gray-300 font-semibold">12,000+</strong> users
            </span>
          </div>

        </div>

        {/* Right Form Panel */}
        <div className="w-form-panel p-10 bg-white flex flex-col justify-between">
          <div>
            {/* Title & Subtitle */}
            <h1 className="text-2xl font-bold text-black">Create Your Account</h1>
            <p className="text-xs text-gray-500 mt-1 mb-8">
              Start tracking your finances smarter
            </p>

            {/* Form Fields */}
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-600">Full Name</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="Alex Johnson"
                    className="input-field"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-600">Email Address</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="input-field"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-600">Password</label>
                <div className="input-wrapper justify-between">
                  <input
                    type="password"
                    placeholder="Create a strong password"
                    className="input-field"
                  />
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer', flexShrink: 0 }}>
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-600">Confirm Password</label>
                <div className="input-wrapper justify-between">
                  <input
                    type="password"
                    placeholder="Repeat your password"
                    className="input-field"
                  />
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer', flexShrink: 0 }}>
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-primary bg-btn rounded-lg text-sm font-semibold mt-2">
                Create Account
              </button>
            </form>

            {/* Already have an account */}
            <div className="text-center text-xs text-gray-500 mt-5">
              Already have an account?{' '}
              <a href="#signin" className="text-black font-semibold link">
                Sign In
              </a>
            </div>
          </div>

          {/* Bottom Terms Note */}
          <div className="text-center text-xs text-gray-400 mt-8">
            By creating an account you agree to our{' '}
            <a href="#terms" className="text-gray-500 link">Terms</a> and{' '}
            <a href="#privacy" className="text-gray-500 link">Privacy Policy</a>
          </div>

        </div>

      </div>
    </div>
  );
}