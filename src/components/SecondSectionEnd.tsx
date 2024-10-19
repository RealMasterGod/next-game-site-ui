import Image from "next/image";

const SecondSectionEnd = () => {
  return (
    <div
      className="h-[750px] max-h-fit flex flex-col items-center gap-12 justify-center max-w-screen"
      style={{
        background: "url('/secondendbg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[90%] h-[600px] flex mx-auto">
        <div className="flex-1 relative">
          <Image
            src={"/secondendimg.png"}
            className="absolute bottom-0 left-0"
            alt=""
            width={473}
            height={705}
          />
        </div>
        <div className="flex flex-col gap-7 w-[55%] self-center">
          <h1 className="font-normal text-[64px] leading-[63px] uppercase text-white text-right">
            <span className="text-myGreen"> Compete </span>In
          </h1>
          <h1 className="font-normal text-[64px] leading-[63px] uppercase text-white text-right">Tournaments</h1>
          <span className="text-xl font-port text-right text-white font-normal">
            Compete in exciting tournaments and get rewarded accordingly, get to
            meet new players & EARN in the form of crypto
          </span>
          <button className="bg-myRed rounded-[8px] text-white text-2xl w-[205px] h-[68px]">
            COMPETE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondSectionEnd;
