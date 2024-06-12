import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VideoSection from "./VideoSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

const FeaturedVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/videolar');
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Failed to fetch videos", error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="flex flex-col mt-5 py-5 gap-5">
      <hr className="mb-5 dark:border-gray-200 border-gray-900" />
      <div className="text-gray-900 dark:text-white flex justify-center items-center">
        <h1 className="text-3xl">Videolar</h1>
      </div>
      {videos.length > 0 && (
        <div className="flex">
          <Link to={videos[0].slug}>
            <div className="w-full">
              <div className="relative">
                <img src={videos[0].imgSrc} alt="video" className="w-full" />
                <div className="absolute text-3xl bg-black bg-opacity-80 bottom-1 left-1 text-white py-1 px-3 rounded">
                  <FontAwesomeIcon icon={faVideo} />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-gray-900 dark:text-white p-3 hover:text-emerald-600 border-b border-transparent hover:border-emerald-600 pb-1 transition-colors duration-300 ease-in-out">
                  {videos[0].title}
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
      <div className="flex flex-col md:grid grid-cols-3 gap-4">
        {videos.slice(1).map((video, index) => (
          <div key={index} className="m-4">
            <VideoSection
              image={video.imgSrc}
              title={video.title}
              linkSrc={video.slug}
            />
          </div>
        ))}
      </div>
      <div className="text-white flex justify-center items-center">
        <Link to="/videolar" className="hover:text-green-200 border-b border-transparent hover:border-green-200 pb-1 transition-colors duration-300 ease-in-out">
          Tüm Videolar
        </Link>
      </div>
    </div>
  );
};

export default FeaturedVideos;