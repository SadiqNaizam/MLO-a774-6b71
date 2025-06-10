import React from 'react';
import BackgroundPanel from '../components/layout/BackgroundPanel';
import LoginForm from '../components/Login/LoginForm';

/**
 * LoginPage is the main component for the login screen.
 * It arranges the BackgroundPanel (visible on medium screens and up)
 * and the LoginForm into a two-column layout on larger screens,
 * and a single-column layout (form only) on smaller screens.
 */
const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-row justify-center md:justify-between items-center min-h-screen bg-background">
      {/* Left Panel: Decorative background, visible on medium screens and up */}
      <div className="hidden md:block md:w-1/2 h-screen">
        <BackgroundPanel />
      </div>

      {/* Right Panel: Contains the login form card */}
      {/* Takes full width on small screens, half width on medium screens and up */}
      {/* Content (login card) is centered within this panel */}
      <div className="w-full md:w-1/2 h-screen flex justify-center items-center p-4 sm:p-6">
        {/* Login Form Card */}
        {/* Styling according to Layout Requirements: w-[400px], p-6, bg-card, rounded-lg, shadow-sm */}
        {/* Uses max-w-[400px] and w-full for responsiveness on smaller screens */}
        <div className="w-full max-w-[400px] bg-card p-6 rounded-lg shadow-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
