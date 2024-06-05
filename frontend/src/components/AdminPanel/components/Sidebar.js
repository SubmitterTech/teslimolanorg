import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faChevronDown, faHome, faUser, faGear, faPen, faFont } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [menus, setMenus] = useState([
    { name: "Anasayfa", icon: faHome, path: "/admin", subMenus: [] },
    { name: "Yazılar", icon: faFont, path: "#", subMenus: [
      { name: "Makaleler", path: "/admin/makaleler" },
      { name: "Perspektifler", path: "/admin/perspektifler" },
      { name: "Videolar", path: "/admin/videolar" },
    ] },
    { name: "Profil", icon: faUser, path: "/admin/profile", subMenus: [] },
    { name: "Ayarlar", icon: faGear, path: "#", subMenus: [
      { name: "Tema", path: "/admin/settings/theme" },
      { name: "Kullanıcı", path: "/admin/settings/profile" },
    ] },
    { name: "Yazı Ekle", icon: faPen, path: "/admin/makale", subMenus: [] },
  ]);

  const [isMenuOpen, setIsMenuOpen] = useState({});

  const toggleMenu = (name) => {
    setIsMenuOpen((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const handleAddMenu = (menuName, icon, path) => {
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
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 transform min-w-60 ${
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
        <nav className="mt-4">
          <ul>
            {menus.map(menu => (
              <li key={menu.name}>
                {menu.subMenus.length > 0 ? (
                  <>
                    <button
                      onClick={() => toggleMenu(menu.name)}
                      className="block w-full text-left p-2 rounded hover:bg-gray-700"
                    >
                      <div>
                        <FontAwesomeIcon icon={menu.icon} className="w-6" /><span className="mr-2">{menu.name}</span>
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
                    <FontAwesomeIcon icon={menu.icon} className="w-6" /><span>{menu.name}</span>
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