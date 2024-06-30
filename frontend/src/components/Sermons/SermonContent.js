import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/* import RelatedArticlesRightPanel from "../RelatedArticles/RelatedArticleRightPanel"; */
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";
import { Spin } from "antd";

function SermonContent() {
  const { slug } = useParams(); // Dinamik parametreyi al
  const [sermon, setSermon] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchSermon = async () => {
      try {
        const response = await fetch(`${API_URL}/api/hutbeler/getir/${slug}`);
        const data = await response.json();
        setSermon(data);
      } catch (error) {
        console.error("Error fetching sermon:", error);
      }
    };

    fetchSermon();
  }, [slug, API_URL]);

  if (!sermon) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin tip="Loading..." size="large" />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center flex-col bg-gray-50 dark:bg-black mt-11">
      <Helmet>
        <title>{sermon.title}</title> {/* Dinamik Title */}
        {/* Dinamik meta keywords */}
        {sermon.tags && (
          <meta name="keywords" content={sermon.tags.join(", ")} />
        )}
      </Helmet>
      <div id="container" className="flex flex-col md:flex-row gap-3 px-5 border md:min-w-[900px]">
        <div id="left-side" className="flex flex-col min-h-[800px] lg:min-w-[1000px]">
          {/* <div id="img-content">
            <img src={`/hutbe-teslimiyet.png`} alt={sermon.title} />
          </div> */}
          <div id="content-container" className="flex flex-col gap-5 mt-5">
            <div
              id="title"
              className="text-gray-900 dark:text-white text-3xl font-bold"
            >
              {sermon.title}
            </div>
            <div id="content-text" className="text-gray-900 dark:text-white">
              <div dangerouslySetInnerHTML={{ __html: sermon.text }} />
            </div>
          </div>
        </div>
        {/* <div
          id="right-side"
          className="flex flex-col gap-5 md:min-w-[300px] md:max-w-[350px] h-[400px] p-3"
        >
          <RelatedArticlesRightPanel articles={sermon.relatedArticles || []} />
        </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default SermonContent;
