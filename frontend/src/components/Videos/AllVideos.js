import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Directory from "../Directory/Directory";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const AllVideos = () => {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`${API_URL}/api/videolar/listele`);
        const data = await response.json();
        console.log(data); // Verileri kontrol etmek için ekledim
        
        if (Array.isArray(data)) {
          setVideos(data);
          setTotalPages(Math.ceil(data.length / itemsPerPage));
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [API_URL]);

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "previous" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedVideos = videos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col md:justify-center md:items-center bg-gray-50 dark:bg-black w-full">
      <div className="flex flex-col md:max-w-[1200px] md:w-full gap-5">
        <Directory />
        <h1 className="text-3xl text-gray-900 dark:text-white p-5">Tüm Videolar</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 place-items-center gap-5 py-5">
          {displayedVideos.map((video, index) => (
            <div
              key={index}
              className="flex flex-col items-center  justify-center w-full max-w-xs md:h-[280px] border border-gray-600 p-3 rounded-lg"
            >
              <Link to={video.linkSrc} className="flex flex-col justify-center items-center">
                <img src={video.imgSrc} alt={video.title} className="md:w-48 md:h-48" />
                <div className="flex items-center justify-center">
                  <h2 className="text-gray-900 dark:text-white line-clamp-2">{video.title}</h2>
                </div>
              </Link>
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
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
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
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${index + 1 === currentPage ? "bg-indigo-600 text-white" : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"} focus:z-20 focus:outline-offset-0`}
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
      </div>
      <Footer />
    </div>
  );
};

export default AllVideos;