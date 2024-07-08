"use client";
import GoLeft from "./GoLeft";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div
      className="text-black relative flex overflow-hidden"
      style={{ height: "calc(100svh - 3rem)" }}
      id="aboutme"
    >
      <div className="bg-[#ebefff] flex-1 -z-10"></div>
      <div className="flex-1 -z-10 relative">
        <div className="triangle">
          <div className="absolute right-10">
            <MdOutlineKeyboardDoubleArrowDown
              size={30}
              className="animate-bounce"
            />
          </div>
        </div>
      </div>
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
          <TypeAnimation
            sequence={[
              "Computer Science and Ai phd",
              3000,
              "Computer Science and Ai phd",

              () => {
                console.log("Sequence completed");
              },
            ]}
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "1.5rem", display: "inline-block" }}
          />
        </GoLeft>
      </div>
    </div>
  );
}

export default Hero;
