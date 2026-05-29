import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useSwiper } from "swiper/react";
import styles from "./Carousel.module.css";
import "swiper/css";
import MediaCard from "../Card/MediaCard";

// import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
// import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);

  return <></>;
};

function Carousel({ data, renderComponent }) {
  // console.log("Carousel data", data);
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={7}
        spaceBetween={40}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        allowTouchMove
      >
        {/* <Controls data={data} />
        <div>
          <p> {"<"} </p>
          <p>{">"}</p>
          <CarouselLeftNavigation/>
                  <CarouselRightNavigation/>
        </div> */}
        {/* <SwiperSlide>
          <MediaCard data={data[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <MediaCard data={data[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <MediaCard data={data[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <MediaCard data={data[3]} />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide> */}
        {data?.map((ele) => {
          <SwiperSlide key={ele.id}>
            {/* {ele.title} */}
            <MediaCard data={ele} />
          </SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
}

export default Carousel;
