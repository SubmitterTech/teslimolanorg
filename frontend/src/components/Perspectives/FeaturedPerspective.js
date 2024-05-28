import React from "react";
import Perspective from "./Perspective";
import { Link } from "react-router-dom";

const FeaturedPerspective = () => {
  const perspectives = [
    {
      image: "sp_1990mart_1.png",
      title: "Namazda Ayaktayken Neden Sadece Fatiha Okumalıyız",
      description:
        "Namazda ayakta dururken neden sadece Fatiha suresini okuduğumuzu açıklayan makale.",
      linkSrc: "/perspektif",
    },
    {
      image: "si̇te-banners.png",
      title:
        "Çevirilerde neden “Allah, İslam ve Müslüman” kelimeleri yerine “Tanrı, Teslimiyet ve Teslim Olan” kelimelerini kullanıyoruz.",
      description:
        "Çevirilerde neden bu kelimelerin tercih edildiğini açıklayan makale.",
      linkSrc: "/",
    },
  ];

  return (
    <div className="flex flex-col mt-5 p-3">
      <hr className="mb-5"/>
      <div className="flex justify-center text-white">
        <h1 className="text-3xl">Perspektif Yayınları</h1>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
        {perspectives.map((article, index) => (
          <div key={index} className="m-4">
            <Perspective
              image={article.image}
              title={article.title}
              linkSrc={article.linkSrc}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center text-white">
        <Link to="/perspektifler" className="hover:text-green-200 border-b border-transparent hover:border-green-200 pb-1 transition-colors duration-300 ease-in-out">Tüm Perspektifleri Oku</Link>
      </div>
    </div>
  );
};

export default FeaturedPerspective;
