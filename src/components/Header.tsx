import { NavLink, Link } from "react-router-dom";
import mountainLogo from "../assets/imgs/Main-logo-mountain.png";
import textLogo from "../assets/imgs/Main-logo-text.png";

function Header() {
  return (
    <header className="w-full bg-(--primary-color) justify-start md:justify-center flex">
      <div className="header-wraper flex items-center gap-x-[20vw]">
        <div className="flex items-center p-1">
          <Link to="/">
            <img
              src={mountainLogo}
              alt="School Logo"
              className="nav-logo w-15 h-15"
            />{" "}
          </Link>
          <Link to="/">
            <img src={textLogo} alt="" className="nav-logo w-30 h-10" />
          </Link>
        </div>
        {/* <ul className=" md:flex lg:gap-x-20 gap-x-5 hidden  items-center px-5 *:hover:border-b-4  *:text-(--secondary-color) *:text-base">
          <li className="transition-border-b delay-500 ease-in-out">
            {" "}
            <NavLink to="/">Home</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/about">About Everest</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/academic-programs">Academic Programs</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/admission">Admission</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/news">News</NavLink>{" "}
          </li>
        </ul> */}
        <ul className="hidden md:flex items-center px-5 gap-x-5 lg:gap-x-20">
          {[
            { name: "Home", path: "/" },
            { name: "About Everest", path: "/about" },
            { name: "Academic Programs", path: "/academic-programs" },
            { name: "Admission", path: "/admission" },
            { name: "News", path: "/news" },
          ].map((item) => (
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

              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
