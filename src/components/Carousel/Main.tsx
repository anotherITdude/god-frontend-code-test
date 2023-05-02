import Image from "next/image";
import React from "react";
import { Flex, Spacer, Text } from "vcc-ui";
import useCars from "../../hooks/useCars";
import useFilter from "../../hooks/useFilter";
import { Car } from "../../services/car-service";
import Container from "../Container";
import CarouselCard from "./CarouselCard";
import Filter from "./Filter";

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

      <Flex
        role="tablist"
        extend={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        {filteredCars.map((res: Car) => (
          <CarouselCard key={res.id} car={res} />
        ))}
      </Flex>
    </Container>
  );
};

export default Main;
