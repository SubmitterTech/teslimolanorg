import React from "react";
import Billboard from "../components/Billboard/Billbord";
import Cards from "../components/Card/Cards";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center bg-black overflow-hidden">
      <div className="flex flex-col w-screen bg-gray-950 lg:w-[1000px] ">
        <Billboard />
        <Cards/>
      </div>
    </div>
  );
};

export default HomePage;
