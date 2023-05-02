import Image from "next/image";
import React from "react";
import { Flex, Spacer, Text, Link } from "vcc-ui";
import { Car } from "../../services/car-service";
import Container from "../Container";
import { carouselCardFooter, linkContainer } from "./CarouselCard.style";

interface CarouselCardProps {
  car: Car;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ car }) => {
  return (
    <Container>
      <Flex
        role="list"
        extend={{
          justifyContent: "center",
        }}
      >
        <header>
                  <Flex>
                  <Text as="h4" variant="hillary" subStyle="standard">
              {car.modelName}
            </Text>
            <Text as="h4" variant="hillary" subStyle="standard">
              {car.modelName}
            </Text>
            <Spacer />
            <Text as="h3" variant="columbus" subStyle="standard" extend={{}}>
              {car.modelType}
            </Text>
          </Flex>
        </header>
        
        <Flex>
          <Link href="">
            <Image
              src={car.imageUrl}
              alt={`Volvo car ${car.bodyType} of model ${car.modelType} which is a ${car.modelType}`}
              objectFit="contain"
              width={300}
              height={250}
            />
          </Link>
        </Flex>
        <Flex extend={linkContainer}>
                <Link href={`/`} arrow="right">
                    Learn
                  </Link>
                  <Spacer size={2} />
                      <Link href={`/`} arrow="right">
                    Shop
                  </Link>
                  </Flex>
          </Flex>
        
    </Container>
  );
};

export default CarouselCard;
