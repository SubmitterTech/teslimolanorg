import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"; // faChevronDown'ı ekleyin

const SubMenuItem = ({ title, icon, subMenuItems, toggleSubMenu, expandedMenu, }) => {
  return (
    <li>
      <button
        className="flex items-center w-full text-left gap-3 hover:text-green-200"
        onClick={() => toggleSubMenu(title)}
      >
        <FontAwesomeIcon icon={icon} />
        {title}
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`ml-auto transition-transform ${
            expandedMenu === title ? "rotate-180" : ""
          }`}
        />
      </button>
      {expandedMenu === title && (
        <ul className="p-4 mt-2 bg-gray-600 md:absolute md:top-full md:left-0 md:mt-0 md:w-screen md:flex md:justify-center md:items-center md:gap-4 md:flex-wrap">
          {subMenuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.href} className="hover:text-green-200">{item.subIcon} {item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SubMenuItem;
