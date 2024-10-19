import Image from "next/image";

const FifthSectionFirst = () => {
  return (
    <div className="relative h-[90vh] flex items-center w-[90%] ml-auto">
      <div className="flex gap-7 w-[55%] self-center relative z-50">
        <div className="flex flex-col gap-7 pb-7">
          <div className="">
            <h1 className="font-normal text-[64px] leading-[63px] uppercase text-white">
              Join The
            </h1>
            <h1 className="font-normal text-[64px] leading-[63px] uppercase text-white">
              Esports<span className="text-myGreen"> Community </span>
            </h1>
          </div>
          <span className="font-normal text-white text-[32px] leading-[54px] text-right">All over the world</span>
          <span className="text-xl font-port text-white font-normal">
            With VR,Metaverse & cloud gaming Next level Graphics and sounds no
            matter where you are with our VR and cloud gaming compatibility
          </span>
        </div>
        <button className="bg-myRed self-end rounded-[8px] text-white text-2xl min-w-[205px] h-[68px]">
          CHECKOUT
        </button>
      </div>
      <div className="w-[45%] absolute h-[70%] right-0 -bottom-[15%]">
        <Image src={"/fiveoneimg.png"} className="absolute" alt="" fill />
      </div>
      <div className="w-[204px] absolute h-[204px] top-[30%] right-[10%]">
        <Image src={"/hearts.png"} className="absolute" alt="" fill />
      </div>
    </div>
  );
};

export default FifthSectionFirst;
