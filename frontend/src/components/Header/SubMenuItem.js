import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const SubMenuItem = ({
  title,
  src,
  icon,
  subMenuItems,
  toggleSubMenu,
  expandedMenu,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) onClick();
    // Any other click handlers can go here
  };

  return (
    <li className="border-b md:border-none p-3 md:p-0 md:text-xs lg:text-base">
      {subMenuItems.length > 0 ? (
        <>
          <button
            className="flex items-center w-full text-left gap-3 hover:text-green-200 border-b border-transparent hover:border-green-200 pb-1 transition-colors duration-300 ease-in-out"
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
          <ul
            className={`transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${
              expandedMenu === title
                ? "h-auto opacity-100 p-4 md:p-14 mt-3"
                : "max-h-0 opacity-0"
            } flex flex-col gap-4 rounded md:rounded-none bg-gray-600 md:absolute md:top-full md:left-0 md:mt-0 md:w-screen md:flex md:flex-row md:justify-center md:items-center md:gap-4 md:flex-wrap`}
          >
            {subMenuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className="hover:text-green-200 border-b border-transparent hover:border-green-200 pb-1 transition-colors duration-300 ease-in-out"
                >
                  {item.subIcon} {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link to={src} className="flex items-center gap-3 hover:text-green-200 border-b border-transparent hover:border-green-200 pb-1 transition-colors duration-300 ease-in-out" onClick={handleClick}>
            <FontAwesomeIcon icon={icon} />
            {title}
        </Link>
    )}
</li>
);
};

export default SubMenuItem;
