import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Sponsors from "../components/Sponsors";
import Content from "../components/Content";
import Teams from "../components/Teams";
import VitalInfoSection from "../components/Vital-Info";
import EngagementSection from "../components/Engagment";
import Footer from "../components/Footer";
//import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero/>
      <Sponsors/>
      <Content/>
      <Teams/>
      <VitalInfoSection/>
      <EngagementSection/>
      <Footer/>
    </div>
  );
};

export default Home;
