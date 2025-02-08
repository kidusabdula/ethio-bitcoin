import MIM from "../assets/partners/MIM.png";
import BitcoinBirr from "../assets/partners/bitcoinbirr.jpeg";
import Enegix from "../assets/partners/download.jpg";
import Megawatt from "../assets/partners/megawatt.svg";
import UWBO from "../assets/partners/uwbo.png";
import BitDeer from "../assets/partners/bitdeer.svg";
import Siban from "../assets/partners/sibon-1-1TM-1536x504.png";
import Potentia from "../assets/partners/Artboard1.jpg";

const Sponsors = () => {
  const partners = [
    { name: "Potentia", image: Potentia },
    { name: "MIM", image: MIM, link: "https://mim.farm/en/" },
    {
      name: "Bitcoin Birr",
      image: BitcoinBirr,
      link: "https://bitcoinbirr.org/",
    },
    { name: "Enegix", image: Enegix, link: "https://enegix.net/en" },
    { name: "Megawatt", image: Megawatt, link: "https://www.megawatthq.com/" },
    { name: "UWBO", image: UWBO, link: "https://uwbo.org/" },
    { name: "BitDeer", image: BitDeer, link: "https://www.bitdeer.com/" },
    { name: "Siban", image: Siban, link: "https://siban.org.ng/" },
  ];

  return (
    <section className="bg-white dark:bg-white">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-[#74512D] dark:text-[#74512D] md:text-4xl">
          Our Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center items-center">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-48 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="max-h-full w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
