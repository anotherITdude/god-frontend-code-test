import Image from "next/image";
import React from "react";
import { Flex, Spacer, Text, Link, Block } from "vcc-ui";
import { Car } from "../../services/car-service";
import Container from "../Container";
import {
  imageContainer,
  cardContainer,
  cardHeading,
  cardSubHeading,
  cardFooter,
  cardBodyType,
  cardModelType,
} from "./CarouselCard.style";

interface CarouselCardProps {
  car: Car;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ car }) => {
  const { id, imageUrl, modelName, modelType, bodyType } = car;
  return (
    <Container>
      <Flex aria-label={bodyType} role="list" extend={cardContainer}>
        <Text subStyle="emphasis" extend={cardHeading}>
          {bodyType}
        </Text>
        <Flex extend={cardSubHeading}>
          <Text variant="hillary" subStyle="emphasis" extend={{ cardBodyType }}>
            {modelName}
          </Text>
          <Text
            as="h3"
            variant="columbus"
            subStyle="inline-link"
            extend={cardModelType}
          >
            {modelType}
          </Text>
        </Flex>

        <Flex extend={imageContainer}>
          <Image
            priority
            className="carImage"
            src={imageUrl}
            alt={`${modelType}`}
            objectFit="cover"
            width={250}
            height={220}
          />
        </Flex>
        <Flex extend={{ ...cardFooter, font: "icon" }}>
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
