import React, { useEffect, useState } from "react";
import Perspective from "./Perspective";
import { Link } from "react-router-dom";

const FeaturedPerspective = () => {
  const [perspectives, setPerspectives] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchPerspectives = async () => {
      try {
        const response = await fetch(`${API_URL}/api/perspektifler`);
        const data = await response.json();
        setPerspectives(data);
      } catch (error) {
        console.error("Failed to fetch perspectives:", error);
      }
    };

    fetchPerspectives();
  }, [API_URL]);

  return (
    <div className="flex flex-col mt-5 p-3">
      <hr className="mb-5 dark:border-gray-200 border-gray-900" />
      <div className="flex justify-center text-gray-900 dark:text-white">
        <h1 className="text-3xl">Perspektif Yayınları</h1>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
        {perspectives.map((perspective, index) => (
          <div key={index} className="m-4">
            <Perspective
              image={perspective.imgSrc}
              title={perspective.title}
              linkSrc={`/perspektif/${perspective.slug}`}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center text-gray-900 dark:text-white">
        <Link
          to="/perspektifler/listele"
          className="hover:text-emerald-600 border-b border-transparent hover:border-emerald-600 pb-1 transition-colors duration-300 ease-in-out"
        >
          Tüm Perspektifleri Oku
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPerspective;
