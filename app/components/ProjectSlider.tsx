import Image from "next/image";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { EffectCoverflow, Pagination } from "swiper";

const ProjectSlider = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        // spaceBetween={30}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        // navigation={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{width: "70%"}}>
          <Image
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/sample_slider.png"
          />
        </SwiperSlide>
        <SwiperSlide style={{width: "70%"}}>
          <Image
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/sample_slider.png"
          />
        </SwiperSlide>
        <SwiperSlide style={{width: "70%"}}>
          <Image
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/sample_slider.png"
          />
        </SwiperSlide>
        <SwiperSlide style={{width: "70%"}}>
          <Image
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/sample_slider.png"
          />
        </SwiperSlide>
        <SwiperSlide style={{width: "70%"}}>
          <Image
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/sample_slider.png"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProjectSlider;
