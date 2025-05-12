import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="bg-white px-4 py-3 shadow-sm">
      <ol className="flex flex-wrap items-center space-x-2 text-sm">
        <li>
          <Link to="/" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={name} className="flex items-center space-x-2">
              <span className="text-gray-400">/</span>
              {isLast ? (
                <span className="text-gray-900 font-medium">{name}</span>
              ) : (
                <Link 
                  to={routeTo} 
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  {name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb; 