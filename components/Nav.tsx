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
    <header className="p-1  sticky top-0 bg-white w-full z-10 text-lg">
      <section className="flex justify-around items-center">
        <p className="p-3">Pr. Mohammed Lamine Kherfi</p>
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
            className="fixed right-2 rounded-md top-[4rem] grid bg-white text-black px-6 text-center"
            style={{ boxShadow: "0px 0px 3px gray" }}
          >
            {navs.map((nav) => (
              <p key={nav} className="p-3 cursor-pointer">
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
