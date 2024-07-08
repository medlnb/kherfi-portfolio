function Stats() {
  return (
    <div className="w-[80rem] mx-auto mt-20 p-6 md:flex md:justify-around items-center grid grid-cols-2 gap-2 text-center">
      {[
        { years: "+7 Y", title: "Work Exprience" },
        { years: "+18 Y", title: "Teaching" },
        { years: "+30", title: "Supervisor of master & PhD Students" },
        { years: "+70", title: "Scientific publications" },
      ].map((stat) => (
        <div
          key={stat.years}
          className="flex-1 py-4 rounded-md hover:border cursor-pointer"
          style={{ boxShadow: "0px 0px 5px gray" }}
        >
          <p className="text-xl md:text-2xl">{stat.years}</p>
          <p className="text-xs md:text-base text-gray-400">{stat.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Stats;
