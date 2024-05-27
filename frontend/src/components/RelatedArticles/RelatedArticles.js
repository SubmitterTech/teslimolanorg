import React from "react";
import { Link } from "react-router-dom";

const RelatedArticles = ({ articles }) => {
  return (
    <div id="related-articles" className="md:min-w-[400px]  bg-gray-800 p-5">
      <div className="text-white border-b p-3 text-3xl">İlgili Makaleler</div>
      {articles.map((article, index) => (
        <Link to={article.link}>
          <div
            key={index}
            className="flex flex-row items-center gap-3 border-b p-3"
          >
            <img
              src={`/${article.imgSrc}`}
              alt={article.title}
              className=" w-20 h-20"
            />
            <span className=" text-white text-xl">{article.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RelatedArticles;
