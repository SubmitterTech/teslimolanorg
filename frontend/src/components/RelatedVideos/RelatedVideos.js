import React from "react";
import { Link } from "react-router-dom";

const RelatedVideos = ({ videos }) => {
  return (
    <div id="related-videos" className="md:min-w-[400px]  bg-gray-900 p-5">
      <div className="text-white border-b p-3 text-3xl">İlgili Videolar</div>
      <div
        id="videos-carts"
        className="flex flex-col gap-3 md:gap-5 md:flex-row"
      >
        {videos.map((video, index) => (
          <div key={index} id="cart" className="md:w-[250px] h-auto">
            <Link to={video.link} className="text-white">
              <img src={`/${video.imgSrc}`} alt={video.title}></img>
              <h1 className="mt-3">{video.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedVideos;
