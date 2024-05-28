import Directory from "..//Directory/Directory";
import RelatedVerses from "../RelatedVerses/RelatedVerses"
import RelatedAppendices from "../RelatedAppendices/RelatedAppendices";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import RelatedTags from "../RelatedTags/RelatedTags";
const VideoContent = () => {
    const videoId="6l5oScSQbUQ?si=J8NVHhq6eZTKZRol";
    const verses = [
        "Anahtar (El-Fatiha) [1:1] ;En Lütufkâr, En Merhametli olan Tanrı’nın adıyla..",
        "Anahtar (El-Fatiha) [1:1] ;En Lütufkâr, En Merhametli olan Tanrı’nın adıyla..",
        "Anahtar (El-Fatiha) [1:1] ;En Lütufkâr, En Merhametli olan Tanrı’nın adıyla..",
        "Anahtar (El-Fatiha) [1:1] ;En Lütufkâr, En Merhametli olan Tanrı’nın adıyla..",
      ];
      const appendices = [
        {
          link: "",
          title: "Ek 15 - Dini Görevler: Tanrı’dan Bir Armağan",
        },
        {
          link: "",
          title: "Ek 16 - Dini Görevler: Tanrı’dan Bir Armağan",
        },
      ];
      const videos = [
        {
          link: "/",
          imgSrc: "hqdefault1.jpg",
          title: "Kadim Mesaj Yeni Elçi (Reşad Halife)",
        },
        {
          link: "/",
          imgSrc: "hqdefault2.jpg",
          title: "Reşad Halife ile Dünya Haber Bülteni",
        },
        {
          link: "/",
          imgSrc: "hqdefault3.jpg",
          title: "Büyük Tartışma",
        },
      ];
      const tags = [
        {
          link: "",
          name: "reşathalife",
        },
        {
          link: "",
          name: "ondokuzmucizesi",
        },
        
      ];
  return (
    <div className="w-full bg-black">
      <div className="md:max-w-[1200px] bg-gray-700 m-auto">
        <Directory />
        <div className="md:py-5 px-10">
          <div id="title">
            <h1 className="text-white md:text-3xl">
              Her Şeyi Tanrı Yapıyor (Reşad Halife)
            </h1>
          </div>
          <div id="video-section" className="mt-5">
            <div className="w-full flex justify-center items-center bg-gray-800 p-4">
              <div
                className="relative pb-9/16 h-0 w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video player"
                ></iframe>
              </div>
            </div>
          </div>
          <div id="video-content" className="m-5">
                <p className="text-white">"Her Şeyi Tanrı Yapıyor" Konulu Cuma Hutbesi</p>
          </div>
        </div>
        <RelatedVerses verses={verses}/>
        <RelatedAppendices appendices={appendices}/>
        <RelatedVideos videos={videos}/>
        <RelatedTags tags={tags}/>
      </div>
    </div>
  );
};

export default VideoContent;
