import FifthSectionFifth from "@/components/FifthSectionFifth";
import FifthSectionFirst from "@/components/FifthSectionFirst";
import FifthSectionFourth from "@/components/FifthSectionFourth";
import FifthSectionSecond from "@/components/FifthSectionSecond";
import FifthSectionThird from "@/components/FifthSectionThird";
import FirstSection from "@/components/FirstSection";
import Footer from "@/components/Footer";
import FourthSection from "@/components/FourthSection";
import SecondSectionEnd from "@/components/SecondSectionEnd";
import SecondSectionMid from "@/components/SecondSectionMid";
import SecondSectionTop from "@/components/SecondSectionTop";
import SixthSection from "@/components/SixthSection";
import ThirdSection from "@/components/ThirdSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className="w-full min-h-screen bg-primary relative pt-[66px] flex justify-center">
      <FirstSection />
      <div className="w-[100%] h-[84%] absolute bottom-0">
        <Image src="/section1.png" alt="" className="w-full h-full" fill objectFit="contain" />
      </div>
    </section>
    <section className="w-full min-h-screen bg-secondary">
      <SecondSectionTop />
      <SecondSectionMid />
      <SecondSectionEnd />
    </section>
    <section className="w-full min-h-screen bg-tertiary">
      <ThirdSection />
    </section>
    <section className="w-full min-h-screen bg-secondary">
      <FourthSection />
    </section>
    <section className="w-full bg-penta">
      <FifthSectionFirst />
      <FifthSectionSecond />
      <FifthSectionThird />
      <FifthSectionFourth />
    </section>
    <section className="w-full h-[calc(100vh+40px)] min-h-[1000px] bg-hexa flex items-center justify-center">
      <FifthSectionFifth />
    </section>
    <section className="w-full min-h-screen bg-hepta">
      <SixthSection />
    </section>
    <Footer />
    </>
  );
}
