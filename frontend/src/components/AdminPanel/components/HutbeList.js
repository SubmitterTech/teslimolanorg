import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import ReadMore from "../../ReadMore/ReadMore";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const { confirm } = Modal;
const defaultImage = "/ekler.png"; // Varsayılan resim yolu

const HutbeList = ({ postType, title }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 3;

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${API_URL}/api/hutbeler/getir`);
        const data = await response.json();
        
        // Verilerin doğrudan bir dizi olduğunu kabul edelim
        if (Array.isArray(data)) {
          setPosts(data);
          setTotalPages(Math.ceil(data.length / itemsPerPage));
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error(`Error fetching ${postType}:`, error);
      }
    };

    fetchPosts();
  }, [API_URL, postType]);

  const handleDelete = async (id) => {
    confirm({
      title: "Bu yazıyı silmek istediğinizden emin misiniz?",
      onOk: async () => {
        try {
          const response = await fetch(`${API_URL}/api/hutbeler/sil/id/${id}`, {
            method: "DELETE",
          });
          if (response.ok) {
            setPosts(posts.filter((post) => post._id !== id));
          } else {
            console.error("Failed to delete the post");
          }
        } catch (error) {
          console.error("Error deleting the post:", error);
        }
      },
      onCancel() {
        console.log("Delete action cancelled");
      },
    });
  };

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "previous" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedPosts = posts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="flex flex-col md:justify-center md:items-center w-full">
      <div className="flex flex-col md:max-w-[1200px] md:w-full gap-5">
        <h1 className="text-3xl text-gray-900 p-5">{title}</h1>
        {displayedPosts.length > 0 ? (
          displayedPosts.map((post, index) => (
            <div key={index} className="flex flex-col gap-10 border-t p-5">
              <div className="flex flex-col md:flex-row gap-5">
                <div className="md:max-w-[300px]">
                  <Link to={`/${postType}/${post.slug}`}>
                    <img
                      src={defaultImage}
                      alt={post.title}
                    />
                  </Link>
                </div>
                <div className="flex-1">
                  <h1 className="text-gray-900  font-semibold text-xl">
                    <Link to={`/${postType}/${post._id}`}>{post.title}</Link>
                  </h1>
                  <div className="text-gray-900  mt-5">
                    <ReadMore
                      text={post.text || ""}
                      limit={250}
                      to={`/${postType}/${post.slug}`}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center md:items-start">
                  <Link
                    to={`/admin/yazilar/${post._id}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
                  >
                    Düzenle
                  </Link>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Sil
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-900 dark:text-white p-5">Gönderi bulunamadı.</p>
        )}
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
  );
};

export default HutbeList;