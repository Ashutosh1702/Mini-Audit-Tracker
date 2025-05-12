import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-30 p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="material-icons">{isMobileMenuOpen ? 'close' : 'menu'}</span>
      </button>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-20 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-8">
            <span className="material-icons text-blue-600">verified_user</span>
            <h1 className="text-xl font-bold text-gray-800">Mini Audit Tracker</h1>
          </div>
          <nav className="space-y-4">
            <div>
              <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Main</h3>
              <div className="mt-2 space-y-1">
                <Link
                  to="/"
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
                    isActive('/') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="material-icons mr-3">dashboard</span>
                  Dashboard
                </Link>
              </div>
            </div>

            <div>
              <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Observations</h3>
              <div className="mt-2 space-y-1">
                <Link
                  to="/observations"
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
                    isActive('/observations') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="material-icons mr-3">list_alt</span>
                  All Observations
                </Link>
                <Link
                  to="/observations/new"
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
                    isActive('/observations/new') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="material-icons mr-3">add_circle</span>
                  New Observation
                </Link>
              </div>
            </div>

            <div>
              <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Reports</h3>
              <div className="mt-2 space-y-1">
                <Link
                  to="/reports/status"
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
                    isActive('/reports/status') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="material-icons mr-3">assessment</span>
                  Status Report
                </Link>
                <Link
                  to="/reports/analytics"
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
                    isActive('/reports/analytics') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="material-icons mr-3">analytics</span>
                  Analytics
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar; 