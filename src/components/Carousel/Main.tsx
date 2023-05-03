import Image from "next/image";
import React, { useState, useRef } from "react";
import { Block, Flex, IconButton, Message, Spinner } from "vcc-ui";
import useCars from "../../hooks/useCars";
import useFilter from "../../hooks/useFilter";
import { Car } from "../../services/car-service";
import Container from "../Container";
import CarouselCard from "./CarouselCard";
import Filter from "./Filter";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperClass, { Pagination } from "swiper";

import { mainContainer, navContainer } from "./Main.style";
import useMediaQuery from "../../hooks/useMediaQuery";

const Main = () => {
  //getting car list and filtering it
  const { cars, loading, error } = useCars();
  const filterModal = useFilter();
  let filteredCars: Car[] = [...cars];
  if (filterModal.currentFilter) {
    filteredCars = cars.filter(
      (car) => car.bodyType === filterModal.currentFilter
    );
  }

  //swiper
  const default_Slides_Count = 4;
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [prev, setPrev] = useState(true);
  const [next, setNext] = useState(false);

  //show hide slide navigation
  const isMobile = useMediaQuery("(min-width: 420px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const slidesPerView = isDesktop ? 4 : isMobile ? 2.3 : 1.3;
  const showNavigation =
    isDesktop && (swiperRef?.slides?.length || 0) > default_Slides_Count;

  swiperRef?.on("slideChange", (swiper: { activeIndex: number }) => {
    if (swiper.activeIndex === 0) {
      setPrev(true);
    } else if (
      swiper.activeIndex ===
      (filteredCars.length || 0) - default_Slides_Count
    ) {
      setNext(true);
    } else if (prev || next) {
      setPrev(false);
      setNext(false);
    }
  });

  if (error)
    return (
      <Flex extend={{ justifyContent: "center", alignItems: "center" }}>
        <Message type="error">Something went wrong. Please try again</Message>
      </Flex>
    );

  return (
    <Container>
      {loading && <Spinner />}
      {/* filter section */}
      <Filter />
      {/* slider section   */}
      <Block extend={mainContainer}>
        <Swiper
          onSwiper={setSwiperRef}
          spaceBetween={0}
          slidesPerView={slidesPerView}
          modules={[Pagination]}
          navigation={false}
          pagination={!showNavigation}
          scrollbar={{ draggable: true }}
          className="carSwiper"
        >
          {filteredCars.map((res: Car) => (
            <SwiperSlide key={res.id}>
              <CarouselCard key={res.id} car={res} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Block>
      {showNavigation && (
        
        <Block extend={navContainer}>
          <Block extend={{marginRight:'10px'}}>
          <IconButton
            iconName="navigation-chevronback"
            onClick={() => swiperRef?.slidePrev()}
            variant="outline"
            aria-disabled={prev}
            aria-label="Previous Car"
            ></IconButton>
            </Block>
          <IconButton
            iconName="navigation-chevronforward"
            onClick={() => swiperRef?.slideNext()}
            variant="outline"
            aria-disabled={next}
            aria-label="Next Car"
          ></IconButton>
          </Block>
      )}
    </Container>
  );
};

export default Main;
