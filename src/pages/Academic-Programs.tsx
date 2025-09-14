import { Link } from "react-router-dom";
import seeImg from "../assets/imgs/see.jpg";
import plus2Img from "../assets/imgs/plus2.jpg";
import heroImg from "../assets/imgs/hero.png"; // <-- use your banner image here

export default function AcademicPrograms() {
  return (
    <div className="bg-gray-50">
      {/* Banner Section */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat h-56 sm:h-64 md:h-80 lg:h-96"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-start px-6 sm:px-12 pt-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-60">
            Academic Programs
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-12 text-center px-4">
        <p className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
          At <span className="font-semibold">Everest International School</span>
          , our academic programs are designed to inspire excellence, curiosity,
          and lifelong learning. We combine a strong academic curriculum with
          co-curricular opportunities, fostering intellectual growth,
          creativity, and moral values in every student. From building a solid
          foundation in secondary education to preparing for higher studies, our
          programs equip learners with the skills, confidence, and global
          perspective they need to thrive in an ever-changing world.
        </p>
      </section>

      {/* Program Options */}
      <section className="max-w-6xl mx-auto py-12 px-4 space-y-16">
        {/* SEE Program */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src={seeImg}
              alt="SEE Program"
              className="rounded-xl shadow-lg object-cover w-full  h-64 sm:h-72 md:h-80"
            />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">
              Secondary Education Examination (SEE)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our SEE program focuses on building a solid academic foundation
              while nurturing students’ creativity, analytical thinking, and
              moral values. With highly qualified teachers, modern resources,
              and personalized guidance, we prepare students to succeed in their
              secondary education and beyond.
            </p>
            <Link
              to="/academic-programs/see"
              className="inline-block px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* +2 Program */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 space-y-4 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">
              NEB +2
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our +2 program offers diverse streams with in-depth academic
              coverage, preparing students for higher education in Nepal and
              abroad. From science to management, we focus on intellectual
              growth, leadership, and practical learning opportunities to equip
              students with the skills they need for success.
            </p>
            <Link
              to="/academic-programs/plus2"
              className="inline-block px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Learn More
            </Link>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <img
              src={plus2Img}
              alt="+2 Program"
              className="rounded-xl shadow-lg object-cover w-full  h-64 sm:h-72 md:h-80"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
