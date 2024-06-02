import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faChevronDown, faHome, faUser, faGear } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettingsMenu = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 transform min-w-60 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:static md:w-64 h-screen bg-gray-800 text-white transition-transform duration-200 ease-in-out`}
    >
      <div className="p-4">
        <div className="flex justify-end">
          <button onClick={toggleSidebar} className="md:hidden mb-2">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <h1 className="text-lg font-bold">Yönetici Paneli</h1>
        <hr className="mt-2"/>
        <nav className="mt-4">
          <ul>
            <li>
              <Link to="/admin" className="block p-2 rounded hover:bg-gray-700" onClick={toggleSidebar}>
                <i className="mr-2"><FontAwesomeIcon icon={faHome}/></i><span>Anasayfa</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/profile"
                className="block p-2 rounded hover:bg-gray-700" onClick={toggleSidebar}
              >
                <i className="mr-2"><FontAwesomeIcon icon={faUser}/></i><span>Profil</span>
              </Link>
            </li>
            <li>
              <button
                onClick={toggleSettingsMenu}
                className="block w-full text-left p-2 rounded hover:bg-gray-700"
              >
                <div>
                <i className="mr-2"><FontAwesomeIcon icon={faGear }/></i><span className="mr-2">Ayarlar</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`transition-transform ${
                      isSettingsOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              {isSettingsOpen && (
                <ul className="pl-4">
                  <li>
                    <Link
                      to="/admin/settings/theme"
                      className="block p-2 rounded hover:bg-gray-700" 
                    >
                      Tema
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/settings/profile"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Kullanıcı
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/admin/profile"
                className="block p-2 rounded hover:bg-gray-700"
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
