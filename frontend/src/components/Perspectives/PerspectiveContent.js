import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedArticlesRightPanel from "../RelatedArticles/RelatedArticleRightPanel";
import RelatedVerses from "../RelatedVerses/RelatedVerses";
import RelatedAppendices from "../RelatedAppendices/RelatedAppendices";
import RelatedTags from "../RelatedTags/RelatedTags";
import Directory from "../Directory/Directory";
import Footer from "../Footer/Footer";

function Perspective() {
  const { slug } = useParams(); // Dinamik parametreyi al
  const [perspective, setPerspective] = useState(null);

  useEffect(() => {
    const fetchPerspective = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/perspektif/${slug}`);
        const data = await response.json();
        setPerspective(data);
      } catch (error) {
        console.error("Error fetching perspektif:", error);
      }
    };

    fetchPerspective();
  }, [slug]);

  if (!perspective) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center flex-col bg-black">
      <div id="container" className="flex flex-col md:flex-row gap-3 px-5">
        <div id="left-side" className="flex flex-col md:max-w-[800px]">
          <Directory />
          <div id="img-content">
            <img src={`${perspective.imgSrc}`} alt={perspective.title} />
          </div>
          <div id="content-container" className="flex flex-col gap-5 mt-5">
            <div id="title" className="text-white text-3xl font-bold">
              {perspective.title}
            </div>
            <div id="content-text" className="text-white">
              <div dangerouslySetInnerHTML={{ __html: perspective.text }} />
            </div>
          </div>
          <RelatedVerses verses={perspective.verses || []} />
          <RelatedAppendices appendices={perspective.appendices || []} />
          <RelatedTags tags={perspective.tags || []} /> {/* tags doğru şekilde iletiliyor */}
        </div>
        <div
          id="right-side"
          className="flex flex-col gap-5 md:min-w-[300px] md:max-w-[350px] h-[400px] p-3"
        >
          <RelatedArticlesRightPanel articles={perspective.relatedArticles || []} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Perspective;