import robert from "../assets/people/Robert_Luft.jpeg";
import kal from "../assets/people/Kal_Kassa.jpeg";
import luca from "../assets/people/Luca_Infeld.jpeg";

const Teams = () => {
  return (
    <section className="bg-[#AF8F6F] dark:bg-[#AF8F6F]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">
            Our Team
          </h2>
          <p className="font-light text-white sm:text-xl dark:text-white">
            Meet our world-class industry experts, dedicated to delivering an
            unforgettable experience with their knowledge and passion!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          <div className="text-center text-gray-300 dark:text-gray-300 mb-8 md:mb-0">
            <a
              href="https://www.linkedin.com/in/robluft/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-full mx-auto w-60 h-60 transform transition duration-300 hover:scale-110"
            >
              <img
                className="w-full h-full object-cover"
                src={robert}
                alt="Robert Luft"
              />
            </a>
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white mt-4">
              <a
                href="https://www.linkedin.com/in/robluft/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Robert Luft
              </a>
            </h3>
            <p className="text-white">
              <a
                href="https://www.linkedin.com/in/robluft/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                CEO - potentia
              </a>
            </p>
          </div>

          <div className="text-center text-gray-300 dark:text-gray-300 mb-8 md:mb-0">
            <a
              href="https://www.linkedin.com/in/kalkassa/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-full mx-auto w-60 h-60 transform transition duration-300 hover:scale-110"
            >
              <img
                className="w-full h-full object-cover"
                src={kal}
                alt="Kal Kassa"
              />
            </a>
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white mt-4">
              <a
                href="https://www.linkedin.com/in/kalkassa/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Kal Kassa
              </a>
            </h3>
            <p className="text-white">
              <a
                href="https://www.linkedin.com/in/kalkassa/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                CEO - BitcoinBirr
              </a>
            </p>
          </div>

          <div className="text-center text-gray-300 dark:text-gray-300">
            <a
              href="https://www.linkedin.com/in/luca-infeld/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-full mx-auto w-60 h-60 transform transition duration-300 hover:scale-110"
            >
              <img
                className="w-full h-full object-cover"
                src={luca}
                alt="Luca Infeld"
              />
            </a>
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white mt-4">
              <a
                href="https://www.linkedin.com/in/luca-infeld/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Luca Infeld
              </a>
            </h3>
            <p className="text-white">
              <a
                href="https://www.linkedin.com/in/luca-infeld/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Founder - Munich International Mining
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;