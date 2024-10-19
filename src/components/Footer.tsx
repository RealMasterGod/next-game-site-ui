import Image from "next/image"

const Footer = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center bg-footer'>
        <div className="flex w-[80%] justify-between">
            <div className="flex flex-col gap-[70px]">
                <div className="flex gap-10">
                    <Image src="/logo.png" alt="" width={70} height={70} />
                    <Image src="/3notlogo.png" alt="" width={147} height={76} />
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-10">
                        <span className="font-normal text-white text-[35px] leading-[41px]">Address:</span>
                        <div className="">
                            <h1 className="font-normal text-[#ffffff9a] text-[25px] leading-[29px]">Kujafj,</h1>
                            <h1 className="font-normal text-[#ffffff9a] text-[25px] leading-[29px]">sadokmf,</h1>
                            <h1 className="font-normal text-[#ffffff9a] text-[25px] leading-[29px]">sdfiio - 533xx25</h1>
                        </div>
                    </div>
                    <div className="flex gap-[83px]">
                        <span className="font-normal text-white text-[35px] leading-[41px]">Mail:</span>
                        <div className="">
                            <h1 className="font-normal text-[#ffffff9a] text-[25px] leading-[29px]">xxxxxxx@3n0xxx.com</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[90px]">
                <div className="flex gap-10">
                    <span className="font-normal text-white text-[35px] leading-[41px]">Stay Connected</span>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-5 cursor-pointer">
                        <Image src="/facebook.png" alt="" width={29} height={29} />
                        <h1 className="font-normal text-[#ffffff9a] text-[25px] leading-[29px]">Facebook</h1>
                    </div>
                    <div className="flex gap-5 cursor-pointer">
                        <Image src="/twitter.png" alt="" width={29} height={29} />
                        <h1 className="font-normal text-[#ffffff9a] text-[25px] leading-[29px]">Twitter</h1>
                    </div>
                    <div className="flex gap-5 cursor-pointer">
                        <Image src="/discord.png" alt="" width={29} height={29} />
                        <h1 className="font-normal text-[#ffffff9a] text-[25px] leading-[29px]">Discord</h1>
                    </div>
                    <div className="flex gap-5 cursor-pointer">
                        <Image src="/linkedin.png" alt="" width={29} height={29} />
                        <h1 className="font-normal text-[#ffffff9a] text-[25px] leading-[29px]">LinkedIn</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[90px]">
                <div className="flex gap-10">
                    <span className="font-normal text-white text-[35px] leading-[41px]">Quick Links</span>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-5 cursor-pointer">
                        <h1 className="font-normal text-[#ffffff9a] text-[25px] leading-[29px]">About Us</h1>
                    </div>
                    <div className="flex gap-5 cursor-pointer">
                        <h1 className="font-normal text-[#ffffff9a] text-[25px] leading-[29px]">Zeux</h1>
                    </div>
                    <div className="flex gap-5 cursor-pointer">
                        <h1 className="font-normal text-[#ffffff9a] text-[25px] leading-[29px]">Careers</h1>
                    </div>
                    <div className="flex gap-5 cursor-pointer">
                        <h1 className="font-normal text-[#ffffff9a] text-[25px] leading-[29px]">Contact Us</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer