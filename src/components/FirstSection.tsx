import Image from "next/image"
import Navbar from "./Navbar"

const FirstSection = () => {
  return (
    <div className='w-[80%] flex flex-col gap-2 justify-between mx-auto min-h-[calc(90vh-66px)] h-fit bg-transparent relative z-50'>
        <Navbar />
        <div className="flex w-[87vw] items-center justify-between gap-10">
            {/* LEFT */}
            <div className="flex flex-col gap-7 w-3/5">
                <h1 className="font-normal text-[64px] leading-[63px] uppercase text-white">Evolve Your <span className="text-myGreen">Gaming</span> Experience</h1>
                <h3 className="font-normal text-[30px] leading-[33px] text-[#ffffffbb]">Play with friends or compete against rivals from around the world</h3>
                <button className="bg-myRed text-white rounded-[8px] text-2xl w-[205px] h-[68px]">JOIN NOW</button>
            </div>
            {/* RIGHT */}
            <div className="w-auto flex">
                <div className="relative min-w-[479px] min-h-[451px] w-full h-full flex justify-end">
                <div className="absolute left-[34%] top-[12.5%] flex flex-col gap-1 items-center">
                    <Image src="/user.png" alt="" width={33} height={37}/>
                    <span className="font-normal text-[28px]">10000<span className="font-bold">+</span></span>
                    <span className="font-normal text-[25px]">Users</span>
                </div>
                <div className="absolute left-[12%] top-[50%] flex flex-col gap-1 items-center">
                    <Image src="/trophy.png" alt="" width={41} height={36}/>
                    <span className="font-normal text-[28px]">7890<span className="font-bold">+</span></span>
                    <span className="font-normal text-[25px]">Tournaments</span>
                </div>
                <div className="absolute w-[143px] left-[47%] top-[49%] flex flex-col items-center">
                    <Image src="/dollar.png" alt="" width={24} height={42}/>
                    <span className="font-normal text-[28px] pt-2">13823422<span className="font-bold">+</span></span>
                    <span className="font-normal leading-[21px] text-[25px] text-center">Total Prizepool Distributed</span>
                </div>
                    <Image src="/polygons.png" alt="" width={479} height={451} />
                </div>
            </div>
        </div>
        <div className="flex gap-5 items-center justify-center">
            <div className="w-[45px] rounded-[62px] h-[7px] bg-white"></div>
            <div className="w-[45px] rounded-[62px] h-[7px] bg-myRed"></div>
            <div className="w-[45px] rounded-[62px] h-[7px] bg-white"></div>
        </div>
    </div>
  )
}

export default FirstSection