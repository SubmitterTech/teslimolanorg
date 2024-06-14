import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Directory from "../Directory/Directory";
import ReadMore from "../ReadMore/ReadMore";
import { useEffect, useState } from "react";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/makaleler/listele");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="flex flex-col md:justify-center md:items-center bg-gray-50 dark:bg-black w-full">
      <div className="flex flex-col md:max-w-[1200px] md:w-full gap-5">
        <Directory />
        <h1 className="text-3xl text-gray-900 dark:text-white p-5">Tüm Makaleler</h1>
        {articles.map((article, index) => (
          <div key={index} className="flex flex-col gap-10 border-t p-5">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="md:max-w-[300px]">
                <Link to={`/makale/${article.slug}`}>
                  <img src={`${article.imgSrc}`} alt={article.title} />
                </Link>
              </div>
              <div>
                <h1 className="text-gray-900 dark:text-white font-semibold text-xl">
                  <Link to={`/makale/${article.slug}`}>{article.title}</Link>
                </h1>
                <p className="text-gray-900 dark:text-white mt-5">
                  <ReadMore
                    text={article.text}
                    limit={100}
                    to={`/makale/${article.slug}`}
                  />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AllArticles;