"use server"
import { connectToDB } from "./connection";
import { Weather } from "./models";

export const addTemperature = async (data) => {
    try {
        connectToDB();
        const weather = new Weather({
            temperature: data.temperature,
            humidite: data.humidite,
        });

        // Enregistrez l'entrée dans la base de données
        await weather.save();


    }catch(err){
        console.log(err);
        throw new Error ("Faailed ");
    }
}