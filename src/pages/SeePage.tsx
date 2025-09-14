import { useEffect, useState } from "react";
import Slider from "react-slick";

import seeImg from "../assets/imgs/see.jpg";

import parentsDayImg from "../assets/imgs/parentsDay.jpg";
import sportsDayImg from "../assets/imgs/sports.jpg";
import certificateImg from "../assets/imgs/certificate.jpg";
import fieldImg from "../assets/imgs/field.jpg";
import meetImg from "../assets/imgs/meet.jpg";

// Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Plus2Page() {
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

  // Array with title + description for each image
  const beyondImages = [
    {
      src: meetImg,
      title: "Parent-Teacher Meet",
      desc: "A collaborative platform where parents and teachers discuss each child's academic progress, personal growth, and learning strategies. Regular meetings strengthen the partnership between home and school, ensuring students receive consistent guidance and support.",
    },
    {
      src: parentsDayImg,
      title: "Parent's Day - Class 2",
      desc: "An annual event dedicated to celebrating the achievements and creativity of our Class 2 students. Parents enjoy class presentations, performances, and exhibitions, creating memorable moments while appreciating their children's talents.",
    },
    {
      src: sportsDayImg,
      title: "Sports Day - Classes 1 to 10",
      desc: "A vibrant celebration of athletic spirit, teamwork, and healthy competition. Students from Grades 1-10 participate in a variety of track and field events, relays, and fun games, fostering sportsmanship and overall physical development.",
    },
    {
      src: certificateImg,
      title: "Academic Excellence Felicitation Programme / SEE",
      desc: "A proud occasion where outstanding performers in the Secondary Education Examination (SEE) are recognized for their dedication and hard work. This ceremony motivates students across all grades to aim higher in their academic journey.",
    },
    {
      src: fieldImg,
      title: "Field Trip - Class 5",
      desc: "A hands-on learning experience designed to broaden student's horizons. Through visits to museums, historical sites, or nature reserves, Grade 5 learners explore new environments and connect classroom knowledge with the real world.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-gray-50">
      {/* Banner Section */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat h-56 sm:h-64 md:h-80 lg:h-96"
        style={{ backgroundImage: `url(${seeImg})` }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-start px-6 sm:px-12 pt-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-60">
            Secondary Education (Grade 1-10, SEE)
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-gray-700 text-lg leading-relaxed">
          Everest International School offers a comprehensive{" "}
          <strong>Secondary Education Programme (Grades 1-10)</strong>,
          culminating in the nationally recognized{" "}
          <strong>Secondary Education Examination (SEE)</strong>. Our curriculum
          blends the guidelines of Nepal's National Curriculum with modern
          teaching approaches, helping students build strong foundations in
          academics, character, and life skills. From early literacy in Grade 1
          to the rigorous SEE preparations in Grade 10, we aim to nurture
          confident, responsible, and creative learners.
        </p>
      </section>

      {/* Duration Box
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white shadow rounded p-4 text-gray-800 mb-10">
          <span className="font-semibold text-gray-900">Duration:</span> 2 years
        </div>
      </div> */}

      {/* NEB Details */}
      <section className="bg-[#0a4d92] text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Tabs */}
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

          {/* Content */}
          <div className="bg-white text-blue-900 rounded-lg p-8 shadow-lg">
            {activeTab === "subjects" && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Subjects Offered</h3>
                <div className="grid grid-cols-2 gap-y-4 gap-x-16 text-lg">
                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">Core Languages:</span>{" "}
                      Nepali, English
                    </p>
                    <p>
                      <span className="font-semibold">Mathematics:</span> Basic
                      Math (Grades 1–8), Advanced Math &amp; Optional
                      Mathematics (Grades 9–10)
                    </p>
                    <p>
                      <span className="font-semibold">Science:</span> General
                      Science (Grades 1–8), Physics, Chemistry, Biology (Grades
                      9–10)
                    </p>
                    <p>
                      Social Studies &amp; E.P.H. (Environment, Population &amp;
                      Health)
                    </p>
                    <p>Computer Science / ICT</p>
                  </div>
                  <div className="space-y-2">
                    <p>Moral Education &amp; Value Education</p>
                    <p>Arts, Music, and Creative Activities</p>
                    <p>Physical Education &amp; Sports</p>
                    <p>
                      Optional subjects offered in upper grades (e.g.,
                      Accountancy, Additional Language) as per student interest
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "eligibility" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Eligibility</h3>
                <p className="leading-relaxed">
                  To be eligible for admission to the Secondary Education at{" "}
                  <strong>Everest International School</strong>, folowing points
                  need to be followed.
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>
                    Admission is open to all children who meet the age
                    requirement for the respective grade.
                  </li>
                  <li>
                    Applicants must demonstrate readiness for the academic level
                    through an entrance/placement assessment.
                  </li>
                  <li>
                    For Grades 9–10, students must show satisfactory progress in
                    lower grades or present equivalent transcripts from a
                    recognized school.
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "pedagogy" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Pedagogy</h3>
                <p className="leading-relaxed">
                  We follow a{" "}
                  <strong>student-centred, activity-based approach</strong> that
                  encourages critical thinking, creativity, and collaboration.
                  Teaching strategies include:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>
                    Interactive lessons with discussions, projects, and
                    presentations.
                  </li>
                  <li>Integration of ICT tools and multimedia resources.</li>
                  <li>
                    Continuous assessment through classwork, assignments, and
                    periodic tests.
                  </li>
                  <li>
                    Field visits, exhibitions, and co-curricular activities to
                    connect theory with real life.
                  </li>
                  <li>
                    Special support classes and remedial sessions to help
                    students meet learning goals.
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "exam" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Entrance Exam Procedure
                </h3>
                {/* Grade 1 */}
                <span className="font-semibold">For admission to Grade 1</span>

                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>
                    Children attend a friendly entrance test focusing on basic
                    literacy (letters, sounds, simple words) and numeracy
                    (number sense, shapes, counting).
                  </li>
                  <li>
                    An informal interaction with parents helps us understand the
                    child's needs and readiness.
                  </li>
                </ul>
                <br />

                {/* Grade 2-10 */}
                <span className="font-semibold">
                  For mid-year or transfer admissions (Grades 2-10)
                </span>

                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>
                    Candidates sit for placement tests in core subjects such as
                    English, Mathematics, and Science.
                  </li>
                  <li>
                    An interview with the Academic Coordinator or Principal
                    assesses learning habits, social skills, and suitability for
                    our programme.
                  </li>
                  <li>
                    Previous academic records and conduct certificates are
                    reviewed to ensure smooth placement.
                  </li>
                  <li>
                    Based on performance, students may be offered orientation or
                    bridging classes before joining regular lessons.
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "scholarship" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Scholarships</h3>
                <p className="leading-relaxed">
                  At <strong>Everest International School</strong>,scholarships
                  are awarded to:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Academically strong students with financial need.</li>
                  <li>
                    Students demonstrating excellence in sports or
                    extracurricular activities.
                  </li>
                </ul>
                <p className="leading-relaxed">
                  <strong>Important Notes:</strong>
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>
                    Scholarships are not provided to students who are
                    financially well-to-do.
                  </li>
                  <li>
                    Applications open one week after the start of each academic
                    session. Required documents include: - Parent's income proof
                    or unemployment certificate, - Parent's citizenship &
                    residence proof, - Recommendation from local authority
                    (ward/municipality)
                  </li>
                  <li>
                    Scholarships are reviewed yearly. Students must maintain 50%
                    and above in academics and show good conduct to continue
                    receiving support.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Beyond Academic Excellence (Slick Slider) */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          Beyond Academic <span className="font-bold">Excellence</span>
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          We encourage students to explore opportunities beyond the classroom.
          Activities such as robotics, swimming, debates, music, field trips,
          and cultural events foster creativity, teamwork, and leadership
          skills—leaving a lasting impact on their journey at Everest
          International School.
        </p>

        <Slider {...sliderSettings}>
          {beyondImages.map((item, index) => (
            <div key={index} className="px-2">
              <div className="relative group rounded-lg overflow-hidden shadow-md">
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="object-cover w-full h-72 sm:h-80 md:h-96 transform group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
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
