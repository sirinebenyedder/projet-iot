import mongoose from "mongoose";

const weatherSchema = new mongoose.Schema(
  {
    temperature: {
      type: Number,
      required: true,
    },
    humidite: {
        type: Number,
        required: true,
      },
},

{ timestamps: true }
);
export const Weather = mongoose.models.Weather || mongoose.model("Weather", weatherSchema);