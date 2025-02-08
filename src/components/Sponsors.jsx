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
    { name: "Potentia", image: Potentia, link: "https://potentia.org.ng/" },
    { name: "MIM", image: MIM, link: "https://mim.farm/en/" },
    {
      name: "Bitcoin Birr",
      image: BitcoinBirr,
      link: "https://bitcoinbirr.org/",
    },
    { name: "Enegix", image: Enegix, link: "https://www.enegix.energy/" },
    { name: "Megawatt", image: Megawatt, link: "https://megawatt.energy/" },
    { name: "UWBO", image: UWBO, link: "https://www.uwbo.com/" },
    { name: "BitDeer", image: BitDeer, link: "https://www.bitdeer.com/" },
    { name: "Siban", image: Siban, link: "https://siban.org.ng/" },
  ];

  return (
    <section className="bg-white dark:bg-white">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-[#74512D] dark:text-[#74512D] md:text-4xl">
          Our Partners
        </h2>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-32 h-32"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="max-h-full w-auto object-contain hover:opacity-80 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
