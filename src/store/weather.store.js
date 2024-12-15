
import axios from "axios";
import { create } from "zustand";
// import { connectToDB } from '../app/lib/connection';
// import {Weather} from '../app/lib/models';
// import clientPromise from '../connectionTs/mongodb.ts'

const useWeatherStore = create((set) => ({
    temperature: 35,
    humidite: 60,
    setTemperature: (temperature) => set({ temperature }),
    setHumidite: (humidite) => set({ humidite }),

    getData: async () => {
        try {
            

            const response = await axios.post("api/weather")
            console.log(response.data)


            console.log('Fetched data:', response); // Log fetched data

            // Ensure data is not empty
            if (response) {
                set({ temperature: response.data.temperature, humidite: response.data.humidite });
            } else {
                console.warn("No data found in the weather collection.");
            }
            
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}));

export default useWeatherStore;