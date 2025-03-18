import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  // Check if the user is authenticated
  const isAuthenticated = !!localStorage.getItem('auth_token'); // Returns true if token exists

  const handleLogout = () => {
    localStorage.removeItem('auth_token'); // Remove the token
    navigate('/login'); // Redirect to Login page
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/"> 
          <h3 className="flex gap-2 justify-center items-center text-xl font-bold tracking-wide hover:text-indigo-200 transition-all">
          <img src="/logo-owl-removebg.png" alt="itm" /> Ideas Task Manager
          </h3>
        </Link>
        <nav>
          <ul className="flex space-x-8 text-lg">
            {isAuthenticated ? (
              <>
                <li>
                  <button
                    onClick={handleLogout}
                    className="hover:text-gray-200 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-2"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="hover:text-gray-200 transition-all duration-300 ease-in-out"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="hover:text-gray-200 transition-all duration-300 ease-in-out"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
