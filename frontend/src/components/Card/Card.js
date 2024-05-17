import { Link } from "react-router-dom";

const Card = ({imgSrc,linkTitle}) => {
    return <div className="w-full p-3 flex flex-col items-center justify-between gap-5">
    <div className="border-t w-11/12 md:border-none"></div>
    <div className="flex justify-center items-center gap-5 mx-5">
        <div className="w-[150px] h-[150px] flex items-center justify-center"><img src={imgSrc} alt="" className="max-w-full h-auto"/></div>
        <div className="w-[300px] h-[200px] text-white flex items-center justify-center"><Link to="#" className="hover:text-emerald-700">{linkTitle}</Link></div>
    </div>
  </div>;


};

export default Card;
