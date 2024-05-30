import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ image, title, linkSrc }) => {
  return (
    <Link to={linkSrc}>
      <div className="rounded overflow-hidden shadow-lg text-gray-900 dark:text-white">
        <img className="w-full" src={image} alt="Article" />
        <div className="px-6 py-4">
          <div className="text-xl mb-2 hover:text-emerald-600 border-b border-transparent hover:border-emerald-600 pb-1 transition-colors duration-300 ease-in-out">{title}</div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
