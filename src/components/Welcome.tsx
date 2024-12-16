"use client"
import useWeatherStore from "@/store/weather.store";
import { BigSun, BigSunCloud, CloudSun, IceIcon } from "@/weather_icons/Icons";

export function Welcome() {
    const {temperature} = useWeatherStore()
    return (
            <div className="flex m-4 gap-3 w-[500px]  justify-center items-center ">
                {temperature > 40 && <BigSun/> }
                {temperature < 40 && temperature > 20 && <BigSunCloud/>  }
                {temperature >5 && temperature<20 && <CloudSun/> }
                {temperature < 5 && <IceIcon/> }
            </div>
    )
};