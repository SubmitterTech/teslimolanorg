import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import ReadMore from "../../ReadMore/ReadMore";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const { confirm } = Modal;

const PostList = ({ postType, title, fetchUrl }) => {
  const items = [
    { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
    { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
    { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
  ]
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${fetchUrl}/${postType}`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(`Error fetching ${postType}:`, error);
      }
    };

    fetchPosts();
  }, [fetchUrl, postType]);

  const handleDelete = async (id) => {
    confirm({
      title: "Bu yazıyı silmek istediğinizden emin misiniz?",
      onOk: async () => {
        try {
          const response = await fetch(`${fetchUrl}/sil/${id}`, {
            method: 'DELETE'
          });
          if (response.ok) {
            setPosts(posts.filter(post => post._id !== id));
          } else {
            console.error('Failed to delete the post');
          }
        } catch (error) {
          console.error('Error deleting the post:', error);
        }
      },
      onCancel() {
        console.log("Delete action cancelled");
      }
    });
  };

  return (
    <div className="flex flex-col md:justify-center md:items-center dark:bg-black w-full">
      <div className="flex flex-col md:max-w-[1200px] md:w-full gap-5">
        <h1 className="text-3xl text-gray-900 dark:text-white p-5">{title}</h1>
        {posts.map((post, index) => (
          <div key={index} className="flex flex-col gap-10 border-t p-5">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="md:max-w-[300px]">
                <Link to={`/${postType}/${post.slug}`}>
                  <img src={post.imgSrc || '/default-image.png'} alt={post.title} />
                </Link>
              </div>
              <div className="flex-1">
                <h1 className="text-gray-900 dark:text-white font-semibold text-xl">
                  <Link to={`/${postType}/${post._id}`}>{post.title}</Link>
                </h1>
                <div className="text-gray-900 dark:text-white mt-5">
                  <ReadMore
                    text={post.text || ''}
                    limit={250}
                    to={`/${postType}/${post._id}`}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center md:items-start">
                <Link to={`/admin/yazilar/${post._id}`} className="bg-blue-500 text-white px-4 py-2 rounded mb-2">
                  Düzenle
                </Link>
                <button onClick={() => handleDelete(post._id)} className="bg-red-500 text-white px-4 py-2 rounded">
                  Sil
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PostList;