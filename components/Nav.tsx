"use client";
import { IoMdMenu } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function Nav() {
  const pathname = usePathname();
  const pageSelected = pathname.split("/")[1];

  const [toggleNav, setToggleNav] = useState(false);
  const menuRef = useRef(null);
  const navs = [
    "Home",
    "Publications",
    "Supervision",
    "Media",
    "Teaching",
    "Services",
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !(menuRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setToggleNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="border-b border-gray-700 px-2 fixed w-full bg-black">
      <section className="flex justify-around items-center">
        <p className="p-3 text-base">Pr. Mohammed Lamine Kherfi</p>
        <nav className="lg:flex hidden">
          {navs.map((nav) => (
            <p
              key={nav}
              className="p-3 underlined-hover cursor-pointer relative"
            >
              {nav}
            </p>
          ))}
        </nav>
        <div ref={menuRef} className="lg:hidden cursor-pointer">
          <IoMdMenu size={30} onClick={() => setToggleNav(!toggleNav)} />
        </div>
        {toggleNav && (
          <nav
            className="fixed right-2 rounded-md top-[3.2rem] grid bg-black px-6 text-center"
            style={{ boxShadow: "0px 0px 3px gray" }}
          >
            {navs.map((nav) => (
              <p key={nav} className="p-3 hover:bg-gray-800 cursor-pointer">
                {nav}
              </p>
            ))}
          </nav>
        )}
      </section>
    </header>
  );
}

export default Nav;
