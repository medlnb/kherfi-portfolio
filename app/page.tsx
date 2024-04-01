"use client";
import { MutableRefObject, useRef } from "react";
import Aboutme from "@components/Aboutme";
import { FaStar } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";

const Home = () => {
  const rewards = [
    "One of the best inventors in information technology in the province of Quebec, Canada, in 2004, according to the Fédération Informatique du Québec. The prize was awarded to me for the invention of a search engine for images.",
    "FQRNT Postdoctoral Excellence Fellowship, Quebec, 2005.",
    "Prize of the researcher with the highest number of articles in indexed international journals in 2022, University of Ouargla.",
    "Prize for the most cited researcher at the University of Ouargla 2018.",
    "Efficiency award for having achieved my PhD in 2 years and a half, with a Excellent degree and a cumulative average A+, Univ. Of Sherbrooke, 2004.",
    "Between 2000 and 2004: several scholarships awarded by Université de Sherbrooke.",
    "Between 1992 and 1997: Valedictorian at the National Institute of Computer Science, Algiers, Algeria.",
    "Excellence award for the baccalaureate in secondary education, Ouargla province, Algeria, 1992.",
    "Main author of the most downloaded article from the ACM digital library in October 2004.",
    "Main author of one of the most downloaded article from the Science Direct database, 2003.",
  ];
  const educations = [
    {
      content: "Postdoc at de Moivre Lab, University of Sherbrooke",
      date: "01/05 - 07/05",
      location: "Canada",
    },
    {
      content: "Ph.D. in Computer Science, University of Sherbrooke",
      date: "05/02 - 12/04",
      location: "Canada",
    },
    {
      content: "Master in Computer Science, University of Sherbrooke",
      date: "09/00 - 04/02",
      location: "Canada",
    },
    {
      content: "B. Eng in Computer Science, Institut National d’Informatique",
      date: "09/92 - 09/97",
      location: "Algiers, Algeria",
    },
  ];
  const experiences = [
    {
      content:
        "Director of Networks and Digitization, Ministry of Higher Education and scientific research",
      date: "05/21 - 10/22",
      location: "Algeria",
    },
    {
      content:
        "Computer Science Professor at University of Québec Trois-Rivières",
      date: "08/05 - 08/12",
      location: "Canada",
    },
    {
      content:
        "Computer Science Professor at University of Ouargla. including a one year leave to the National Higher School of Artificial Intelligence",
      date: "08/13 - present",
      location: "Algeria",
    },
    {
      content: "Manager of a Computer Business , GCS",
      date: "02/99 - 07/00",
      location: "Touggourt, Algeria",
    },
  ];
  const scrollRef: React.LegacyRef<HTMLDivElement> | null = useRef(null);
  return (
    <div className="h-dvh overflow-y-scroll snap-y snap-mandatory hidescrollbar">
      <Section>
        <div className="h-dvh flex flex-col justify-around ">
          <div className="h-0 md:h-20"></div>
          <div className="flex md:flex-row sm:justify-around sm:h-80 flex-col justify-start gap-10">
            <div className="flex flex-col justify-around ">
              <img
                src={"/Kherfi.png"}
                className="w-24 h-24 object-cover mb-4 bg-black rounded-full "
                alt="Mohammed Lamine Kherfi picture"
              />
              <h1 className="sm:text-4xl text-2xl font-medium">
                {"Hello! I'm Dr. Mohammed Lamine Kherfi."}
              </h1>
            </div>
            <div className="flex flex-col justify-around">
              <div>
                <h1 className="sm:text-4xl text-2xl mb-4">
                  Computer Science and Ai phd
                </h1>
                <p>
                  Former Director of Digitization, Ministry of higher education
                </p>
                <p>Expert in Artificial intelligence</p>
                <p>Professor : Univ of Québec / Univ Ouargla / ENSIA</p>
              </div>
              <div className="mt-6 flex ">
                <button className="text-black py-1 px-6 rounded-md bg-white">
                  Contact me
                </button>
                <button
                  className="py-1 px-6 ml-3  flex items-center gap-2"
                  onClick={() => {
                    if (scrollRef.current) {
                      scrollRef.current.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  See more
                  <FaAnglesDown className="mt-1" />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-black p-6 rounded-xl md:flex md:justify-around grid grid-cols-2 gap-6 items-center">
            <div className="text-center">
              <p className="text-xl">+4 Y</p>
              <p className="text-xs text-gray-400">Work Exprience</p>
            </div>
            <div className="text-center">
              <p className="text-xl">+10 Y</p>
              <p className="text-xs text-gray-400">Teaching</p>
            </div>
            <div className="text-center">
              <p className="text-xl">+30</p>
              <p className="text-xs text-gray-400">
                Supervisor of master & PhD Students
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl">+70</p>
              <p className="text-xs text-gray-400">Scientific publications</p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div ref={scrollRef}>
          <Aboutme />
        </div>
      </Section>

      <Section>
        <h1 className="text-4xl pb-4 text-center">Education</h1>
        <div className="grid lg:grid-cols-2 gap-4">
          {educations.map((education, index) => (
            <Card key={index} {...education} />
          ))}
        </div>
      </Section>
      <Section>
        <h1 className="text-4xl pb-4 text-center">Work experience</h1>
        <div className="grid lg:grid-cols-2 gap-4">
          {experiences.map((experience, index) => (
            <Card key={index} {...experience} />
          ))}
        </div>
      </Section>
      <Section>
        <h1 className="text-4xl pb-4  text-center">Awards and honors</h1>
        <div className="border p-2 rounded-md">
          <div className="px-3 text-gray-300 text-">
            {rewards.map((reward, index) => (
              <p key={index} className="my-2">
                <FaStar className="inline mb-1.5 mr-2" />
                {reward}
              </p>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-full w-full lg:p-20 p-2 flex items-center justify-center snap-start">
      <div className="w-full">{children}</div>
    </section>
  );
};

const Card = ({
  content,
  date,
  location,
}: {
  content: string;
  date: string;
  location: string;
}) => {
  return (
    <div className="border p-2 rounded-md">
      <div className="flex justify-between mb-2 lg:px-2">
        <p>{location}</p>
        <p>{date}</p>
      </div>
      <div className="flex px-3 items-center justify-center text-gray-300">
        {content}
      </div>
    </div>
  );
};
