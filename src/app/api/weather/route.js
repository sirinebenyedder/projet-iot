import { NextResponse } from 'next/server.js';
import clientPromise from '../../../connectionTs/mongodb.ts'; // Adjust the path as necessary

export async function POST(req, res) {
        try {
            const client = await clientPromise;
            console.log("aaa")
            const db = client.db("test");
            const data = await db.collection("weathers").find().sort({ _id: -1 }).limit(1).toArray();

            if (data.length > 0) {
                console.log(data[0])
                return new NextResponse(JSON.stringify(data[0]),{status : 200}); // Send back the latest weather data
            } else {
                return new NextResponse(JSON.stringify({ message: "No data found" }), {status : 404})
                // res.json({ message: "No data found" });
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            // res.json({ message: "Error fetching data" });
            return new NextResponse(JSON.stringify({ message: "Error fetching data" }),{status : 500})
        }
   
}