import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import africa_png from "../assets/africa.png"
import Hero from "../components/Hero";
//import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero/>
      

        
      {/* <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
            <p>Discover our powerful feature for a seamless experience.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
            <p>Explore our innovative solutions to boost productivity.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
            <p>Join our community and enjoy personalized support.</p>
          </div>
        </div>
      </section> */}

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
