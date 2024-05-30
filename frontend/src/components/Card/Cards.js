import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="flex flex-wrap md:justify-between md:flex-nowrap"> 
      <Card
        imgSrc="sonahit.jpg"
        linkTitle="Web Sitemizden Kuran Son Ahit'i Okuyabilirsiniz"
      />
      <div className="border-l  border-gray-900 dark:border-gray-500"></div>
      <Card
        imgSrc="sonahit.jpg"
        linkTitle="Son eklenen videolara, makalelere, perspektiflere ve haberlere bakabilirsiniz."
      />
    </div>
  );
};

export default Cards;
