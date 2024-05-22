import React from "react";
import Billboard from "../components/Billboard/Billbord";
import Cards from "../components/Card/Cards";
import FeaturedArticles from "../components/Articles/FeaturedArticles";
import FeaturedPerspective from "../components/Perspectives/FeaturedPerspective";
import FeaturedVideos from "../components/Videos/FeaturedVideos";


const HomePage = () => {
  return (
    <div className="flex justify-center items-center bg-black overflow-hidden">
      <div className="flex flex-col w-screen bg-gray-950 lg:w-[1000px] ">
        <Billboard />
        <Cards/>
        <FeaturedArticles/>
        <FeaturedPerspective/>
        <FeaturedVideos/>
      </div>
    </div>
  );
};

export default HomePage;
