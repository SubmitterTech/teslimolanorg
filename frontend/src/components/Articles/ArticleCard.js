import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ linkSrc, image, title }) => {
  const uploadSrc = process.env.REACT_APP_UPLOAD_SRC;

  return (
    <Link to={linkSrc}>
      <div className="rounded overflow-hidden shadow-lg text-gray-900 dark:text-white">
        <div className="relative w-full h-48 bg-gray-50 dark:bg-black flex items-center justify-center">
          <img
            className="max-h-full max-w-full object-contain"
            src={`${uploadSrc}${image}`}
            alt="Article"
          />
        </div>
        <div className="px-6 py-4">
          <div className="text-xl mb-2 hover:text-emerald-600 border-b border-transparent hover:border-emerald-600 pb-1 transition-colors duration-300 ease-in-out">
            {title}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;