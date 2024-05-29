import React from "react";
import { Link } from "react-router-dom";
import VideoSection from "./VideoSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

const FeaturedVideos = () => {
  const videos = [
    {
      image: "teslimiyete-karsi-kurancilik.png",
      title: "Video Başlık",
      linkSrc: "/video",
    },
    {
      image: "hqdefault1.jpg",
      title: "Video Başlık 1",
      linkSrc: "/video",
    },
    {
      image: "hqdefault2.jpg",
      title: "Video Başlık 2",
      linkSrc: "/video",
    },
    {
      image: "hqdefault3.jpg",
      title: "Video Başlık 3",
      linkSrc: "/video",
    },
    
  ];
  return (
    <div className="flex flex-col mt-5 py-5 gap-5">
      <hr className="bg-green-700 mx-3"/>
      <div className="text-white flex justify-center items-center">
        <h1 className="text-3xl">Videolar</h1>
      </div>
      <div className="flex">
        <Link to={videos[0].linkSrc}>
          <div className="w-full">
            <div className="relative">
              <img src={videos[0].image} alt="video" />
              <div className="absolute text-3xl bg-black bg-opacity-80 bottom-1 left-1 text-white py-1 px-3 rounded">
                <FontAwesomeIcon icon={faVideo} />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-white p-3 hover:text-green-200 border-b border-transparent hover:border-green-200 pb-1 transition-colors duration-300 ease-in-out">{videos[0].title}</div>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col md:grid grid-cols-3">
        {videos.map(
          (video, index) =>
            index !== 0 && (
              <div key={index} className="m-4">
                {console.log(index)}
                <VideoSection
                  image={video.image}
                  title={video.title}
                  linkSrc={video.linkSrc}
                />
              </div>
            )
        )}
      </div>
      <div className="text-white flex justify-center items-center">
        <Link to="/videolar" className="hover:text-green-200 border-b border-transparent hover:border-green-200 pb-1 transition-colors duration-300 ease-in-out">Tüm Videolar</Link>
      </div>
    </div>
  );
};

export default FeaturedVideos;
