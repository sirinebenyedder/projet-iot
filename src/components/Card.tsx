import { ReactNode } from "react";

interface CardProps {
  title: string;
  icon: ReactNode;
  value: number;
  unit: string;
  texts: string[];
}

export function Card({ title, icon, value, unit, texts }: CardProps) {
  //bg-gradient-to-tl from-[#1a264d] from-1% to-70% via-[#2b4792] to-[#3056bd]
  return (
    <div className="flex w-full shadow-2xl  rounded-[20px] hover:scale-105 transition-all delay-300">
      <div className="flex flex-col w-full rounded-full p-3   min-h-52 transform transition-transform ">
        <div className="flex justify-between h-1/4 ">
          <h3 className="text-xl roboto">{title}</h3>
          <div className="w-[30px] h-[30px] rounded-full  p-1">
            {icon}
          </div>
        </div>
        <div className="flex h-full justify-center items-center">
          <div className="flex items-start">
            <h1 className="text-6xl">{value}</h1>
            <p className="ordinal">{unit}</p>
          </div>
        </div>
        <div className="flex flex-col h-1/4">
          <div className="w-full h-[2px] "></div>
          <div className="flex justify-between items-center mt-2">
            {texts.map((text, index) => (
              <p key={index} className="text-[#5a678c]">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}