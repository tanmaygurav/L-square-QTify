import { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import styles from "./Section.module.css";
import Filters from "../Filters/Filters";
import MediaCard from "../Card/MediaCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function Section({ title, data, filterSource, type }) {
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle((prev) => !prev);
  };

  useEffect(() => {
    if (filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        setFilters([...filters, ...data]);
      });
    }
  }, []);

  const showFilters = filters.length > 1;
  // const showFilters = true;
  // console.log(
  //   "showFilters",
  //   showFilters,
  //   "selectedFilterIndex",
  //   selectedFilterIndex,
  //   "type",
  //   type,
  // );

  const cardsToRender = data.filter((card) =>
    showFilters && selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : card,
  );

  // console.log("cardsToRender", cardsToRender);

  console.log("Section data", title, data);

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!carouselToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>

      {showFilters && (
        <div className={styles.filterWrapper}>
          <Filters
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}

      {data.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
          }}
        >
          <CircularProgress color="success" />
        </Box>
      ) : (
        <>
          <div className={styles.cardsDisplayWrapper}>
            {!carouselToggle ? (
              <div className={styles.gridWrapper}>
                {cardsToRender.map((item) => (
                  <MediaCard key={item.id} data={item} type={type} />
                ))}
              </div>
            ) : (
              <div className={styles.swiperContainer}>
                <Swiper
                  modules={[Navigation]}
                  initialSlide={0}
                  slidesPerView={"auto"}
                  spaceBetween={40}
                  allowTouchMove
                  navigation
                >
                  {cardsToRender.map((item) => (
                    <SwiperSlide key={item.id} className={styles.swiperSlide}>
                      <MediaCard data={item} type={type} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
          {/* <div className={styles.cardsWrapper}>
            {!carouselToggle ? (
              <div className={styles.wrapper}>
                {cardsToRender?.map((ele) => {
                  <MediaCard key={ele.id} data={ele[0]} type={type} />;
                })}
              </div>
            ) : (
              <>
                <Carousel
                  data={cardsToRender}
                  renderComponent={(data) => (
                    <MediaCard data={data} type={type} />
                  )}
                />
              </>
            )}
          </div> */}
        </>
      )}
    </div>
  );
}

export default Section;
