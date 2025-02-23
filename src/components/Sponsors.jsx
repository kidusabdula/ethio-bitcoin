import MIM from "../assets/partners/MIM.png";
import BitcoinBirr from "../assets/partners/bitcoinbirr.jpeg";
import Enegix from "../assets/partners/enegix.jpg";
import Megawatt from "../assets/partners/megawatt.svg";
import UWBO from "../assets/partners/uwbo.png";
import Siban from "../assets/partners/siban.png";
import potentia from "../assets/partners/potentia.jpg";
import BlockChain from "../assets/partners/blockchain.jpg";
import HCM from "../assets/partners/hcm.png";
import Terraaxis from "../assets/partners/terraaxis.png";
import Dehab from "../assets/partners/dehab.png";
import Amity from "../assets/partners/amity.png";
import TheSource from "../assets/partners/thesource.png";
import BitCity from "../assets/partners/bitcity.jpg";

const Sponsors = () => {
  const partners = [
    { name: "potentia", image: potentia },
    { name: "MIM", image: MIM, link: "https://mim.farm/en/" },
    {
      name: "Bitcoin Birr",
      image: BitcoinBirr,
      link: "https://bitcoinbirr.org/",
    },
    { name: "Enegix", image: Enegix, link: "https://enegix.net/en" },
    { name: "Megawatt", image: Megawatt, link: "https://www.megawatthq.com/" },
    { name: "UWBO", image: UWBO, link: "https://uwbo.org/" },
    {
      name: "The BlockChain Center",
      image: BlockChain,
      link: "https://theblockchaincenter.ae",
    },
    {
      name: "HCM Capital",
      image: HCM,
      link: "https://theblockchaincenter.ae",
    },
    { name: "Terra Axis", image: Terraaxis, link: "https://terraaxis.co" },
    { name: "Siban", image: Siban, link: "https://siban.org.ng/" },
    {
      name: "TheSource",
      image: TheSource,
      link: "https://www.thesourcegroups.com/",
    },
    { name: "BITCITY", image: BitCity, link: "" },
    { name: "AmityAge", image: Amity, link: "https://www.amityage.com" },
    { name: "Dehab Miners", image: Dehab, link: "https://dahabminers.com" },
  ];

  // Define scaling factors for specific logos
  const logoScale = {
    AmityAge: {
      sm: "scale-70", 
      md: "scale-100", // Tablet scal
      lg: "scale-100", // Desktop scaling
    },
    BITCITY: {
      sm: "scale-200", 
      md: "scale-100", // Tablet scal
      lg: "scale-175", // Desktop scaling
    },
    MegaCorp: {
      sm: "scale-80",
      md: "scale-100",
      lg: "scale-125",
    },
    TheSource: {
      sm: "scale-50",
      md: "scale-80",
      lg: "scale-100",
    },
    'HCM Capital': {
      sm: "scale-80",
      md: "scale-60",
      lg: "scale-100",
    },
    'The BlockChain Center': {
      sm: "scale-120",
      md: "scale-120",
      lg: "scale-140",
    },
    'Terra Axis': {
      sm: "scale-90",
      md: "scale-80",
      lg: "scale-100",
    },
    Siban: {
      sm: "scale-90",
      md: "scale-80",
      lg: "scale-100",
    },
    potentia: {
      sm: "scale-200",
      md: "scale-70",
      lg: "scale-80",
    },
    MIM:{
      sm: "scale-100",
      md: "scale-120",
      lg: "scale-140",
    },
    'Bitcoin Birr':{
      sm: "scale-70",
      md: "scale-120",
      lg: "scale-140",
    },
    Enegix:{
      sm: "scale-200",
      md: "scale-120",
      lg: "scale-140",
    },
    Megawatt:{
      sm: "scale-100",
      md: "scale-120",
      lg: "scale-140",
    },
    UWBO:{
      sm: "scale-120",
      md: "scale-120",
      lg: "scale-140",
    },



  };

  // Split the partners array into chunks
  const firstRow = partners.slice(0, 5); // First 5 logos
  const secondRow = partners.slice(5, 10); // Next 5 logos
  const thirdRow = partners.slice(10); // Remaining 4 logos

  return (
    <section className="bg-white dark:bg-white">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-[#74512D] dark:text-[#74512D] md:text-4xl">
          Our Partners
        </h2>
        {/* First Row (5 Logos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center items-center mb-8">
          {firstRow.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-48 bg-white transition-transform duration-300 hover:scale-105 rounded-lg overflow-hidden"
            >
              <div
                className={`flex items-center justify-center w-full h-full ${
                  partner.name === "AmityAge" || partner.name === "Dehab Miners"
                    ? "bg-[#ebc798]" // Light beige background for transparent logos
                    : ""
                }`}
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className={`max-h-full max-w-full object-contain p-5 ${
                    logoScale[partner.name]?.sm || "" 
                  } sm:${logoScale[partner.name]?.sm || ""} md:${
             logoScale[partner.name]?.md || ""
                  } lg:${logoScale[partner.name]?.lg || ""}`}
                />
              </div>
            </a>
          ))}
        </div>
        {/* Second Row (5 Logos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center items-center mb-8">
          {secondRow.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-48 bg-white transition-transform duration-300 hover:scale-105 rounded-lg overflow-hidden"
            >
              <div
                className={`flex items-center justify-center w-full h-full ${
                  partner.name === "AmityAge" || partner.name === "Dehab Miners"
                    ? "bg-[#ebc798]" // Light beige background for transparent logos
                    : ""
                }`}
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className={`max-h-full max-w-full object-contain p-5 ${
                    logoScale[partner.name]?.sm || "" 
                  } sm:${logoScale[partner.name]?.sm || ""} md:${
             logoScale[partner.name]?.md || ""
                  } lg:${logoScale[partner.name]?.lg || ""}`}
                />
              </div>
            </a>
          ))}
        </div>
        {/* Third Row (4 Logos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center items-center">
          {thirdRow.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-48 bg-white transition-transform duration-300 hover:scale-105 rounded-lg overflow-hidden"
            >
              <div
                className={`flex items-center justify-center w-full h-full ${
                  partner.name === "AmityAge" || partner.name === "Dehab Miners"
                    ? "" // Light beige background for transparent logos
                    : ""
                }`}
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className={`max-h-full max-w-full object-contain p-5 ${
                    logoScale[partner.name]?.sm || "" 
                  } sm:${logoScale[partner.name]?.sm || ""} md:${
             logoScale[partner.name]?.md || ""
                  } lg:${logoScale[partner.name]?.lg || ""}`}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;