// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Autoplay, /* Navigation */ } from "swiper/modules";
//Navigation kısımlarını silersen oklar gider.
const NewsSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, /* Navigation */]}
        className="w-full h-96 md:h-80 sm:h-60 mySwiper"
        //disableOnInteraction: true yaparsan manuel müdahale edildiğinde otomatik hareketi durdurur.
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        /* navigation */
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src="https://picsum.photos/id/237/1000/400" alt="" className="w-full h-full object-cover" />
            <div className="absolute bottom-5 left-5 bg-black bg-opacity-70 text-white p-2 rounded-md text-lg md:text-base sm:text-sm">Haber Başlığı 1</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src="https://picsum.photos/id/238/1000/400" alt="" className="w-full h-full object-cover" />
            <div className="absolute bottom-5 left-5 bg-black bg-opacity-70 text-white p-2 rounded-md text-lg md:text-base sm:text-sm">Haber Başlığı 2</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src="https://picsum.photos/id/236/1000/400" alt="" className="w-full h-full object-cover" />
            <div className="absolute bottom-5 left-5 bg-black bg-opacity-70 text-white p-2 rounded-md text-lg md:text-base sm:text-sm">Haber Başlığı 3</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src="https://picsum.photos/id/235/1000/400" alt="" className="w-full h-full object-cover" />
            <div className="absolute bottom-5 left-5 bg-black bg-opacity-70 text-white p-2 rounded-md text-lg md:text-base sm:text-sm">Haber Başlığı 4</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src="https://picsum.photos/id/234/1000/400" alt="" className="w-full h-full object-cover" />
            <div className="absolute bottom-5 left-5 bg-black bg-opacity-70 text-white p-2 rounded-md text-lg md:text-base sm:text-sm">Haber Başlığı 5</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src="https://picsum.photos/id/233/1000/400" alt="" className="w-full h-full object-cover" />
            <div className="absolute bottom-5 left-5 bg-black bg-opacity-70 text-white p-2 rounded-md text-lg md:text-base sm:text-sm">Haber Başlığı 6</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default NewsSlider;
