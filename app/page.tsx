import Carousel from "@/components/carousel";
import FirstSection from "./first-section/page";
import SecondSection from "./second-section/page";
import ThirdSection from "./third-section/page";
import FourthSection from "./fouth-section/page";
import Pricing from "./pricing/page";
import FifthSection from "./fifth-section/page";



export default function Home() {
  return (
    <div>
       
        <FirstSection/>
        <Carousel/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <Pricing/>
        <FifthSection/>
    </div>
  )
}
