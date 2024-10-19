import Image from "next/image";

const FifthSectionSecond = () => {
  return (
    <div
      className="h-screen max-h-[800px] w-full relative flex items-center gap-12 justify-center max-w-screen"
      style={{
        background: "url('/fivetwobg.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[90%] h-full flex justify-between items-center">
        <div className="w-[45%] h-[55%] relative left-0 -bottom-[6%]">
          <Image
            src={"/fivetwoimg.png"}
            className="absolute z-10"
            alt=""
            fill
          />
          <Image
            src={"/mine.png"}
            className="absolute left-[25%] -top-[10%]"
            alt=""
            width={155}
            height={155}
          />
          <Image
            src={"/mine.png"}
            className="absolute bottom-[25%] -left-[5%] z-20"
            alt=""
            width={96}
            height={96}
          />
        </div>
        <button className="bg-myRed self-end mb-[5%] relative z-50 rounded-[8px] text-white text-2xl min-w-[205px] h-[68px]">
          CHECKOUT
        </button>
        <div className="flex flex-col gap-7 w-[45%] self-center relative z-50">
          <h1 className="font-normal text-[64px] leading-[63px] uppercase text-white text-right">
          Visit Our <span className="text-myGreen"> Shop </span>
          </h1>
          <span className="text-xl font-port text-right text-white font-normal">
          Visit our shop to buy game items and our new merchandise and enter giveaways!
          </span>
        </div>
      </div>
      <Image src={"/mine.png"} className="absolute top-0 left-[30%]" alt="" width={215} height={215} />
    </div>
  );
};

export default FifthSectionSecond;
