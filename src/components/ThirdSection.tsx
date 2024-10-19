import Image from "next/image";

const ThirdSection = () => {
  return (
    <div className="w-[90%] h-screen flex ml-auto justify-between items-center">
      <div className="flex h-[90%] gap-7 w-1/2 self-center">
        <div className="self-center flex flex-col gap-7">
          <h1 className="font-normal text-[64px] leading-[63px] uppercase text-white">
            <span className="text-myGreen">Organize</span> Tournaments
          </h1>
          <h1 className="font-normal text-[64px] leading-[63px] uppercase text-white">
            
          </h1>
          <span className="text-xl font-port text-white font-normal">
            Create a oragniser profile to arrange events for other players and
            many more Organize your circuit with seasons, regions and tiers
          </span>
        </div>
        <button className="bg-myRed self-end mb-[10%] rounded-[8px] text-white text-2xl min-w-[205px] h-[68px]">
          CREATE NOW
        </button>
      </div>
      <div className="relative w-1/2 h-[557px]">
        <Image src={"/thirdimg.png"} className="" fill alt="absolute" />
      </div>
    </div>
  );
};

export default ThirdSection;
