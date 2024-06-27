import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Directory = ({ postType, postTitle }) => {
  const getLink = (type) => {
    if (!type) return "/";
    switch (type.toLowerCase()) {
      case "makale":
        return "/makaleler/listele";
      case "perspektif":
        return "/perspektifler/listele";
      case "video":
        return "/videolar/listele";
      default:
        return "/";
    }
  };

  return (
    <div id="directory" className="px-3 py-1 bg-gray-800 text-sm text-white">
      <span className="flex flex-row gap-3">
        <span>
          <Link to={getLink(postType)}>{postType ? postType.charAt(0).toUpperCase() + postType.slice(1) : 'Ana Sayfa'}</Link>
        </span>
        <span>
          <FontAwesomeIcon icon={faGreaterThan} className="text-xs" />
        </span>
        <span>
          <Link to="/">{postTitle}</Link>
        </span>
      </span>
    </div>
  );
};

export default Directory;