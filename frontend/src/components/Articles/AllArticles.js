import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import ReadMore from "../ReadMore/ReadMore";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/makaleler/listele`
        );
        const data = await response.json();

        if (Array.isArray(data)) {
          setArticles(data);
          setTotalPages(Math.ceil(data.length / itemsPerPage));
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [API_URL]);

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "previous" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedArticles = articles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col md:justify-center md:items-center bg-gray-50 dark:bg-black w-full">
      <div className="flex flex-col md:max-w-[1200px] md:w-full gap-5">
        <h1 className="text-3xl text-gray-900 dark:text-white p-5">
          Tüm Makaleler
        </h1>
        {displayedArticles.map((article, index) => (
          <div key={index} className="flex flex-col gap-10 border-t p-5">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="md:max-w-[300px]">
                <Link to={`/makale/${article.slug}`}>
                  <img
                    src={article.imgSrc || "/default-image.png"}
                    alt={article.title}
                  />
                </Link>
              </div>
              <div>
                <h1 className="text-gray-900 dark:text-white font-semibold text-xl">
                  <Link to={`/makale/${article.slug}`}>{article.title}</Link>
                </h1>
                <div className="text-gray-900 dark:text-white mt-5">
                  <ReadMore
                    text={article.text}
                    limit={100}
                    to={`/makale/${article.slug}`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 dark:bg-black px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            onClick={() => handlePageChange("previous")}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange("next")}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <button
                onClick={() => handlePageChange("previous")}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                disabled={currentPage === 1}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                    index + 1 === currentPage
                      ? "bg-indigo-600 text-white"
                      : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  } focus:z-20 focus:outline-offset-0`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange("next")}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                disabled={currentPage === totalPages}
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllArticles;
