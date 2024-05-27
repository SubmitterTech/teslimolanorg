import React from "react";

const RelatedVerses = ({ verses }) => {
  return (
    <div id="related-verses" className="md:min-w-[400px]  bg-gray-700 p-5">
      <div className="text-white border-b p-3 text-3xl">İlgili Ayetler</div>
      <ul className="flex flex-col gap-4">
        {verses.map((verse, index) => (
          <li key={index} className="text-white border-b p-3">{verse}</li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedVerses;
