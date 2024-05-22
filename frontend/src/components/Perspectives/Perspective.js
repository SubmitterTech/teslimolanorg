import React from "react";
import { Link } from "react-router-dom";

const Perspective = ({ image, title, linkSrc }) => {
  return (
    <Link to={linkSrc}>
      <div className="rounded overflow-hidden shadow-lg text-white">
        <img className="w-full" src={image} alt="Article" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
        </div>
      </div>
    </Link>
  );
};

export default Perspective;
