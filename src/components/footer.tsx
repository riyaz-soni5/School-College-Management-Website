import logo from "../../public/Main-logo-full.png";
import { Facebook, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <div className="footerwraper flex flex-col items-center bg-[var(--secondary-color)] text-[var(--primary-color)]">
      {/* Main Footer Section */}
      <footer className="flex flex-col md:flex-row flex-wrap justify-center md:justify-between items-center md:items-start gap-10 md:gap-20 p-8 w-full max-w-6xl">
        {/* Logo + Address */}
        <section className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="logo bg-[var(--primary-color)] rounded-lg p-2 w-40 md:w-48">
            <img src={logo} alt="Everest School Logo" className="w-full" />
          </div>
          <p className="mt-3 text-sm md:text-base">Kathmandu, Nepal</p>
        </section>

        {/* Quick Links */}
        <section className="Footer-nav text-center md:text-left">
          <ul className="space-y-1">
            <li className="font-bold text-lg mb-2">Quick Links</li>
            <li className="font-thin hover:underline cursor-pointer">Home</li>
            <li className="font-thin hover:underline cursor-pointer">About</li>
            <li className="font-thin hover:underline cursor-pointer">Academic Programs</li>
            <li className="font-thin hover:underline cursor-pointer">Admission</li>
            <li className="font-thin hover:underline cursor-pointer">News</li>
          </ul>
        </section>

        {/* Programmes */}
        <section className="Programmes text-center md:text-left">
          <ul className="space-y-1">
            <li className="font-bold text-lg mb-2">Programmes</li>
            <li className="font-thin">School</li>
            <li className="font-thin">High School / +2</li>
          </ul>
        </section>

        {/* Contact + Socials */}
        <section className="Contact text-center md:text-left">
          <ul className="space-y-1">
            <li className="font-bold text-lg mb-2">Contact Us</li>
            <li className="font-thin">01-1234567, 01-1234568</li>
            <li className="font-thin">info@everestinternational.edu.np</li>
            <li className="font-bold mt-5 text-lg">Follow Us</li>
            <li className="flex justify-center md:justify-start gap-4 mt-2">
              <Facebook className="cursor-pointer hover:text-blue-500 transition-colors" />
              <Instagram className="cursor-pointer hover:text-pink-500 transition-colors" />
              <Linkedin className="cursor-pointer hover:text-blue-700 transition-colors" />
            </li>
          </ul>
        </section>
      </footer>

      {/* Bottom Bar */}
      <div className="w-full text-center">
        <p className="p-4 bg-[#003476] text-white text-sm md:text-base">
          © 2025 Everest International School. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
