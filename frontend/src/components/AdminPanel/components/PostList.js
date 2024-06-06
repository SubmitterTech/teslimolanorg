import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import ReadMore from "../../ReadMore/ReadMore";

const { confirm } = Modal;

const PostList = ({ postType, title, fetchUrl }) => {
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
                <Link to={`/${postType}/${post._id}`}>
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
    </div>
  );
};

export default PostList;