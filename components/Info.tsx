"use client";
import { useEffect } from "react";
import educations from "@data/Educations";
import Experiences from "@data/Experiences";
import Rewards from "@data/Rewards";
import { MdOutlineSchool, MdOutlineWorkOutline } from "react-icons/md";
import { FaAward } from "react-icons/fa6";
import GoLeft from "./GoLeft";

function Info() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const navButton = document.querySelector(
            `nav button[data-target="${entry.target.id}"]`
          );
          if (entry.isIntersecting) {
            navButton?.classList.add("text-blue-600");
          } else {
            navButton?.classList.remove("text-blue-600");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (targetId: any) => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex gap-20 mt-20 md:mt-44 md:w-[50rem] mx-auto p-2 w-full overflow-x-hidden">
      <div className="hidden md:block">
        <nav className="sticky top-36">
          {["Education", "Work Experience", "Awards and Honors"].map((nav) => (
            <button
              key={nav}
              data-target={nav.replace(/ /g, "-").toLowerCase()}
              className="block font-semibold mb-2 whitespace-nowrap"
              onClick={() =>
                handleNavClick(nav.replace(/ /g, "-").toLowerCase())
              }
            >
              {nav}
            </button>
          ))}
        </nav>
      </div>
      <div>
        <section id="education" className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          {educations.map((educ, index) => (
            <GoLeft
              key={educ.title}
              init={{ opacity: 0, x: 75 }}
              end={{ opacity: 1, x: 0 }}
            >
              {!!index && <div className="w-full h-[1px] bg-gray-300 my-4" />}
              <div className="flex gap-2 items-start">
                <div className="p-1 text-2xl rounded-full bg-blue-600">
                  <MdOutlineSchool fill="white" />
                </div>
                <div>
                  <p className="text-blue-600 font-medium">{educ.date}</p>
                  <p className="text-xl font-bold">{educ.title}</p>
                  <p className="font-semibold">
                    {educ.univ} | {educ.location}
                  </p>
                </div>
              </div>
            </GoLeft>
          ))}
        </section>

        <section id="work-experience" className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
          {Experiences.map((educ, index) => (
            <GoLeft
              key={educ.title + index}
              init={{ opacity: 0, x: 75 }}
              end={{ opacity: 1, x: 0 }}
            >
              {!!index && <div className="w-full h-[1px] bg-gray-300 my-4" />}
              <div className="flex gap-2 items-start">
                <div className="p-1 text-2xl rounded-full bg-blue-600">
                  <MdOutlineWorkOutline fill="white" />
                </div>
                <div>
                  <p className="text-blue-600 font-medium">{educ.date}</p>
                  <p className="text-xl font-bold">{educ.title}</p>
                  <p className="font-semibold">{educ.univ}</p>
                  <p className="font-semibold text-gray-600">{educ.location}</p>
                </div>
              </div>
            </GoLeft>
          ))}
        </section>

        <section id="awards-and-honors">
          <h2 className="text-3xl font-bold mb-6">Awards and Honors</h2>
          {Rewards.map((educ, index) => (
            <GoLeft
              key={educ.content}
              init={{ opacity: 0, x: 75 }}
              end={{ opacity: 1, x: 0 }}
            >
              {!!index && <div className="w-full h-[1px] bg-gray-300 my-4" />}
              <div className="flex gap-2 items-start">
                <div className="p-1 text-2xl rounded-full bg-blue-600">
                  <FaAward fill="white" />
                </div>
                <div>
                  <p className="text-blue-600 font-medium">{educ.date}</p>
                  <p className="font-semibold">{educ.univ}</p>
                  <p className="text-sm text-gray-700 font-bold">
                    {educ.content}
                  </p>
                </div>
              </div>
            </GoLeft>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Info;
