import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedArticlesRightPanel from "../RelatedArticles/RelatedArticleRightPanel";
import RelatedVerses from "../RelatedVerses/RelatedVerses";
import RelatedAppendices from "../RelatedAppendices/RelatedAppendices";
import RelatedTags from "../RelatedTags/RelatedTags";
import Directory from "../Directory/Directory";
import Footer from "../Footer/Footer";
const VideoContent = () => {
    const {slug} = useParams(); //dinamik olan linkten parametreyi alır.
    const [videos,setVideos] = useState([]);

    useEffect(()=>{
      const fethVideos = async () => {
        try {
          const response = await fetch(`http://localhost:5001/api/video/${slug}`)
          const data = await response.json();
          setVideos(data);
        } catch (error) {
          console.log("Error fetching videos",error);
        }
      }
      fethVideos();
    },[slug]);

    if (!videos) {
      return <div>Loading...</div>;
    }
    return (
      <div className="flex justify-center items-center flex-col bg-black">
        <div id="container" className="flex flex-col md:flex-row gap-3 px-5">
          <div id="left-side" className="flex flex-col md:max-w-[800px]">
            <Directory />
            <div id="img-content">
              <img src={`${videos.imgSrc}`} alt={videos.title} />
            </div>
            <div id="content-container" className="flex flex-col gap-5 mt-5">
              <div id="title" className="text-white text-3xl font-bold">
                {videos.title}
              </div>
              <div id="content-text" className="text-white">
                <div dangerouslySetInnerHTML={{ __html: videos.text }} />
              </div>
            </div>
            <RelatedVerses verses={videos.verses || []} />
            <RelatedAppendices appendices={videos.appendices || []} />
            <RelatedTags tags={videos.tags || []} /> {/* tags doğru şekilde iletiliyor */}
          </div>
          <div
            id="right-side"
            className="flex flex-col gap-5 md:min-w-[300px] md:max-w-[350px] h-[400px] p-3"
          >
            <RelatedArticlesRightPanel articles={videos.relatedArticles || []} />
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default VideoContent;
