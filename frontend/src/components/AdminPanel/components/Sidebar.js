import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isOpen,toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:static md:w-64 h-screen bg-gray-800 text-white transition-transform duration-200 ease-in-out`}
    >
      <div className="p-4">
      <button
          onClick={toggleSidebar}
          className="lg:hidden focus:outline-none mr-4"
        >
         <FontAwesomeIcon icon={faTimes}/>
        </button>
        <h1 className="text-lg font-bold">Admin Dashboard</h1>
        <nav className="mt-4">
          <ul>
            <li>
              <Link to="/admin" className="block p-2 rounded hover:bg-gray-700">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/profile" className="block p-2 rounded hover:bg-gray-700">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/admin/settings" className="block p-2 rounded hover:bg-gray-700">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
