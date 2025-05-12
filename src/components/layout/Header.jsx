import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <h2 className="text-xl font-semibold text-gray-800">Audit Management</h2>
            <div className="relative flex-grow sm:flex-grow-0">
              <input
                type="text"
                placeholder="Search observations..."
                className="w-full sm:w-64 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              />
              <span className="material-icons absolute right-3 top-2.5 text-gray-400">search</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 w-full sm:w-auto justify-end">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full relative transition-colors duration-200">
              <span className="material-icons">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center space-x-2">
              <img
                src="https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium text-gray-700 hidden sm:inline">User</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 