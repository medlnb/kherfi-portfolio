"use client";
import { IoMdMenu } from "react-icons/io";
import { useState, useEffect, useRef } from "react";

function Nav() {
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
    <header className="border-b border-gray-700  px-2 fixed w-full bg-black">
      <section className="flex justify-between items-center">
        <p className="p-3">Mohammed Lamine Kherfi, PhD</p>
        <nav className="lg:flex hidden">
          {navs.map((nav) => (
            <p key={nav} className="p-3 hover:bg-gray-800 cursor-pointer">
              {nav}
            </p>
          ))}
        </nav>
        <div ref={menuRef} className="lg:hidden cursor-pointer">
          <IoMdMenu size={20} onClick={() => setToggleNav(!toggleNav)} />
        </div>
      </section>
      {toggleNav && (
        <nav className="grid grid-cols-2 text-center">
          {navs.map((nav) => (
            <p key={nav} className="p-3 hover:bg-gray-800 cursor-pointer">
              {nav}
            </p>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Nav;
