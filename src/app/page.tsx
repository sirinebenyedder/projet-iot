import { Swapper } from "@/components/Swapper";
import { Welcome } from "@/components/Welcome";

export default function Home() {
  //bg-gradient-to-tr from-[#0e2677] via-[#2b4792] to-[#3763da]
  return (
    <div className=" w-screen h-screen ">
    {/* Full-screen background gradient */}
    <div className="w-full h-full flex flex-col justify-between ">
      <div className="flex justify-center items-center mt-24">
        <Welcome />
      </div>
      <Swapper />
    </div>
  </div>)
};
