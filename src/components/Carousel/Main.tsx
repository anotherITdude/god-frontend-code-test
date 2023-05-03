import Image from "next/image";
import React from "react";
import { Flex } from "vcc-ui";
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
import { Navigation, Pagination } from "swiper";
import { mainContainer } from "./Main.style";
const Main = () => {
  const { cars, loading } = useCars();
  const filterModal = useFilter();
  let filteredCars: Car[] = [...cars];
  if (filterModal.currentFilter) {
    filteredCars = cars.filter(
      (car) => car.bodyType === filterModal.currentFilter
    );
  }

  return (
    <Container>
      {/* filter section */}
      <Filter />
      {/* slider section   */}
      <Flex extend={mainContainer}>
        <Swiper
          spaceBetween={0}
          slidesPerView={filteredCars.length >= 4 ? 4 : 2}
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            395: {
              slidesPerView: filteredCars.length >= 2 ? 2.3 : 2.3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3.3,
              spaceBetween: 0,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          className="carSwiper"
        >
          {filteredCars.map((res: Car) => (
            <SwiperSlide key={res.id}>
              <CarouselCard key={res.id} car={res} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Container>
  );
};

export default Main;
