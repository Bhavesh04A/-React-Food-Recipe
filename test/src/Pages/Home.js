import HeroSection from "../Components/HeroSection";
import ImproveSkills from "../Components/ImproveSkills";
import QuoteSection from "../Components/QuoteSection";
import ChiefSection from "../Components/ChiefSection";

export default function Home(){
    return(
        <div>
            <HeroSection/>
            <ImproveSkills/>
            <QuoteSection />
            <ChiefSection/>
        </div>
    )
}