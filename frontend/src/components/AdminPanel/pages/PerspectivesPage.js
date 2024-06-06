import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReadMore from "../../ReadMore/ReadMore";

const PerspectivesPage = () => {
  const [perspectives, setPerspectives] = useState([]);

  useEffect(() => {
    const fetchPerspectives = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/admin/yazilar/Perspektif');
        const data = await response.json();
        setPerspectives(data);
      } catch (error) {
        console.error('Error fetching perspectives:', error);
      }
    };

    fetchPerspectives();
  }, []);

  return (
    <div className="flex flex-col md:justify-center md:items-center dark:bg-black w-full">
      <div className="flex flex-col md:max-w-[1200px] md:w-full gap-5">
        <h1 className="text-3xl text-gray-900 dark:text-white p-5">Tüm Perspektifler</h1>
        {perspectives.map((perspective, index) => (
          <div key={index} className="flex flex-col gap-10 border-t p-5">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="md:max-w-[300px]">
                <Link to={`/perspektif/${perspective._id}`}>
                  <img src={perspective.imgSrc || '/default-image.png'} alt={perspective.title} />
                </Link>
              </div>
              <div>
                <h1 className="text-gray-900 dark:text-white font-semibold text-xl">
                  <Link to={`/perspektif/${perspective._id}`}>{perspective.title}</Link>
                </h1>
                <div className="text-gray-900 dark:text-white mt-5">
                  <ReadMore
                    text={perspective.text || ''}
                    limit={250}
                    to={`/perspektif/${perspective._id}`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerspectivesPage;