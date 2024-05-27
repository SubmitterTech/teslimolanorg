import { Link } from "react-router-dom";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RelatedTags = ({tags}) => {
  return (
    <div id="related-tags" className="md:min-w-[400px]  bg-gray-900 p-5">
      <div className="relatedTopics tagNavigation text-white flex flex-wrap gap-5 border-t border-b p-5">
        {tags.map((tag,index)=>(
            <Link key={index}
            to={tag.link}
            className="secondaryButton link tagNavigationItem flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faTags} />
            <span className="buttonText">{tag.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedTags;
