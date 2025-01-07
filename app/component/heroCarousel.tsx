"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import concert from "../../public/img/concert.jpeg";
import footbal from "../../public/img/football2.jpg";
import workshop from "../../public/img/event.webp";
import weekend from "../../public/img/carfreeday.jpg";

const HeroCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

  const cardData = [
    {
      img: concert,
    },
    {
      img: footbal,
    },
    {
      img: workshop,
    },
    {
      img: weekend,
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {cardData.map((value, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Image
                src={value.img}
                alt="img"
                className="aspect-[12/6] w-full object-cover lg:aspect-[16/4]"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HeroCarousel;
