import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { EffectCoverflow, Pagination } from "swiper";

interface ProjectSliderProps {
  sliders?: string[];
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ sliders }) => {

  // const breakpoints = {
  //   640: {
  //     slidesPerView: "2",
  //   }
  // }

  return (
    <>
      <Swiper
        effect={"coverflow"}
        // spaceBetween={30}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        // breakpoints={breakpoints as any}
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
        {sliders?.map((slider, index) => (
          <SwiperSlide key={index} style={{ width: "70%", borderRadius: "2px", overflow: "hidden" }}>
            <Image
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              src={slider}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProjectSlider;
