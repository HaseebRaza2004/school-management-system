import HeroSection1 from "../components/heroSection1";
import HeroSection2 from "../components/heroSection2";
import HeroSection3 from "../components/heroSection3";
import Statistics from "../components/statistics";

function Home() {
    return (
        <div className="container mx-auto">
            <HeroSection1/>
            <Statistics/>
            <HeroSection2/>
            <HeroSection3/>
        </div>
    )
};

export default Home;