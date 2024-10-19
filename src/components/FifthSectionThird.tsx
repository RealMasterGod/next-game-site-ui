import Image from "next/image";

const FifthSectionThird = () => {
  return (
    <div className="w-[90%] relative h-[60vh] max-h-[740px] flex ml-auto justify-between items-center">
      <div className="flex h-[90%] gap-7 w-[50%] relative z-50 self-center justify-between">
        <div className="self-center flex flex-col gap-7">
          <h1 className="font-normal text-[64px] leading-[63px] uppercase text-white">
            <span className="text-myGreen">Compare </span>Devices
          </h1>
          <span className="text-xl font-port text-white font-normal">
          Select from various numbers of gaming devices, compare them and select which is best for you
          </span>
        </div>
        <button className="bg-myRed relative z-50 self-end mb-[5%] rounded-[8px] text-white text-2xl min-w-[205px] h-[68px]">
          CHECKOUT
        </button>
      </div>
      <div className="absolute left-[40%] top-[5%] min-h-[313px] w-1/2 max-w-[617px] self-center h-2/3">
        <Image src={"/fivethreeimg.png"} className="absolute" fill alt="" />
      </div>
      <div className="absolute right-0 w-[23%] min-h-[800px] max-w-[500px] h-full z-10">
        <Image
          src={"/fivedabimg.png"}
          className="absolute"
          fill
          alt=""
        />
      </div>
    </div>
  );
};

export default FifthSectionThird;
