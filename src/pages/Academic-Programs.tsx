import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Slider from "react-slick";

// Images
import heroImg from "../assets/imgs/hero.png";
import seeImg from "../assets/imgs/see.jpg";
import plus2Img from "../assets/imgs/plus2.jpg";

// Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  seeContent,
  plus2Content,
  beyondImages,
} from "../data/Academic-Programs";

// ================== SEE PAGE ==================
function SeePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("subjects");

  const tabs = [
    { id: "subjects", label: "Subjects Offered" },
    { id: "eligibility", label: "Eligibility" },
    { id: "pedagogy", label: "Pedagogy" },
    { id: "exam", label: "Entrance Exam Procedure" },
    { id: "scholarship", label: "Scholarship" },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 1500,
    // arrows: true,
    // responsive: [
    //   { breakpoint: 1024, settings: { slidesToShow: 2 } },
    //   { breakpoint: 640, settings: { slidesToShow: 1 } },
    // ],
  };

  return (
    <div className="bg-gray-50">
      {/* Banner */}
      <div
        className="relative w-full h-64 md:h-80 lg:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${seeImg})` }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center px-6">
          <div className="max-w-5xl mx-auto w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-40">
              Secondary Education (SEE)
            </h1>
          </div>
        </div>
      </div>

      {/* Intro paragraph */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-lg text-gray-700 text-justify">{seeContent.intro}</p>
      </section>

      {/* Tabs */}
      <section className="bg-[var(--secondary-color)] text-white py-12 min-h-[560px]">
        <div className="max-w-5xl mx-auto px-6 h-full">
          <div className="flex flex-wrap border-b border-gray-400 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 font-medium text-sm uppercase border-t border-l border-r ${
                  activeTab === tab.id
                    ? "bg-white text-blue-900"
                    : "bg-[#f5f5f5] text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white text-blue-900 rounded-lg p-10 shadow-lg space-y-4 h-105">
            {activeTab === "subjects" &&
              Array.isArray(seeContent.subjects) &&
              seeContent.subjects.map((subj, i) => <p key={i}>{subj}</p>)}

            {activeTab === "eligibility" &&
              Array.isArray(seeContent.eligibility) &&
              seeContent.eligibility.map((item, i) =>
                item.type === "paragraph" ? (
                  <p key={i}>{item.text}</p>
                ) : item.type === "list" && item.items ? (
                  <ul key={i} className="list-disc pl-6">
                    {item.items.map((li, j) => (
                      <li key={j}>{li}</li>
                    ))}
                  </ul>
                ) : null
              )}

            {activeTab === "pedagogy" &&
              Array.isArray(seeContent.pedagogy) &&
              seeContent.pedagogy.map((item, i) =>
                item.type === "paragraph" ? (
                  <p key={i}>{item.text}</p>
                ) : item.type === "list" && item.items ? (
                  <ul key={i} className="list-disc pl-6">
                    {item.items.map((li, j) => (
                      <li key={j}>{li}</li>
                    ))}
                  </ul>
                ) : null
              )}

            {activeTab === "exam" &&
              Array.isArray(seeContent.exam) &&
              seeContent.exam.map((item, i) =>
                item.type === "paragraph" ? (
                  <p key={i}>{item.text}</p>
                ) : item.type === "list" && item.items ? (
                  <ul key={i} className="list-disc pl-6">
                    {item.items.map((li, j) => (
                      <li key={j}>{li}</li>
                    ))}
                  </ul>
                ) : null
              )}

            {activeTab === "scholarship" &&
              Array.isArray(seeContent.scholarship) &&
              seeContent.scholarship.map((item, i) =>
                item.type === "paragraph" ? (
                  <p key={i}>{item.text}</p>
                ) : item.type === "list" && item.items ? (
                  <ul key={i} className="list-disc pl-6">
                    {item.items.map((li, j) => (
                      <li key={j}>{li}</li>
                    ))}
                  </ul>
                ) : null
              )}
          </div>
        </div>
      </section>

      {/* Slider */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          Beyond Academic Excellence
        </h2>
        <p className="text-gray-700 mb-6 text-justify">{seeContent.beyond}</p>
        <Slider {...sliderSettings}>
          {beyondImages.map((item, index) => (
            <div key={index} className="px-2">
              <div className="relative group rounded-lg overflow-hidden shadow-md">
                <img
                  src={item.src}
                  alt={item.title}
                  className="object-cover w-full h-60 sm:h-64 md:h-72 transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}

// ================== PLUS 2 PAGE ==================
function Plus2Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeTab, setActiveTab] = useState("subjects");

  const tabs = [
    { id: "subjects", label: "Subjects Offered" },
    { id: "eligibility", label: "Eligibility" },
    { id: "pedagogy", label: "Pedagogy" },
    { id: "exam", label: "Entrance Exam Procedure" },
    { id: "scholarship", label: "Scholarship" },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 1500,
    // arrows: true,
    // responsive: [
    //   { breakpoint: 1024, settings: { slidesToShow: 2 } },
    //   { breakpoint: 640, settings: { slidesToShow: 1 } },
    // ],
  };

  return (
    <div className="bg-gray-50">
      {/* Banner */}
      <div
        className="relative w-full h-64 md:h-80 lg:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${plus2Img})` }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center px-6">
          <div className="max-w-5xl mx-auto w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-40">
              +2 NEB (SEE)
            </h1>
          </div>
        </div>
      </div>

      {/* Intro paragraph */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-lg text-gray-700 text-justify">
          {plus2Content.intro}
        </p>
      </section>

      {/* Duration */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-white shadow rounded p-4 text-gray-800 mb-10">
          <span className="font-semibold text-gray-900">Duration:</span> 2 years
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-[#0a4d92] text-white py-12 min-h-[560px]">
        <div className="max-w-5xl mx-auto px-6 h-full">
          <div className="flex flex-wrap border-b border-gray-400 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 font-medium text-sm uppercase border-t border-l border-r ${
                  activeTab === tab.id
                    ? "bg-white text-blue-900"
                    : "bg-[#f5f5f5] text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white text-blue-900 rounded-lg p-10 shadow-lg space-y-4 h-105">
            {activeTab === "subjects" &&
              Array.isArray(plus2Content.subjects) &&
              plus2Content.subjects.map((subj, i) => <p key={i}>{subj}</p>)}

            {activeTab === "eligibility" &&
              Array.isArray(plus2Content.eligibility) &&
              plus2Content.eligibility.map((item, i) =>
                item.type === "paragraph" ? (
                  <p key={i}>{item.text}</p>
                ) : item.type === "list" && item.items ? (
                  <ul key={i} className="list-disc pl-6">
                    {item.items.map((li, j) => (
                      <li key={j}>{li}</li>
                    ))}
                  </ul>
                ) : null
              )}

            {activeTab === "pedagogy" &&
              Array.isArray(plus2Content.pedagogy) &&
              plus2Content.pedagogy.map((item, i) =>
                item.type === "paragraph" ? (
                  <p key={i}>{item.text}</p>
                ) : item.type === "list" && item.items ? (
                  <ul key={i} className="list-disc pl-6">
                    {item.items.map((li, j) => (
                      <li key={j}>{li}</li>
                    ))}
                  </ul>
                ) : null
              )}

            {activeTab === "exam" &&
              Array.isArray(plus2Content.exam) &&
              plus2Content.exam.map((item, i) =>
                item.type === "paragraph" ? (
                  <p key={i}>{item.text}</p>
                ) : item.type === "list" && item.items ? (
                  <ul key={i} className="list-disc pl-6">
                    {item.items.map((li, j) => (
                      <li key={j}>{li}</li>
                    ))}
                  </ul>
                ) : null
              )}

            {activeTab === "scholarship" &&
              Array.isArray(plus2Content.scholarship) &&
              plus2Content.scholarship.map((item, i) =>
                item.type === "paragraph" ? (
                  <p key={i}>{item.text}</p>
                ) : item.type === "list" && item.items ? (
                  <ul key={i} className="list-disc pl-6">
                    {item.items.map((li, j) => (
                      <li key={j}>{li}</li>
                    ))}
                  </ul>
                ) : null
              )}
          </div>
        </div>
      </section>

      {/* Slider */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          Beyond Academic Excellence
        </h2>
        <p className="text-gray-700 mb-6 text-justify">{plus2Content.beyond}</p>
        <Slider {...sliderSettings}>
          {beyondImages.map((item, index) => (
            <div key={index} className="px-2">
              <div className="relative group rounded-lg overflow-hidden shadow-md">
                <img
                  src={item.src}
                  alt={item.title}
                  className="object-cover w-full h-60 sm:h-64 md:h-72 transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}

// ================== MAIN ACADEMIC PROGRAM PAGE ==================
export default function AcademicPrograms() {
  return (
    <Routes>
      {/* Overview Page */}
      <Route
        index
        element={
          <div className="bg-gray-50">
            {/* Banner */}
            <div
              className="relative w-full bg-cover bg-center h-64 md:h-80 lg:h-96"
              style={{ backgroundImage: `url(${heroImg})` }}
            >
              <div className="absolute inset-0 bg-black/40 flex items-center px-6">
                <h1 className="text-3xl md:text-5xl font-bold text-white mt-40 ml-22">
                  Academic Programs
                </h1>
              </div>
            </div>

            {/* Programs */}
            <section className="max-w-6xl mx-auto py-12 px-4 space-y-16">
              {/* SEE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <img
                  src={seeImg}
                  alt="SEE"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
                <div>
                  <h2 className="text-2xl font-semibold text-blue-900">SEE</h2>
                  <p className="text-gray-700 text-justify">
                    Our SEE program focuses on building a solid academic
                    foundation while nurturing students’ creativity, analytical
                    thinking, and moral values. With highly qualified teachers,
                    modern resources, and personalized guidance, we prepare
                    students to succeed in their secondary education and beyond.
                  </p>
                  <Link
                    to="see"
                    className="inline-block mt-4 px-6 py-3 bg-blue-800 text-white rounded-lg"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* +2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-semibold text-blue-900">
                    NEB +2
                  </h2>
                  <p className="text-gray-700 text-justify">
                    {" "}
                    Our +2 program offers diverse streams with in-depth academic
                    coverage, preparing students for higher education in Nepal
                    and abroad. From science to management, we focus on
                    intellectual growth, leadership, and practical learning
                    opportunities to equip students with the skills they need
                    for success.
                  </p>
                  <Link
                    to="plus2"
                    className="inline-block mt-4 px-6 py-3 bg-blue-800 text-white rounded-lg"
                  >
                    Learn More
                  </Link>
                </div>
                <img
                  src={plus2Img}
                  alt="+2"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </section>
          </div>
        }
      />
      Sub-routes
      <Route path="see" element={<SeePage />} />
      <Route path="plus2" element={<Plus2Page />} />
    </Routes>
  );
}
