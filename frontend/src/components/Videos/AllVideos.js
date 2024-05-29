import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Directory from "../Directory/Directory";

const AllVideos = () => {
    const videos = [
        {
          image: "teslimiyete-karsi-kurancilik.png",
          title: "Video Başlık Video Başlık Video Başlık Video Başlık Video Başlık",
          linkSrc: "/video",
        },
        {
          image: "hqdefault1.jpg",
          title: "Video Başlık 1",
          linkSrc: "/video",
        },
        {
          image: "hqdefault2.jpg",
          title: "Video Başlık 2",
          linkSrc: "/video",
        },
        {
          image: "hqdefault3.jpg",
          title: "Video Başlık 3",
          linkSrc: "/video",
        },
        {
            image: "teslimiyete-karsi-kurancilik.png",
            title: "Video Başlık Video Başlık Video Başlık Video Başlık Video Başlık",
            linkSrc: "/video",
          },
          {
            image: "hqdefault1.jpg",
            title: "Video Başlık 1",
            linkSrc: "/video",
          },
          {
            image: "hqdefault2.jpg",
            title: "Video Başlık 2",
            linkSrc: "/video",
          },
          {
            image: "hqdefault3.jpg",
            title: "Video Başlık Video Başlık Video Başlık Video Başlık Video Başlık",
            linkSrc: "/video",
          },
          {
            image: "teslimiyete-karsi-kurancilik.png",
            title: "Video Başlık",
            linkSrc: "/video",
          },
          {
            image: "hqdefault1.jpg",
            title: "Video Başlık 1",
            linkSrc: "/video",
          },
          {
            image: "hqdefault2.jpg",
            title: "Video Başlık 2",
            linkSrc: "/video",
          },
          {
            image: "hqdefault3.jpg",
            title: "Video Başlık 3",
            linkSrc: "/video",
          },
        
      ];

  return (
    <div className="flex flex-col md:justify-center md:items-center bg-black w-full">
      <div className="flex flex-col md:max-w-[1200px] md:w-full gap-5">
        <Directory />
        <h1 className="text-3xl text-white p-5">Tüm Videolar</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 place-items-center gap-5 py-5">
            {videos.map((video,index)=>(
                <div key={index} className="flex flex-col items-center justify-center  w-full max-w-xs  md:h-[280px] border border-gray-600 p-3 rounded-lg">
                <Link to={video.linkSrc}>
                  <img src={`/${video.image}`} alt={video.title} className="md:w-48 md:h-48" />
                  <div className="flex items-center justify-center">
                    <h2 className="text-white line-clamp-2">
                      {video.title}
                    </h2>
                  </div>
                </Link>
              </div>
            ))}
          
         
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllVideos;
