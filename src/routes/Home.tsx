import React from "react";
import { Link } from "react-router-dom"; 
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      
      <section className="flex justify-center items-center h-[80vh] bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center">
        <div>
          <h1 className="text-4xl font-extrabold mb-4">Welcome to Our Website</h1>
          <p className="text-lg mb-8">
            Your journey to a modern and efficient web experience starts here.
          </p>
          <Link
            to="/agenda"
            className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold"
          >
            View Agenda
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
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
      </section>

      <Footer />
    </div>
  );
};

export default Home;
