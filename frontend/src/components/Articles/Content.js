import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedArticlesRightPanel from "../RelatedArticles/RelatedArticleRightPanel";
import RelatedVerses from "../RelatedVerses/RelatedVerses";
import RelatedAppendices from "../RelatedAppendices/RelatedAppendices";
import RelatedTags from "../RelatedTags/RelatedTags";
import Directory from "../Directory/Directory";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";
import { Spin } from "antd";

function Content() {
  const { slug } = useParams(); // Dinamik parametreyi al
  const [article, setArticle] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL;
  const uploadSrc = process.env.REACT_APP_UPLOAD_SRC;

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`${API_URL}/api/makale/${slug}`);
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [slug, API_URL]);

  if (!article) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin tip="Loading..." size="large" />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center flex-col bg-gray-50 dark:bg-black mt-16">
      <Helmet>
        <title>{article.title}</title> {/* Dinamik Title */}
        {/* Dinamik meta keywords */}
        {article.tags && (
          <meta name="keywords" content={article.tags.join(", ")} />
        )}
      </Helmet>
      <div id="container" className="flex flex-col md:flex-row gap-3 px-5">
        <div id="left-side" className="flex flex-col md:max-w-[800px]">
          <Directory postTitle={article.title} postType={article.postType} />
          <div id="img-content">
            <img src={`${uploadSrc}${article.imgSrc}`} alt={article.title} />
          </div>
          <div id="content-container" className="flex flex-col gap-5 mt-5">
            <div
              id="title"
              className="text-gray-900 dark:text-white text-3xl font-bold"
            >
              {article.title}
            </div>
            <div id="content-text" className="text-gray-900 dark:text-white">
              <div dangerouslySetInnerHTML={{ __html: article.text }} />
            </div>
          </div>
          <RelatedVerses verses={article.verses || []} />
          <RelatedAppendices appendices={article.appendices || []} />
          <RelatedTags tags={article.tags || []} />{" "}
          {/* tags doğru şekilde iletiliyor */}
        </div>
        <div
          id="right-side"
          className="flex flex-col gap-5 md:min-w-[300px] md:max-w-[350px] h-[400px] p-3"
        >
          <RelatedArticlesRightPanel articles={article.relatedArticles || []} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Content;
