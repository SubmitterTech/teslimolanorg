import React from "react";
import Card from "../components/Card/Card";
import Billboard from "../components/Billboard/Billbord";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen bg-black">
      <div className="lg:w-[1000px] flex flex-col bg-gray-950">
      <Billboard/>
        <Card
          imgSrc="sonahit.jpg"
          linkTitle="Web Sitemizden Kuran Son Ahit'i Okuyabilirsiniz"
        />
        <div className="border-l"></div>
        <Card
          imgSrc="sonahit.jpg"
          linkTitle="Son eklenen videolara, makalelere, perspektiflere ve haberlere bakabilirsiniz."
        />
      </div>
    </div>
  );
};

export default HomePage;
