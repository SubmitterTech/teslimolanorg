import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";
import Directory from "../Directory/Directory";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const AllPerspectives = () => {
  const [perspectives, setPerspectives] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 15;

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchPerspectives = async () => {
      try {
        const response = await fetch(`${API_URL}/api/perspektifler/listele`); // API adresini güncelleyin
        const data = await response.json();
        
        if (Array.isArray(data)) {
          setPerspectives(data);
          setTotalPages(Math.ceil(data.length / itemsPerPage));
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error("Error fetching perspectives:", error);
      }
    };

    fetchPerspectives();
  }, []);

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "previous" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedPerspectives = perspectives.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="flex flex-col md:justify-center md:items-center bg-gray-50 dark:bg-black w-full">
      <div className="flex flex-col md:max-w-[1200px] md:w-full gap-5">
        <Directory />
        <h1 className="text-3xl text-gray-900 dark:text-white p-5">Perspektif Yayınları</h1>
        <div className="flex flex-col gap-10 border-t p-5">
          <h2 className="text-3xl text-gray-900 dark:text-white">1990 - Yılı</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
            {displayedPerspectives.map((perspective, index) => (
              <div key={index} className="flex flex-col justify-center items-center bg-gray-800 w-[180px] gap-3 rounded py-5">
                <img src={perspective.imgSrc || "/default-image.png"} alt="" />
                <span className="text-white">
                  <Link to="" className="text-lg">{perspective.title}</Link>
                </span>
                <span>
                  <Link to={perspective.downloadTr} className="flex gap-3 text-white border p-2 rounded">
                    <span>
                      <FontAwesomeIcon icon={faFilePdf} />
                    </span>
                    <span>İndir TR</span>
                  </Link>
                </span>
                <span>
                  <Link to={perspective.downloadEn} className="flex gap-3 text-white border p-2 rounded">
                    <span>
                      <FontAwesomeIcon icon={faFilePdf} />
                    </span>
                    <span>İndir (Orijinal) EN</span>
                  </Link>
                </span>
              </div>
            ))}
          </div>
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

export default AllPerspectives;