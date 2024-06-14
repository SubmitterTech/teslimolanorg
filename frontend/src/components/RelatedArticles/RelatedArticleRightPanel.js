import React from "react";

const RelatedArticlesRightPanel = ({articles}) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-gray-900 dark:text-white text-3xl">İlgili Makaleler</h1>
      <hr />
      {articles.map((article, index) => (
        <div key={index} id="article" className="flex gap-3 items-center">
          <img
            src={`/${article.imgSrc}`}
            alt={article.title}
            className=" w-24 h-24 rounded-full"
          />
          <h1 className="text-gray-900 dark:text-white">
            {article.title}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default RelatedArticlesRightPanel;
