import { useState } from "react";
import Slider from "react-slick";

import plus2Img from "../assets/imgs/plus2.jpg";

import scienceImg from "../assets/imgs/science.jpg";
import tourImg from "../assets/imgs/tour.jpg";
import singImg from "../assets/imgs/sing.jpg";
import swimmingImg from "../assets/imgs/swimming.jpg";
import danceImg from "../assets/imgs/dance.jpg";

// Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

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
      src: scienceImg,
      title: "Science Exhibition – Class 12 Innovators",
      desc: "Our Class 12 students proudly present their innovative science projects at the annual exhibition. From physics experiments to real-life chemistry applications, the exhibition nurtures curiosity, problem-solving, and practical understanding of scientific principles. It encourages teamwork, critical thinking, and inspires younger students to pursue STEM fields with passion.",
    },
    {
      src: tourImg,
      title: "International Tour to London",
      desc: "Students embark on an international learning experience with a guided tour to London. This journey allows them to explore world-renowned universities, museums, and cultural landmarks while broadening their global perspective. The program enhances intercultural awareness, independence, and confidence—preparing learners for opportunities beyond national boundaries.",
    },
    {
      src: singImg,
      title: "School Fest",
      desc: "The annual school fest is a celebration of talent, creativity, and school spirit. Students take part in cultural performances, art exhibitions, talent shows, and fun competitions. The event provides a platform to showcase artistic skills, leadership, and teamwork while building lasting friendships and joyful memories.",
    },
    {
      src: swimmingImg,
      title: "Swimming Competition",
      desc: "The swimming competition challenges students to push their limits in endurance, speed, and skill. Participants compete across different categories, developing resilience and sportsmanship. Beyond the medals, the event emphasizes discipline, healthy competition, and the importance of physical fitness in a well-rounded education.",
    },
    {
      src: danceImg,
      title: "Dance Icon – Celebrating Rhythm and Expression",
      desc: "Dance Icon is one of the most anticipated cultural highlights of the year, where students captivate audiences with their choreography and performances. It promotes self-expression, confidence, and creativity while connecting learners to diverse traditions through the art of dance. The event fosters teamwork, stage presence, and a spirit of celebration..",
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
        style={{ backgroundImage: `url(${plus2Img})` }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-start px-6 sm:px-12 pt-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-60">
            NEB +2
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-gray-700 text-lg leading-relaxed">
          The NEB High School curriculum is a reputed and popular programme for
          students after completing their Secondary Education Examination (SEE).
          It is administered by the National Examinations Board (NEB) of Nepal.
          This two-year programme prepares learners for university degrees in
          Nepal or abroad. At Everest International School, we offer Science and
          Management streams, with a focus on academic excellence, leadership,
          and holistic growth.
        </p>
      </section>

      {/* Duration Box */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white shadow rounded p-4 text-gray-800 mb-10">
          <span className="font-semibold text-gray-900">Duration:</span> 2 years
        </div>
      </div>

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
                    <p>English</p>
                    <p>Nepali</p>
                    <p>Mathematics</p>
                    <p>Chemistry</p>
                    <p>Physics</p>
                    <p>Biology</p>
                    <p>Computer Science</p>
                  </div>
                  <div className="space-y-2">
                    <p>Social Studies & Life Skills</p>
                    <p>Mathematics (Optional)</p>
                    <p>Economics</p>
                    <p>Marketing</p>
                    <p>Business Mathematics</p>
                    <p>Accounting</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "eligibility" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Eligibility</h3>
                <p className="leading-relaxed">
                  To be eligible for admission to the NEB programs at{" "}
                  <strong>Everest International School</strong>, applicants must
                  have successfully completed the Secondary Education
                  Examination (SEE) or an equivalent qualification.
                  <br />
                  <br />
                  For the <strong>Science Stream</strong>, students must achieve
                  at least a{" "}
                  <strong>
                    Grade C+ in English, Science, and Compulsory Mathematics
                  </strong>
                  . Additional Mathematics is strongly preferred for students
                  planning to specialize in science or technology fields, though
                  it is not compulsory for those choosing Social Studies & Life
                  Skills.
                  <br />
                  <br />
                  For the <strong>Management Stream</strong>, students are
                  required to have secured a minimum of{" "}
                  <strong>Grade C in English and Mathematics</strong>.
                  Candidates meeting these requirements will be considered for
                  further admission procedures.
                </p>
              </div>
            )}

            {activeTab === "pedagogy" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Pedagogy</h3>
                <p className="leading-relaxed">
                  At <strong>Everest International School</strong>, we adopt an
                  interactive and student-centered teaching approach. Learning
                  extends beyond textbooks, with an emphasis on developing
                  critical thinking, creativity, and confidence.
                  <br />
                  <br />
                  With limited class sizes, our teachers provide personalized
                  attention and guidance to every learner. Students are
                  continuously assessed through unit tests, terminal
                  examinations, project work, and group presentations.
                  <br />
                  <br />
                  To enrich classroom learning, we regularly organize{" "}
                  <em>
                    workshops, exhibitions, field visits, and guest lectures
                  </em>{" "}
                  from industry experts in medicine, engineering, business, and
                  the sciences. This holistic approach ensures that our students
                  are responsible, reflective, and well-prepared for their
                  future careers.
                </p>
              </div>
            )}

            {activeTab === "exam" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Entrance Exam Procedure
                </h3>
                <p className="leading-relaxed">
                  Applicants from outside Everest International School who meet
                  the eligibility requirements must appear for a{" "}
                  <strong>written entrance examination</strong> followed by a{" "}
                  <strong>personal interview</strong>. The exam format is as
                  follows:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>
                    <strong>Science Stream:</strong> English, Combined Science
                    (Physics & Chemistry), and Mathematics.{" "}
                    <em>Duration: 2 hours</em>.
                  </li>
                  <li>
                    <strong>Management Stream:</strong> English and Mathematics.{" "}
                    <em>Duration: 1 hour</em>.
                  </li>
                </ul>
                <p className="leading-relaxed">
                  The entrance test includes both multiple-choice and
                  short-answer questions to evaluate subject knowledge, logical
                  reasoning, and problem-solving ability. Qualified candidates
                  are invited for an interview with their parents or guardians.
                  Admission is finalized based on combined performance in the
                  examination and the interview.
                  <br />
                  <br />
                  Please note: Once admitted,{" "}
                  <strong>fees are non-refundable</strong> in case of
                  cancellation or withdrawal of admission.
                </p>
              </div>
            )}

            {activeTab === "scholarship" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Scholarships</h3>
                <p className="leading-relaxed">
                  At <strong>Everest International School</strong>, we believe
                  in rewarding excellence and supporting deserving students
                  through our{" "}
                  <strong>Elite Athletic & Academic Scholarship</strong>{" "}
                  program. We offer both{" "}
                  <strong>full and partial scholarships</strong> to meritorious
                  learners who demonstrate outstanding achievements in academics
                  or sports.
                  <br />
                  <br />
                  Scholarships are awarded in various categories:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>
                    <strong>Academic Excellence:</strong> Students securing top
                    grades in the Secondary Education Examination (SEE) or
                    excelling in internal assessments may receive tuition fee
                    waivers or partial scholarships to encourage continuous
                    academic growth.
                  </li>
                  <li>
                    <strong>Athletic Achievements:</strong> Learners who
                    represent the school or country in sports such as swimming,
                    football, athletics, or basketball are eligible for
                    recognition and financial support, ensuring they balance
                    both sports and studies successfully.
                  </li>
                  <li>
                    <strong>Leadership & Co-Curricular:</strong> Exceptional
                    contributions in debates, arts, cultural programs, or
                    leadership roles are considered for partial scholarships,
                    motivating students to pursue holistic development beyond
                    academics.
                  </li>
                  <li>
                    <strong>Need-Based Support:</strong> In special cases,
                    scholarships may also be extended to students from
                    financially constrained backgrounds who display strong
                    determination and academic potential.
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Through these scholarships, Everest International School
                  ensures that talent and dedication are nurtured, removing
                  financial barriers and empowering students to achieve their
                  full potential.
                </p>
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
