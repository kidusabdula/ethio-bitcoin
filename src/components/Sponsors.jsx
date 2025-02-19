import React from "react";
import MIM from "../assets/partners/MIM.png";
import BitcoinBirr from "../assets/partners/bitcoinbirr.jpeg";
import Enegix from "../assets/partners/download.jpg";
import Megawatt from "../assets/partners/megawatt.svg";
import UWBO from "../assets/partners/uwbo.png";
import Siban from "../assets/partners/sibon-1-1TM-1536x504.png";
import potentia from "../assets/partners/Artboard1.jpg";
import BlockChain from "../assets/partners/blockchain.jpg";
import HCM from "../assets/partners/hcm.png";
import Terraaxis from "../assets/partners/terraaxis.png";
import Amity from "../assets/partners/amity.png";
import Dehab from "../assets/partners/dehab.png";

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
    // { name: "AmityAge", image: Amity, link: "https://www.amityage.com" },
    // { name: "Dehab Miners", image: Dehab, link: "https://dahabminers.com" },
  ];

  const getGridCols = () => {
    const numPartners = partners.length;
    if (numPartners <= 2) return "grid-cols-2";
    if (numPartners <= 4) return "sm:grid-cols-2 md:grid-cols-3"; 
    return "sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"; 
  };

  return (
    <section className="bg-white dark:bg-white">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-[#74512D] dark:text-[#74512D] md:text-4xl">
          Our Partners
        </h2>
        {/* Dynamic Grid Layout */}
        <div
          className={`grid ${getGridCols()} gap-8 justify-center items-center`}
        >
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-48 bg-white transition-transform duration-300 hover:scale-105 rounded-lg overflow-hidden"
            >
              {/* Add a conditional background for transparent logos */}
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
                  className="max-h-full max-w-full object-contain p-5"
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