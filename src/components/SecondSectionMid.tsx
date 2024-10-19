import Image from "next/image";

const SecondSectionMid = () => {
  return (
    <div className="w-[90%] h-[600px] flex ml-auto justify-between">
      <div className="flex flex-col gap-7 w-1/2 self-center">
        <h1 className="font-normal text-[64px] leading-[63px] uppercase text-white">
          About<span className="text-myGreen"> Us </span>
        </h1>
        <span className="text-xl font-port text-white font-normal">
          Here, in 3not3 we are as pleased as punch for a new era gaming under
          automation mechanics that help both the upright of e-sport
          infrastructure for players and organizer. Introducing striation for
          player monitor and asset service throw which team or service provider
          can easily communicate and arrange new feature and service by
          exploring web-technology of 3not3.
        </span>
        <button className="bg-myRed self-end rounded-[8px] text-white text-2xl w-[205px] h-[68px]">KNOW MORE</button>
      </div>
      <div className="relative w-[551px] h-[926px]" >
        <Image src={"/secondmidimg.png"} className="absolute transform -translate-y-[150px] right-0" fill alt=""/>
      </div>
    </div>
  );
};

export default SecondSectionMid;
