import React from "react";
import Billboard from "../components/Billboard/Billbord";
import Cards from "../components/Card/Cards";
import FeaturedArticles from "../components/Articles/FeaturedArticles";
import FeaturedPerspective from "../components/Perspectives/FeaturedPerspective";
import FeaturedVideos from "../components/Videos/FeaturedVideos";
import SuggestionsSection from "../components/Suggestions/SuggestionsSection";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";


const HomePage = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50 dark:bg-black overflow-hidden">
      <div className="flex flex-col w-screen bg-gray-50  dark:bg-gray-950 lg:w-[1000px]">
        <Billboard />
        <Cards/>
        <FeaturedArticles/>
        <FeaturedPerspective/>
        <FeaturedVideos/>
        <SuggestionsSection/>
        <About/>
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;
