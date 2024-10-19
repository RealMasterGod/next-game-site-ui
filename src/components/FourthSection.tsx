import Image from "next/image";

const FourthSection = () => {
  return (
    <div className="bg-quaternary">
      <div className="w-[90%] relative h-screen flex mr-auto justify-end items-center ">
        <div className="w-[50%] absolute h-[90%] left-0 -bottom-[6%]">
          <Image src={"/fourthimg.png"} className="absolute" alt="" fill />
        </div>
        <div className="flex flex-col gap-7 w-[55%] self-center relative z-50">
          <h1 className="font-normal text-[64px] leading-[63px] uppercase text-white text-right">
            <span className="text-myGreen"> Future </span>of Gaming
          </h1>
          <span className="text-xl font-port text-right text-white font-normal">
            With VR,Metaverse & cloud gaming Next level Graphics and sounds no
            matter where you are with our VR and cloud gaming compatibility
          </span>
          <button className="bg-myRed rounded-[8px] text-white text-2xl w-[205px] h-[68px]">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
