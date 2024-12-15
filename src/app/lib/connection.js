// import mongoose from "mongoose";

// export const connectToDB = async () => {
//     const connection = {}
//     try {
//         if (connection.isConnected) return ;
//         const db = await mongoose.connect(process.env.MONGO);
//         console.log("bd connecte");
//         connection.isConnected = db.connections[0].readyState;}
//         catch (error) {
//             console.log(error)
//             throw new Error(error);
//         }
//     };


    import mongoose from 'mongoose';

    let isConnected = false; // Track connection status
    
    export const connectToDB = async () => {
        if (isConnected) {
            console.log("Already connected to the database.");
            return;
        }
    
        try {
            await mongoose.connect(process.env.MONGO);
            isConnected = true; // Update connection status
            console.log("Database connected");
        } catch (error) {
            console.error("Database connection error:", error);
            throw new Error("Could not connect to the database");
        }
    };