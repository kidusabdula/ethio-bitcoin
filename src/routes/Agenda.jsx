import { motion } from "framer-motion";
import robert from "../assets/people/Robert_Luft.jpeg";
import kal from "../assets/people/Kal_Kassa.jpeg";
import rizwan from "../assets/people/Rizwan_Kamarudheen.jpg";
import sunil from "../assets/people/Sunil_Kumar.jpg";
import luca from "../assets/people/Luca_Infeld.jpeg";
import mohamad from "../assets/people/Mohammed_Khalife.jpg"
import nemo from "../assets/people/Nemo_Semret.jpg"

const Agenda = () => {
  const agendaItems = [
    {
      date: "March 5th, 2025",
      events: [
        {
          time: "6:00 PM - 6:30 PM",
          title: "Welcome / Registration",
          location: "Main Hall",
          description: "Check-in and networking with fellow attendees.",
        },
        {
          time: "6:30 PM - 6:45 PM",
          title: "Opening Remarks",
          speaker: ["Robert Luft"],
          speakerInfo: ["CEO - potentia"],
          speakerImage: [robert],
          linkedin: ["https://www.linkedin.com/in/robluft/"],
          location: "Main Hall",
          description:
            "A warm welcome and overview of the event's objectives and highlights.",
        },
        {
          time: "6:45 PM - 7:00 PM",
          title: "Current State of Ethiopia Bitcoin Mining",
          speaker: ["Kal Kassa"],
          speakerInfo: ["CEO - BitcoinBirr"],
          speakerImage: [kal],
          linkedin: ["https://www.linkedin.com/in/kalkassa/"],
          location: "Main Hall",
          description:
            "An in-depth look at the current state and future potential of Bitcoin mining in Ethiopia.",
        },
        {
          time: "7:00 PM - 7:25 PM",
          title:
            "Panel Discussion: Choosing Ethiopia as Bitcoin Mining Destination",
          speaker: ["Kal Kassa", "Rizwan Kamarudheen", "Sunil Kumar", "Mohamad Khalife"],
          speakerInfo: [
            "CEO - BitcoinBirr",
            "Technical Lead - Dahab Miners",
            "Mining & Strategic Planning - AmityAge",
            "CEO - BITCITY"
          ],
          speakerImage: [kal, rizwan, sunil, mohamad],
          linkedin: [
            "https://www.linkedin.com/in/kalkassa/",
            "https://www.linkedin.com/in/rizwan-kamar-ab117a172/",
            "https://www.linkedin.com/in/sunil-kumar-570626214/",
          ],
          location: "Main Hall",
          description:
            "Experts discuss why Ethiopia is an ideal destination for Bitcoin mining.",
        },
        {
          time: "7:25 - 7:50 PM",
          title: "Panel Discussion: Bitcoin Mining and Global Connectivity",
          speaker: ["Robert Luft", "Nemo Semret", "Luca Infeld"],
          speakerInfo: [
            "CEO - potentia",
            "CEO - QRB Labs",
            "Founder - Munich International Mining",
          ],
          speakerImage: [robert, nemo, luca],
          linkedin: [
            "https://www.linkedin.com/in/robluft/",
            "https://www.linkedin.com/in/nemozen/",
            "https://www.linkedin.com/in/luca-infeld/",
          ],
          location: "Main Hall",
          description:
            "Exploring how Bitcoin mining connects Ethiopia to the global economy.",
        },
        {
          time: "8:00 PM - 9:00 PM",
          title: "Networking & Social Hour",
          location: "Main Hall",
          description:
            "Enjoy refreshments and connect with industry leaders, speakers, and fellow attendees.",
        },
      ],
    },
    {
      date: "March 6th, 2025",
      events: [
        {
          time: "TBA",
          title: "Site Tour Of A Bitcoin Mining Facility",
          location: "BITCITY Mining Facility",
          description: "Exclusive Tour Of A State-Of-The Art Bitcoin Farm",
        },
      ],
    },
  ];

  return (
    <motion.div
      className="bg-white min-h-screen py-16 overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Animations */}
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-[#AF8F6F]/10 blur-lg"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 0.4, 0.8],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "10%", left: "10%" }}
      ></motion.div>
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-[#AF8F6F]/10 blur-lg"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 0.2, 0.6],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        style={{ bottom: "20%", right: "15%" }}
      ></motion.div>
      <div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-[#AF8F6F]/5 to-[#AF8F6F]/10 pointer-events-none"
        style={{ zIndex: -1 }}
      ></div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-[#AF8F6F] text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Event Schedule
        </motion.h2>
        <div className="space-y-16">
          {agendaItems.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
            >
              <div className="sticky top-0 bg-[#AF8F6F] text-white py-4 px-6 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-semibold">{day.date}</h3>
              </div>
              <div className="space-y-8">
                {day.events.map((event, eventIndex) => (
                  <motion.div
                    key={eventIndex}
                    className="relative pl-8 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: eventIndex * 0.1 }}
                  >
                    <div className="absolute left-0 top-0 h-full flex items-center">
                      <div className="w-3 h-3 bg-[#AF8F6F] rounded-full absolute -left-1.5"></div>
                      {eventIndex !== day.events.length - 1 && (
                        <div className="w-0.5 h-full bg-[#AF8F6F]/30 absolute left-0 top-4"></div>
                      )}
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-[#AF8F6F]/20 relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-transparent via-[#AF8F6F]/5 to-[#AF8F6F]/10 opacity-50 pointer-events-none"
                        style={{ zIndex: -1 }}
                      ></div>
                      <div className="text-sm text-[#AF8F6F] font-medium mb-2">
                        {event.time}
                      </div>
                      <h4 className="text-xl font-semibold text-[#AF8F6F] mb-2">
                        {event.title}
                      </h4>
                      {event.speaker && (
                        <div className="flex flex-wrap gap-4 mb-4">
                          {event.speaker.map((speaker, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-4"
                            >
                              <a
                                href={event.linkedin[index]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block overflow-hidden rounded-full w-16 h-16 transform transition duration-300 hover:scale-110"
                              >
                                <img
                                  className="w-full h-full object-cover"
                                  src={event.speakerImage[index]}
                                  alt={`${speaker}'s Profile`}
                                />
                              </a>
                              <div>
                                <p className="text-gray-600 font-medium">
                                  {speaker}
                                </p>
                                <p className="text-gray-500 text-sm">
                                  {event.speakerInfo[index]}
                                </p>
                                <a
                                  href={event.linkedin[index]}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#AF8F6F] text-sm hover:underline"
                                >
                                  View LinkedIn Profile
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="text-sm text-gray-500 mb-2">
                        {event.location}
                      </div>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Agenda;
