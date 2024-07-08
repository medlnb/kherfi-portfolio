import GoLeft from "./GoLeft";

function Hero() {
  return (
    <div
      className="text-black relative flex"
      style={{ height: "calc(100svh - 3rem)" }}
    >
      <div className="bg-[#ebefff] flex-1 -z-10"></div>
      <div className="flex-1 -z-10"></div>
      <div className="text-center text-lg md:text-xl font-semibold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <GoLeft init={{ opacity: 0, x: 75 }} end={{ opacity: 1, x: 0 }}>
          <h3>HEY! I AM</h3>
        </GoLeft>
        <GoLeft init={{ opacity: 0, x: -75 }} end={{ opacity: 1, x: 0 }}>
          <h1 className="text-3xl md:text-5xl font-bold my-4 mb-6">
            Pr. Mohammed Lamine Kherfi
          </h1>
        </GoLeft>
        <GoLeft init={{ opacity: 0, x: 75 }} end={{ opacity: 1, x: 0 }}>
          <h3>Computer Science and Ai phd</h3>
        </GoLeft>
      </div>
    </div>
  );
}

export default Hero;
