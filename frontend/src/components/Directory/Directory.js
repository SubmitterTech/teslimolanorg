import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Directory = () => {
  return (
    <div id="directory" className="px-3 py-1 bg-gray-800 text-sm text-white">
      <span className="flex flex-row gap-3">
        <span>
          <Link to="/">Kuran</Link>
        </span>
        <span>
          <FontAwesomeIcon icon={faGreaterThan} className="text-xs" />
        </span>
        <span>
          <Link to="/">Makaleler</Link>
        </span>
        <span>
          <FontAwesomeIcon icon={faGreaterThan} className="text-xs" />
        </span>
        <span>
          <Link to="/">Namazda Ayaktayken Neden Sadece Fatiha Okumalıyız</Link>
        </span>
      </span>
    </div>
  );
};

export default Directory;
