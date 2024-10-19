import Image from "next/image";

const FifthSectionFourth = () => {
  return (
    <div
      className="h-screen w-full max-h-[800px] opacity-1 relative flex items-center gap-12 justify-center max-w-screen"
      style={{
        background: "url('/fivefourbg.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[90%] max-h-[800px] h-full flex justify-end items-center">
        <div className="w-[50%] flex h-full justify-between gap-7">
          <button className="bg-myRed self-end justify-self-start mb-[10%] relative z-50 rounded-[8px] text-white text-2xl min-w-[205px] h-[68px]">
            CHECKOUT
          </button>
          <div className="flex flex-col gap-7 w-[55%] self-center relative z-50">
            <h1 className="font-normal text-[64px] leading-[75px] uppercase text-white text-right">
            Wallet And <span className="text-myGreen">  Rewards </span>
            </h1>
            <span className="text-xl font-port text-right text-white font-normal">
              Visit our shop to buy game items and our new merchandise and enter
              giveaways!
            </span>
          </div>
        </div>
      </div>
      <div className="absolute w-[40%] min-h-[750px] max-h-[1000px] max-w-[750px] h-full left-0 -top-[5%]">
        <Image
          src={"/fivefourlady.png"}
          className="absolute top-0"
          alt=""
          fill
        />
      </div>
      <div className="absolute max-w-[407px] w-full max-h-[394px] h-full top-[40%] left-[20%]">
        <Image
          src={"/treasure.png"}
          className="absolute top-0"
          alt=""
          fill
        />
      </div>
      <div className="absolute w-[40%] min-h-[750px] h-full">
        <Image
          src={"/coin.png"}
          className="absolute top-0"
          alt=""
          fill
        />
      </div>
    </div>
  );
};

export default FifthSectionFourth;
