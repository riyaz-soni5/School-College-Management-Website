import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger icon
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
    <header className="w-full bg-[var(--primary-color)] flex justify-between items-center px-4 py-3 md:justify-around relative z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <Link to="/">
          <img
            src={mountainLogo}
            alt="School Logo"
            className="w-12 h-12 object-contain"
          />
        </Link>
        <Link to="/">
          <img
            src={textLogo}
            alt="Text Logo"
            className="w-28 h-10 object-contain"
          />
        </Link>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center px-5 gap-x-5 lg:gap-x-20">
        {navItems.map((item) => (
          <li
            key={item.name}
            className="relative group cursor-pointer text-base text-[var(--secondary-color)] transition-colors duration-300 ease-in-out"
          >
            <NavLink
              to={item.path}
              className="inline-block transition-colors duration-300 ease-in-out group-hover:text-blue-600"
            >
              {item.name}
            </NavLink>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[var(--secondary-color)]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-[var(--primary-color)] flex flex-col items-start gap-3 p-5 border-t border-gray-300 md:hidden animate-slide-down">
          {navItems.map((item) => (
            <li key={item.name} className="w-full">
              <NavLink
                to={item.path}
                onClick={() => setMenuOpen(false)} // close menu on click
                className="block w-full text-[var(--secondary-color)] text-lg py-2 hover:text-blue-600 transition-colors duration-300"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Header;
