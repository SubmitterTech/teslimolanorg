import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faChevronDown, faHome, faUser, faGear, faPen, faFont, faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  // eslint-disable-next-line no-unused-vars
const [menus, setMenus] = useState([
  { name: "Web Site", icon: faEarthAmericas, path: "/", subMenus: [] },
  { name: "Anasayfa", icon: faHome, path: "/admin", subMenus: [] },
  { name: "Hutbe Ekle", icon: faPen, path: "/admin/hutbe/ekle", subMenus: [] },
  { name: "Yazı Ekle", icon: faPen, path: "/admin/makale", subMenus: [] },
  { name: "Yazılar", icon: faFont, path: "#", subMenus: [
    { name: "Makaleler", path: "/admin/makaleler" },
    { name: "Perspektifler", path: "/admin/perspektifler" },
    { name: "Videolar", path: "/admin/videolar" },
    { name: "Hutbeler", path: "/admin/hutbeler" },
  ] },
  { name: "Profil", icon: faUser, path: "/admin/profile", subMenus: [] },
  { name: "Ayarlar", icon: faGear, path: "#", subMenus: [
    { name: "Tema", path: "/admin/settings/theme" },
    { name: "Sosyal Medya", path: "/admin/ayarlar/sosyalmedya" },
  ] },
]);

const [isMenuOpen, setIsMenuOpen] = useState({});

  const toggleMenu = (name) => {
    setIsMenuOpen((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

 /*  const handleAddMenu = (menuName, icon, path) => {
    setMenus([...menus, { name: menuName, icon: icon, path: path, subMenus: [] }]);
  };

  const handleAddSubMenu = (menuName, subMenuName, subMenuPath) => {
    setMenus(menus.map(menu => {
      if (menu.name === menuName) {
        return {
          ...menu,
          subMenus: [...menu.subMenus, { name: subMenuName, path: subMenuPath }]
        };
      }
      return menu;
    }));
  }; */

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 transform min-w-60 min-h-screen ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:static md:w-64 bg-gray-800 text-white transition-transform duration-200 ease-in-out`}
    >
      <div className="p-4 h-full flex flex-col">
        <div className="flex justify-end md:hidden mb-2">
          <button onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <h1 className="text-lg font-bold">Yönetici Paneli</h1>
        <nav className="mt-4 flex-grow">
          <ul>
            {menus.map(menu => (
              <li key={menu.name}>
                {menu.subMenus.length > 0 ? (
                  <>
                    <button
                      onClick={() => toggleMenu(menu.name)}
                      className="block w-full text-left p-2 rounded hover:bg-gray-700"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <FontAwesomeIcon icon={menu.icon} className="w-6 inline-block" />
                          <span className="ml-2">{menu.name}</span>
                        </div>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className={`transition-transform ${
                            isMenuOpen[menu.name] ? "transform rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>
                    {isMenuOpen[menu.name] && (
                      <ul className="pl-4">
                        {menu.subMenus.map(subMenu => (
                          <li key={subMenu.name}>
                            <Link
                              to={subMenu.path}
                              className="block p-2 rounded hover:bg-gray-700"
                              onClick={toggleSidebar}
                            >
                              {subMenu.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={menu.path}
                    className="block p-2 rounded hover:bg-gray-700"
                    onClick={toggleSidebar}
                  >
                    <FontAwesomeIcon icon={menu.icon} className="w-6 inline-block" />
                    <span className="ml-2">{menu.name}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;