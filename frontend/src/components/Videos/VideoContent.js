import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import sanitizeHtml from "sanitize-html";
import RelatedArticlesRightPanel from "../RelatedArticles/RelatedArticleRightPanel";
import RelatedVerses from "../RelatedVerses/RelatedVerses";
import RelatedAppendices from "../RelatedAppendices/RelatedAppendices";
import RelatedTags from "../RelatedTags/RelatedTags";
import Directory from "../Directory/Directory";
import Footer from "../Footer/Footer";
import { Spin } from "antd";

const VideoContent = () => {
  const { slug } = useParams(); // Dinamik olan linkten parametreyi alır.
  const [video, setVideo] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(`${API_URL}/api/video/${slug}`);
        const data = await response.json();
        setVideo(data);
      } catch (error) {
        console.log("Error fetching video", error);
      }
    };
    fetchVideo();
  }, [slug,API_URL]);

  const convertOembedToIframe = (htmlContent) => {
    const div = document.createElement("div");
    div.innerHTML = htmlContent;
    const oembedElements = div.querySelectorAll("oembed[url]");
    oembedElements.forEach((el) => {
      const url = el.getAttribute("url");
      const iframe = document.createElement("iframe");
      iframe.setAttribute("width", "560");
      iframe.setAttribute("height", "315");
      iframe.setAttribute("src", getEmbedUrl(url));
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      );
      iframe.setAttribute("allowfullscreen", "true");
      el.parentNode.replaceChild(iframe, el);
    });
    return div.innerHTML;
  };

  const getEmbedUrl = (url) => {
    const youtubeId = url.split("v=")[1] || url.split("youtu.be/")[1];
    return youtubeId
      ? `https://www.youtube.com/embed/${youtubeId.split("?")[0]}`
      : url;
  };

  if (!video) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin tip="Loading..." size="large" />
      </div>
    );
  }

  const sanitizedContent = sanitizeHtml(convertOembedToIframe(video.text), {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["iframe"]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      iframe: [
        "src",
        "width",
        "height",
        "frameborder",
        "allow",
        "allowfullscreen",
      ],
    },
  });

  return (
    <div className="flex justify-center items-center flex-col bg-gray-50 dark:bg-black">
      <Helmet>
        <title>{video.title}</title>
         {/* Dinamik meta keywords */}
         {video.tags && (
          <meta name="keywords" content={video.tags.join(", ")} />
        )}
      </Helmet>
      <div id="container" className="flex flex-col md:flex-row gap-3 px-5">
        <div id="left-side" className="flex flex-col md:max-w-[800px]">
        <Directory postTitle={video.title} postType={video.postType} />
          {/*  <div id="img-content">
                        <img src={`${video.imgSrc}`} alt={video.title} />
                    </div> */}
          <div id="content-container" className="flex flex-col gap-5 mt-5">
            <div
              id="title"
              className="text-gray-900 dark:text-white text-3xl font-bold"
            >
              {video.title}
            </div>
            <div id="content-text" className="text-gray-900 dark:text-white">
              <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
            </div>
          </div>
          {video.videoUrl && (
            <div id="video-content" className="my-5">
              <iframe
                width="560"
                height="315"
                src={getEmbedUrl(video.videoUrl)}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.title}
              ></iframe>
            </div>
          )}
          <RelatedVerses verses={video.verses || []} />
          <RelatedAppendices appendices={video.appendices || []} />
          <RelatedTags tags={video.tags || []} />{" "}
          {/* Tags doğru şekilde iletiliyor */}
        </div>
        <div
          id="right-side"
          className="flex flex-col gap-5 md:min-w-[300px] md:max-w-[350px] h-[400px] p-3"
        >
          <RelatedArticlesRightPanel articles={video.relatedArticles || []} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VideoContent;
