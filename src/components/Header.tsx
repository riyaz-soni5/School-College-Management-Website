import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import mountainLogo from "../assets/imgs/Main-logo-mountain.png";
import textLogo from "../assets/imgs/Main-logo-text.png";
import Marquee from "react-fast-marquee";
import { newsData } from "../data/newsData";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Everest", path: "/about" },
    { name: "Academic Programs", path: "/academic-programs" },
    { name: "Admission", path: "/admission" },
    { name: "News", path: "/news" },
  ];

  return (
    <header className="w-full bg-[var(--primary-color)] relative z-50">
      {/* Logo + Navigation  */}
      <div className="flex justify-between items-center px-4 py-3 md:justify-around">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src={mountainLogo} className="w-12 h-12 object-contain" />
          </Link>
          <Link to="/">
            <img src={textLogo} className="w-28 h-10 object-contain" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center px-5 gap-x-5 lg:gap-x-20">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="relative group cursor-pointer text-base text-[var(--secondary-color)]"
            >
              <NavLink to={item.path} className="group-hover:text-blue-600">
                {item.name}
              </NavLink>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--secondary-color)]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-[var(--primary-color)] flex flex-col gap-3 p-5 border-t border-gray-300 animate-slide-down">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-lg text-[var(--secondary-color)] hover:text-blue-600"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}

      {/* Marquee  */}
      <div className="bg-white border-t border-gray-300 flex items-center w-full">
        <div className="bg-red-700 text-white px-4 py-2 font-semibold">
          Recent News
        </div>

        <div className="flex-1 overflow-hidden">
          <Marquee gradient={false} speed={100}>
            {newsData.slice(0, 3).map((news) => (
              <div key={news.id} className="px-6 flex items-center space-x-2">
                <span className="text-red-600">✔</span>
                <span className="text-red-600 font-medium">{news.title}</span>
                <span className="text-gray-500 text-sm">({news.date})</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </header>
  );
}

export default Header;
