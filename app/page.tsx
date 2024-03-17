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
    <div>
      <section className="flex md:flex-row flex-col  items-center justify-around h-96 my-20">
        <div>
          <h1 className="text-3xl pb-4">Mohammed Lamine Kherfi, PhD</h1>
          <p>Former Director of Digitization, Ministry of higher education</p>
          <p>Expert in Artificial intelligence</p>
          <p>Professor : Univ of Québec / Univ Ouargla / ENSIA</p>
        </div>
        <img
          src={"/Kherfi.png"}
          className="h-full bg-black rounded-xl border border-4 block sm:hidden"
          style={{ boxShadow: "0px 0px 10px white" }}
          alt="Mohammed Lamine Kherfi picture"
        />
      </section>
      <Aboutme />
      <section className="my-10 text-center">
        <h1 className="text-4xl pb-4">Education</h1>
        <div className="grid lg:grid-cols-2 gap-4">
          {educations.map((education) => (
            <Card {...education} />
          ))}
        </div>
      </section>
      <section className="my-10 text-center">
        <h1 className="text-4xl pb-4">Work experience</h1>
        <div className="grid lg:grid-cols-2 gap-4">
          {experiences.map((experience) => (
            <Card {...experience} />
          ))}
        </div>
      </section>
      <section className="my-10">
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
      </section>
    </div>
  );
};

export default Home;

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
      <div className="flex justify-between mb-2 px-2">
        <p>{location}</p>
        <p>{date}</p>
      </div>
      <div className="flex px-3 items-center justify-center text-gray-300">
        {content}
      </div>
    </div>
  );
};
