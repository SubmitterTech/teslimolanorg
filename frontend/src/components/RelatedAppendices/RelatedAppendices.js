import React from "react";
import { Link } from "react-router-dom";

const RelatedAppendices = ({ appendices }) => {
  return (
    <div id="related-appendices" className="md:min-w-[400px]  bg-gray-900 p-5">
      <div className="text-white border-b p-3 text-3xl">İlgili Ekler</div>
      {appendices.map((appendix, index) => (
        <div key={index} className="flex flex-row items-center gap-3 border-b p-3">
          <img src="/ekler.png" alt="" className=" w-20 h-20" />
          <span className=" text-white text-xl">
            <Link to={appendix.link}>{appendix.title}</Link>
          </span>
        </div>
      ))}
    </div>
  );
};

export default RelatedAppendices;
