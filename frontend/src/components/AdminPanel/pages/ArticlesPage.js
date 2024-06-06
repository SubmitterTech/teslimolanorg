import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReadMore from "../../ReadMore/ReadMore";

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/admin/yazilar/Makale');
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="flex flex-col md:justify-center md:items-center dark:bg-black w-full">
      <div className="flex flex-col md:max-w-[1200px] md:w-full gap-5">
        <h1 className="text-3xl text-gray-900 dark:text-white p-5">Tüm Makaleler</h1>
        {articles.map((article, index) => (
          <div key={index} className="flex flex-col gap-10 border-t p-5">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="md:max-w-[300px]">
                <Link to={`/makale/${article._id}`}>
                  <img src={article.imgSrc || '/default-image.png'} alt={article.title} />
                </Link>
              </div>
              <div>
                <h1 className="text-gray-900 dark:text-white font-semibold text-xl">
                  <Link to={`/makale/${article._id}`}>{article.title}</Link>
                </h1>
                <div className="text-gray-900 dark:text-white mt-5">
                  <ReadMore
                    text={article.text || ''}
                    limit={250}
                    to={`/makale/${article._id}`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;