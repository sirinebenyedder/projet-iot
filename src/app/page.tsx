import { Swapper } from "@/components/Swapper";
import { Welcome } from "@/components/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-tr from-[#0e2677] via-[#2b4792] to-[#3763da] h-[700px] md:h-auto">
    {/* Full-screen background gradient */}
    <div className="w-full h-full flex flex-col justify-between">
      <Welcome />
      <Swapper />
    </div>
  </div>)
};
