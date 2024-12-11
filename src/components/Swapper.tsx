"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "./Card";
import { Icons } from "./icons";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Swapper() {
  // Example static data for the cards
  const cards = [
    {
      title: "Temperature IN",
      icon: <Icons.temperature />,
      value: 22,
      unit: "°F",
      texts: ["", "Indoor Temperature", ""],
    },
    {
      title: "Humidity IN",
      icon: <Icons.droplet />,
      value: 45,
      unit: "%",
      texts: ["", "Indoor Humidity", ""],
    },
    {
      title: "Temperature OUT",
      icon: <Icons.temperature />,
      value: 18,
      unit: "°F",
      texts: ["", "Outdoor Temperature", ""],
    },
    {
      title: "Humidity OUT",
      icon: <Icons.droplet />,
      value: 50,
      unit: "%",
      texts: ["", "Outdoor Humidity", ""],
    },
  ];

  return (
    <div className="flex m-4 gap-3 min-h-60">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1} // Single card visible at a time
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: {
            slidesPerView: 2, // Two cards visible on wider screens
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // Three cards visible on large screens
            spaceBetween: 30,
          },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card
              title={card.title}
              icon={card.icon}
              value={card.value}
              unit={card.unit}
              texts={card.texts}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
