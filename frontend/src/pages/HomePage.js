import React from "react";  
import Cards from "../components/Card/Cards";
import FeaturedArticles from "../components/Articles/FeaturedArticles";
import FeaturedPerspective from "../components/Perspectives/FeaturedPerspective";
import FeaturedVideos from "../components/Videos/FeaturedVideos";
import SuggestionsSection from "../components/Suggestions/SuggestionsSection";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import NewsSlider from "../components/NewsSlider/NewsSlider";
import FeaturedSermons from "../components/Sermons/FeaturedSermons";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50 dark:bg-black overflow-hidden">
      <Helmet>
        <title>Teslimiyet Anasayfa</title>
      </Helmet>
      <div className="flex flex-col w-screen bg-gray-50  dark:bg-gray-950 lg:w-[1000px]">
        <NewsSlider />
        <Cards />
        <FeaturedArticles />
        <FeaturedPerspective />
        <FeaturedVideos />
        <SuggestionsSection />
        <FeaturedSermons/>
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
