import React from "react";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

const FeaturedArticles = () => {
  const articles = [
    {
      image: "sadece-fatiha.png",
      title: "Namazda Ayaktayken Neden Sadece Fatiha Okumalıyız",
      description:
        "Namazda ayakta dururken neden sadece Fatiha suresini okuduğumuzu açıklayan makale.",
      linkSrc: "/makale/namazda-ayaktayken-neden-sadece-fatiha-okumaliyiz",
    },
    {
      image: "si̇te-banners.png",
      title:
        "Çevirilerde neden “Allah, İslam ve Müslüman” kelimeleri yerine “Tanrı, Teslimiyet ve Teslim Olan” kelimelerini kullanıyoruz.",
      description:
        "Çevirilerde neden bu kelimelerin tercih edildiğini açıklayan makale.",
      linkSrc: "/",
    },
    {
      image: "teslimiyete-karsi-kurancilik.png",
      title: "Teslimiyet'e Karşı Kuran Müslümanlığı",
      description:
        "Teslimiyet kavramına karşı Kur'an Müslümanlığının ne olduğunu açıklayan makale.",
      linkSrc: "/",
    },
    {
      image: "sadece-fatiha.png",
      title: "Teslimiyet'e Karşı Kuran Müslümanlığı",
      description:
        "Teslimiyet kavramına karşı Kur'an Müslümanlığının ne olduğunu açıklayan makale.",
      linkSrc: "/",
    },
  ];

  return (
    <div className="flex flex-col p-3">
      <hr className="mb-5 dark:border-gray-200 border-gray-900"/>
      <div className="flex justify-center text-gray-900 dark:text-white">
        <h1 className="text-3xl">Öne Çıkan Makaleler</h1>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="m-4">
            <ArticleCard
              image={article.image}
              title={article.title}
              linkSrc={article.linkSrc}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center text-gray-900 dark:text-white">
        <Link to='/makaleler'className="hover:text-emerald-600 border-b border-transparent hover:border-emerald-600 pb-1 transition-colors duration-300 ease-in-out">Tüm Makaleler</Link>
      </div>
    </div>
  );
};

export default FeaturedArticles;
