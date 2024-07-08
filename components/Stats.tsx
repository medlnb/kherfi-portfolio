import GoLeft from "./GoLeft";

function Stats() {
  return (
    <div className="w-full md:w-[80rem]  mt-20 p-6 mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
      {[
        { years: "+7 Y", title: "Work Exprience" },
        { years: "+18 Y", title: "Teaching" },
        { years: "+30", title: "Supervisor of master & PhD Students" },
        { years: "+70", title: "Scientific publications" },
      ].map((stat, index) => (
        <GoLeft
          key={stat.years}
          init={{ opacity: 0, y: -50 }}
          end={{ opacity: 1, y: 0 }}
          delay={index * 0.1}
        >
          <div
            className="h-full py-4 rounded-md hover:border cursor-pointer"
            style={{ boxShadow: "0px 0px 5px gray" }}
          >
            <p className="text-xl md:text-2xl">{stat.years}</p>
            <p className="text-xs md:text-base text-gray-400">{stat.title}</p>
          </div>
        </GoLeft>
      ))}
    </div>
  );
}

export default Stats;
