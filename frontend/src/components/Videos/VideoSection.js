import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
const VideoSection = ({ image, title, linkSrc, featured }) => {
  return (
    <Link to={`/video/${linkSrc}`}>
      <div className="lg:max-w-lg">
        <div className="relative">
          <img src={image} alt="video" />
          <div className="absolute text-3xl bg-black bg-opacity-80 bottom-1 left-1 text-white py-1 px-3 rounded">
            <FontAwesomeIcon icon={faVideo}/>
          </div>
        </div>
        <div>
          <div className="text-gray-900 dark:text-white p-3 hover:text-emerald-600 border-b border-transparent hover:border-emerald-600 pb-1 transition-colors duration-300 ease-in-out">{title}</div>
        </div>
      </div>
    </Link>
  );
};

export default VideoSection;
