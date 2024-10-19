import Image from "next/image"

const SecondSectionTop = () => {
  return (
    <div className="h-auto min-h-[70vh] w-full flex flex-col items-center gap-12 justify-center max-w-screen" style={{background: "url('/gamelistbg.png')", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}>
        <div className="w-[90%] ml-auto flex items-center justify-center gap-5 flex-wrap">
          <div className="w-[300px] h-[130px] relative">
            <Image src="/valo.png" alt="" fill objectFit="contain" />
          </div>
          <div className="w-[300px] h-[130px] relative">
            <Image src="/rl.png" alt="" fill objectFit="contain" />
          </div>
          <div className="w-[300px] h-[130px] relative">
            <Image src="/lol.png" alt="" fill objectFit="contain" />
          </div>
          <div className="w-[300px] h-[130px] relative">
            <Image src="/cod.png" alt="" fill objectFit="contain" />
          </div>
        </div>
        <div className="w-[90%] ml-auto flex items-center justify-center gap-5 flex-wrap">
          <div className="w-[300px] h-[130px] relative">
            <Image src="/apex.png" alt="" fill objectFit="contain" />
          </div>
          <div className="w-[300px] h-[130px] relative">
            <Image src="/pubg.png" alt="" fill objectFit="contain" />
          </div>
          <div className="w-[300px] h-[130px] relative">
            <Image src="/fortnite.png" alt="" fill objectFit="contain" />
          </div>
          <div className="w-[300px] h-[130px] relative">
            <Image src="/csgo.png" alt="" fill objectFit="contain" />
          </div>
        </div>
        <button className="bg-myRed rounded-[8px] text-white text-2xl w-[205px] h-[68px]">PLAY NOW</button>
      </div>
  )
}

export default SecondSectionTop