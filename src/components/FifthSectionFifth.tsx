import Image from "next/image";

const FifthSectionFifth = () => {
  return (
    <div className="w-full flex item-center justify-center">
      <div className="h-[760px] w-[1108px] flex relative items-center justify-center">
        <div className="relative w-[554px] h-[480px]">
          <div className="absolute flex items-center justify-center w-fit left-0 top-0">
          <h1 className="absolute w-1/2 pb-[70px] z-50 text-white text-[50px] leading-[58px] text-center">Games</h1>
            <Image src="/polygonGames.png" alt="" width={277} height={240} />
          </div>
          <div className="absolute flex items-center justify-center w-fit right-0 top-0">
          <h1 className="absolute w-1/2 pb-[70px] z-50 text-white text-[50px] leading-[58px] text-center">Shop</h1>
            <Image src="/polygonShop.png" alt="" width={277} height={240} />
          </div>
          <div className="absolute flex items-center justify-center w-fit left-0 bottom-0">
          <h1 className="absolute w-[90%] pt-[70px] z-50 text-white text-[50px] leading-[58px] text-center">NFT & Market Place Queries</h1>
            <Image src="/polygonMarket.png" alt="" width={277} height={240} />
          </div>
          <div className="absolute flex items-center justify-center w-fit bottom-0 right-0">
          <h1 className="absolute w-1/2 z-50 pt-[70px] text-white text-[50px] leading-[58px] text-center">Rewards</h1>
            <Image src="/polygonRewards.png" alt="" width={277} height={240} />
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-0 top-0">
            <h1 className="absolute w-1/2 pb-[70px] z-50 text-white text-[50px] leading-[58px] text-center">Compare Devices</h1>
          <Image src="/polygonCompare.png" alt="" width={277} height={240} />
        </div>
        <div className="absolute flex items-center justify-center top-0 right-0">
            <h1 className="absolute w-1/2 pb-[70px] z-50 text-white text-[50px] leading-[58px] text-center">Cloud Gaming</h1>
          <Image src="/polygonCloud.png" alt="" width={277} height={240} />
        </div>
        <div className="absolute flex items-center justify-center bottom-0 left-0">
        <h1 className="absolute w-1/2 pt-[70px] z-50 text-white text-[50px] leading-[58px] text-center">Chat</h1>
          <Image src="/polygonChat.png" alt="" width={277} height={240} />
        </div>
        <div className="absolute flex items-center justify-center bottom-0 right-0">
        <h1 className="absolute w-1/2 pt-[70px] z-50 text-white text-[50px] leading-[58px] text-center">Play & Win</h1>
          <Image src="/polygonPlay.png" alt="" width={277} height={240} />
        </div>
      </div>
    </div>
  );
};

export default FifthSectionFifth;
