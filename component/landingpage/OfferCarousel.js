import React from "react";
import Carousel from "react-material-ui-carousel";
import { carouselData } from "../../data/carouselData";
import CarouselItem from "./CarouselItem";

function OfferCarousel() {
  return (
    <div>
        <Carousel
          className="my-carousel"
          interval={4000}
          animation="slide"
          indicators={false}
         
        >
          {carouselData?.map((item, index) => (
            <CarouselItem offerData={item} key={index} />
          ))}
        </Carousel>
    </div>
  );
}

export default OfferCarousel;

