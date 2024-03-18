import Aboutme from "@components/Aboutme";
import { FaStar } from "react-icons/fa";

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

  return (
    <div className="h-dvh overflow-y-scroll snap-y snap-mandatory hidescrollbar">
      <Section>
        <div className="flex justify-around items-center">
          <div className="lg:block hidden">
            <h1 className="text-3xl pb-10">Mohammed Lamine Kherfi, PhD</h1>

            <div className="h-52 text-lg flex justify-between flex-col ">
              <div className="flex items-end gap-2">
                <div className="w-6 h-0.5 bg-white"></div>
                <p>About me</p>
              </div>
              <div className="flex items-end gap-2">
                <div className="w-12 h-0.5 bg-white"></div>
                <p>Education</p>
              </div>
              <div className="flex items-end gap-2">
                <div className="w-20 h-0.5 bg-white"></div>
                <p>Work experience</p>
              </div>
              <div className="flex items-end gap-2">
                <div className="w-28 h-0.5 bg-white"></div>
                <p>Awards and honors</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl pb-10 lg:hidden">
              Dr. Mohammed Lamine Kherfi
            </h1>
            <img
              src={"/Kherfi.png"}
              className="w-52 mb-4 bg-black rounded-xl border border-4"
              style={{ boxShadow: "0px 0px 10px white" }}
              alt="Mohammed Lamine Kherfi picture"
            />
            <div>
              <p>
                Former Director of Digitization, Ministry of higher education
              </p>
              <p>Expert in Artificial intelligence</p>
              <p>Professor : Univ of Québec / Univ Ouargla / ENSIA</p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <Aboutme />
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
