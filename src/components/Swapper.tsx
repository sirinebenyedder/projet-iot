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
import { useEffect } from "react";
import useWeatherStore from "../store/weather.store";

export function Swapper() {
  const {temperature , humidite , getData}= useWeatherStore()
  //getData every 5s

  // useEffect(()=>{
  //   const fetchdata = async()=>{
  //     await getData()
  //   }
  //   fetchdata()
  // },[])
  
  useEffect(() => {
    
    const interval=setInterval(async () => {
      await getData();
      console.log("interval")
    },5000)
    return () => clearInterval(interval);

  },[])

  
  

  


  const cards = [
    {
      title: "Temperature IN",
      icon: <Icons.temperature />,
      value: temperature,
      unit: "°F",
      texts: ["", "Indoor Temperature", ""],
    },
    {
      title: "Humidity IN",
      icon: <Icons.droplet />,
      value: humidite,
      unit: "%",
      texts: ["", "Indoor Humidity", ""],
    },
    {
      title: "Temperature OUT",
      icon: <Icons.temperature />,
      value: temperature,
      unit: "°F",
      texts: ["", "Outdoor Temperature", ""],
    },
    {
      title: "Humidity OUT",
      icon: <Icons.droplet />,
      value: humidite,
      unit: "%",
      texts: ["", "Outdoor Humidity", ""],
    },
  ];

  return (
    <div className="flex m-4 gap-3 min-h-80">
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
          <SwiperSlide key={index} className="p-3 ">
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
