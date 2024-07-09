import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import RelatedArticlesRightPanel from "../RelatedArticles/RelatedArticleRightPanel";
import RelatedVerses from "../RelatedVerses/RelatedVerses";
import RelatedAppendices from "../RelatedAppendices/RelatedAppendices";
import RelatedTags from "../RelatedTags/RelatedTags";
import Directory from "../Directory/Directory";
import Footer from "../Footer/Footer";
import { Spin } from "antd";

function Perspective() {
  const { slug } = useParams(); // Dinamik parametreyi al
  const [perspectives, setPerspectives] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL;
  const uploadSrc = process.env.REACT_APP_UPLOAD_SRC;

  useEffect(() => {
    const fetchPerspective = async () => {
      try {
        const response = await fetch(`${API_URL}/api/makale/${slug}`);
        const data = await response.json();
        if (data && data.text) {
          const updatedText = data.text.replace(
            /<img [^>]*src="([^"]*)"/g,
            (match, p1) => {
              console.log('Original match:', match); // Tüm img tag'ini gösterir
              console.log('Original src:', p1); // src içindeki URL'yi gösterir
              return `<img src="${uploadSrc}${p1.startsWith('/') ? p1.slice(1) : p1}"`;
            }
          );
          data.text = updatedText;
        }
        setPerspectives(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchPerspective();
  }, [slug,API_URL, uploadSrc]);

  if (!perspectives) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin tip="Loading..." size="large" />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center flex-col bg-gray-50 dark:bg-black mt-16">
      <Helmet>
        <title>{perspectives.title}</title>
         {/* Dinamik meta keywords */}
         {perspectives.tags && (
          <meta name="keywords" content={perspectives.tags.join(", ")} />
        )}
      </Helmet>
      <div id="container" className="flex flex-col md:flex-row gap-3 px-5">
        <div id="left-side" className="flex flex-col md:max-w-[800px]">
        <Directory postTitle={perspectives.title} postType={perspectives.postType} />
          <div id="img-content">
          <img src={`${uploadSrc}${perspectives.imgSrc}`} alt={perspectives.title} />
          </div>
          <div id="content-container" className="flex flex-col gap-5 mt-5">
            <div
              id="title"
              className="text-gray-900 dark:text-white text-3xl font-bold"
            >
              {perspectives.title}
            </div>
            <div id="content-text" className="text-gray-900 dark:text-white">
              <div dangerouslySetInnerHTML={{ __html: perspectives.text }} />
            </div>
          </div>
          <RelatedVerses verses={perspectives.verses || []} />
          <RelatedAppendices appendices={perspectives.appendices || []} />
          <RelatedTags tags={perspectives.tags || []} />{" "}
          {/* tags doğru şekilde iletiliyor */}
        </div>
        <div
          id="right-side"
          className="flex flex-col gap-5 md:min-w-[300px] md:max-w-[350px] h-[400px] p-3"
        >
          <RelatedArticlesRightPanel
            articles={perspectives.relatedArticles || []}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Perspective;
