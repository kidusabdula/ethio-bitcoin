import Hero from "../components/Hero";
import Sponsors from "../components/Sponsors";
import Content from "../components/Content";
import Teams from "../components/Teams";
import VitalInfoSection from "../components/Vital-Info";
import EngagementSection from "../components/Engagment";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Hero/>
      <Sponsors/>
      <Content/>
      <Teams/>
      <VitalInfoSection/>
      <EngagementSection/>
    </div>
  );
};

export default Home;
