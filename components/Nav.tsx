function Nav() {
  const navs = [
    "Home",
    "Publications",
    "Supervision",
    "Media",
    "Teaching",
    "Services",
    "Contact",
  ];

  return (
    <header className="border-b border-gray-700 flex justify-between px-2 ">
      <p className="p-3">Mohammed Lamine Kherfi, PhD</p>
      <nav className="lg:flex hidden">
        {navs.map((nav) => (
          <p
            key={nav}
            className={`p-3 hover:bg-gray-800 cursor-pointer ${
              nav === "Contact" ? "px-10" : ""
            }`}
          >
            {nav}
          </p>
        ))}
      </nav>
    </header>
  );
}

export default Nav;
