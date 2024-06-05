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
  const [newMenu, setNewMenu] = useState({ name: "", icon: "", path: "" });
  const [newSubMenu, setNewSubMenu] = useState({ parentMenu: "", name: "", path: "" });

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

  const handleNewMenuChange = (e) => {
    const { name, value } = e.target;
    setNewMenu((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewSubMenuChange = (e) => {
    const { name, value } = e.target;
    setNewSubMenu((prev) => ({ ...prev, [name]: value }));
  };

  const addMenu = () => {
    handleAddMenu(newMenu.name, faHome, newMenu.path);
    setNewMenu({ name: "", icon: "", path: "" });
  };

  const addSubMenu = () => {
    handleAddSubMenu(newSubMenu.parentMenu, newSubMenu.name, newSubMenu.path);
    setNewSubMenu({ parentMenu: "", name: "", path: "" });
  };

  return (
    <div className={`fixed inset-y-0 left-0 z-50 transform min-w-60 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:w-64 h-screen bg-gray-800 text-white transition-transform duration-200 ease-in-out`}>
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
                    <button onClick={() => toggleMenu(menu.name)} className="block w-full text-left p-2 rounded hover:bg-gray-700">
                      <div>
                        <FontAwesomeIcon icon={menu.icon} className="w-6" /><span className="mr-2">{menu.name}</span>
                        <FontAwesomeIcon icon={faChevronDown} className={`transition-transform ${isMenuOpen[menu.name] ? "transform rotate-180" : ""}`} />
                      </div>
                    </button>
                    {isMenuOpen[menu.name] && (
                      <ul className="pl-4">
                        {menu.subMenus.map(subMenu => (
                          <li key={subMenu.name}>
                            <Link to={subMenu.path} className="block p-2 rounded hover:bg-gray-700" onClick={toggleSidebar}>
                              {subMenu.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link to={menu.path} className="block p-2 rounded hover:bg-gray-700" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={menu.icon} className="w-6" /><span>{menu.name}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-4">
          <h2 className="text-lg font-bold">Yeni Menü Ekle</h2>
          <input type="text" name="name" value={newMenu.name} onChange={handleNewMenuChange} placeholder="Menü Adı" className="block w-full p-2 mb-2 rounded" />
          <input type="text" name="path" value={newMenu.path} onChange={handleNewMenuChange} placeholder="Menü Yolu" className="block w-full p-2 mb-2 rounded" />
          <button onClick={addMenu} className="block w-full p-2 bg-blue-500 rounded">Menü Ekle</button>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold">Yeni Alt Menü Ekle</h2>
          <input type="text" name="parentMenu" value={newSubMenu.parentMenu} onChange={handleNewSubMenuChange} placeholder="Ana Menü Adı" className="block w-full p-2 mb-2 rounded" />
          <input type="text" name="name" value={newSubMenu.name} onChange={handleNewSubMenuChange} placeholder="Alt Menü Adı" className="block w-full p-2 mb-2 rounded" />
          <input type="text" name="path" value={newSubMenu.path} onChange={handleNewSubMenuChange} placeholder="Alt Menü Yolu" className="block w-full p-2 mb-2 rounded" />
          <button onClick={addSubMenu} className="block w-full p-2 bg-blue-500 rounded">Alt Menü Ekle</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;