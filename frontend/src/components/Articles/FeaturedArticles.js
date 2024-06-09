import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

const FeaturedArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/makaleler');
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="flex flex-col p-3">
      <hr className="mb-5 dark:border-gray-200 border-gray-900"/>
      <div className="flex justify-center text-gray-900 dark:text-white">
        <h1 className="text-3xl">Öne Çıkan Makaleler</h1>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="m-4">
            <ArticleCard
              image={article.imgSrc}
              title={article.title}
              linkSrc={`/makale/${article._id}`}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center text-gray-900 dark:text-white">
        <Link to='/makaleler' className="hover:text-emerald-600 border-b border-transparent hover:border-emerald-600 pb-1 transition-colors duration-300 ease-in-out">Tüm Makaleler</Link>
      </div>
    </div>
  );
};

export default FeaturedArticles;