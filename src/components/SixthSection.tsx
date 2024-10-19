import Image from "next/image";

const SixthSection = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-10">
        <h1 className="font-normal text-[64px] leading-[75px] uppercase text-white text-right">
          Our<span className="text-myGreen"> Partners </span>
        </h1>
        <div className="flex justify-between flex-wrap items-baseline">
            <div className="">
                <Image src="/makerlogo.png" alt="" width={278} height={122} />
            </div>
            <div className="">
                <Image src="/axielogo.png" alt="" width={277} height={122} />
            </div>
            <div className="">
                <Image src="/thetalogo.png" alt="" width={277} height={122} />
            </div>
            <div className="">
                <Image src="/polygonlogo.png" alt="" width={277} height={122} />
            </div>
        </div>
        <div className="">
            <h1 className="text-myGreen font-normal text-center capitalize text-[30px] leading-[35px]">And many more pillars who stood out behind us. </h1>
            <h1 className="font-normal capitalize text-[30px] leading-[35px] text-[#ffffff9a] text-center">
                Wanna join us? Don’t hesitate to mail us!
            </h1>
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
