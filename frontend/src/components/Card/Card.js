import { Link } from "react-router-dom";

const Card = ({ imgSrc, linkTitle }) => {
  return (
    <div className="w-full p-3 flex flex-col items-center justify-between gap-5">
      <div className="border-t border-gray-900 w-11/12 md:border-none"></div>
      <div className="flex justify-center items-center gap-5">
        <div className="w-[100px] h-[200px] flex items-center justify-center">
          <img src={imgSrc} alt="" />
        </div>
        <div className="w-[150px] h-[100px] md:w-[300px] md:h-[200px] text-gray-900  dark:text-white flex items-center justify-center">
          <Link to="#" className="hover:text-emerald-600 border-b border-transparent hover:border-emerald-600 pb-1 transition-colors duration-300 ease-in-out">
            {linkTitle}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
