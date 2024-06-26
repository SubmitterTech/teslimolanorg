import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import { Spin } from "antd";
import { Link } from "react-router-dom";

const NewsSlider = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const response = await fetch(`${API_URL}/api/slider`);
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching latest posts:", error);
        setLoading(false);
      }
    };

    fetchLatestPosts();
  }, [API_URL]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin tip="Loading..." size="large" />
      </div>
    );
  }

  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      className="w-full h-96 md:h-80 sm:h-60 mySwiper"
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {posts.map((post) => (
        <SwiperSlide key={post._id}>
          <div className="relative w-full h-full border-b-2 shadow-2xl">
            <img src={post.imgSrc} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-8 left-5 bg-black bg-opacity-70 text-white p-2 rounded-md text-lg md:text-base sm:text-sm">
              <Link to={`/${post.postType.toLowerCase()}/${post.slug}`}>{post.title}</Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewsSlider;