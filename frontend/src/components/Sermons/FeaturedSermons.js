import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SermonCard from "./SermonCard";

const FeaturedSermons = () => {
  const [sermons, setSermons] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchSermons = async () => {
      try {
        const response = await fetch(`${API_URL}/api/hutbeler/getir/vitrin`);
        const data = await response.json();
        setSermons(data);
      } catch (error) {
        console.error("Failed to fetch sermons:", error);
      }
    };

    fetchSermons();
  }, [API_URL]);

  return (
    <div className="flex flex-col p-3">
      <hr className="mb-5 dark:border-gray-200 border-gray-900" />
      <div className="flex justify-center text-gray-900 dark:text-white">
        <h1 className="text-3xl">Cuma Hutbeleri</h1>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
        {sermons.map((sermon, index) => (
          <div key={index} className="m-4">
            <SermonCard
              image={"/hutbe-teslimiyet.png"}
              title={sermon.title}
              linkSrc={`/hutbe/${sermon.slug}`}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center text-gray-900 dark:text-white">
        <Link
          to="/hutbeler"
          className="hover:text-emerald-600 border-b border-transparent hover:border-emerald-600 pb-1 transition-colors duration-300 ease-in-out"
        >
          Tüm Hutbeler
        </Link>
      </div>
    </div>
  );
};

export default FeaturedSermons;
