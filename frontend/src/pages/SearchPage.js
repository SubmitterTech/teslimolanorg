import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import ReadMore from "../components/ReadMore/ReadMore";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Helmet } from "react-helmet-async";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchPage = () => {
  const query = useQuery();
  const searchQuery = query.get("bul");
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/search?query=${searchQuery}&page=${currentPage}&limit=${itemsPerPage}`
        );
        const data = await response.json();

        if (data && data.results) {
          setResults(data.results);
          setTotalPages(Math.ceil(data.total / itemsPerPage));
        } else {
          console.error("Invalid data format:", data);
          setResults([]);
          setTotalPages(1);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
        setResults([]);
        setTotalPages(1);
      }
    };

    if (searchQuery) {
      fetchResults();
    }
  }, [searchQuery, currentPage, API_URL]);

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "previous" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col md:justify-center md:items-center bg-gray-50 dark:bg-black w-full">
      <Helmet>
        <title>Teslimolan.org - Arama Sayfası</title>
      </Helmet>
      <div className="flex flex-col md:max-w-[1200px] md:w-full gap-5">
        <h1 className="text-3xl text-gray-900 dark:text-white p-5">
          Arama Sonuçları
        </h1>
        {results.map((result, index) => (
          <div key={index} className="flex flex-col gap-10 border-t p-5">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="md:max-w-[300px]">
                <Link to={`/${result.postType.toLowerCase()}/${result.slug}`}>
                  <img
                    src={result.imgSrc || "/default-image.png"}
                    alt={result.title}
                  />
                </Link>
              </div>
              <div>
                <h1 className="text-gray-900 dark:text-white font-semibold text-xl">
                  <Link to={`/${result.postType.toLowerCase()}/${result.slug}`}>
                    {result.title}
                  </Link>
                </h1>
                <p className="text-gray-900 dark:text-white mt-5">
                  <ReadMore
                    text={result.text}
                    limit={100}
                    to={`/${result.postType.toLowerCase()}/${result.slug}`}
                  />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
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

export default SearchPage;
