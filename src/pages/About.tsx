import schoolImg from "../assets/imgs/school.jpg";
import goalsImg from "../assets/imgs/goals.jpg";
import awardsImg from "../assets/imgs/awards.jpg";
import historyBg from "../assets/imgs/history.jpeg";

export default function AboutEIS() {
  return (
    <div className="bg-[var(--secondary-color)] text-[var(--primary-color)]">
      {/* About Overview */}
      <div className="container flex flex-col items-center gap-6 py-16 px-4 sm:px-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          About Everest International School
        </h1>

        <p className="leading-relaxed text-justify text-[var(--primary-color)]/90">
          Everest International School (EIS), located in the heart of Kathmandu,
          is a modern institution dedicated to nurturing the leaders of
          tomorrow. Since its establishment, EIS has become one of the leading
          schools in Nepal, known for academic excellence, innovation in
          teaching, and a global perspective that prepares students for success
          in higher education and beyond. Our commitment to a dynamic learning
          environment and state-of-the-art facilities ensures that every student
          can reach their full potential.
        </p>

        <p className="text-[var(--primary-color)]/80 leading-relaxed text-justify">
          At EIS, we believe in holistic education. Our vision combines strong
          academic programs with a wide array of extracurricular opportunities,
          fostering not just intellectual growth but also creativity,
          discipline, and character development among our students. We provide a
          supportive and inclusive community where students are encouraged to
          explore their interests, challenge themselves, and develop a lifelong
          love for learning.
        </p>
      </div>

      {/* History Section */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${historyBg})`,
          minHeight: "400px",
        }}
      >
        {/* Gradient Overlay  */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-900/30"></div>

        {/* Content */}
        <div className="relative text-white container px-4 sm:px-6 py-16 space-y-6">
          <h2 className="text-3xl font-semibold text-center md:text-left">
            Our History
          </h2>
          <p className="leading-relaxed text-justify">
            Established in the early 2000s, Everest International School began
            with a simple yet ambitious mission — to provide a high-quality
            education that meets global standards while preserving and
            celebrating Nepal’s rich cultural values. The founding members
            envisioned a school that would serve as a beacon of academic
            excellence and personal growth.
          </p>
          <p className="leading-relaxed text-justify">
            From its humble beginnings with a small group of dedicated educators
            and students, EIS has grown exponentially, expanding its curriculum
            and facilities. We've embraced modern teaching practices, integrated
            cutting-edge technology into our classrooms, and built a reputation
            for extracurricular excellence, shaping thousands of students into
            responsible and compassionate global citizens who are ready to make
            a positive impact on the world.
          </p>
          <p className="leading-relaxed text-justify">
            Over the years, our commitment to innovation has led us to adopt a
            project-based learning model, fostering critical thinking and
            collaborative problem-solving. We have continuously invested in our
            infrastructure, including modern science labs, a well-stocked
            library, and state-of-the-art sports facilities, to provide a
            comprehensive learning environment. Our alumni network now spans the
            globe, with graduates excelling in various fields, from science and
            technology to arts and public service, a testament to the strong
            foundation they received at EIS. Our journey is a story of
            continuous improvement and a relentless pursuit of our founding
            vision.
          </p>
        </div>
      </div>

      {/*  Goals Section */}
      <div className="bg-[var(--primary-color)] text-[var(--secondary-color)] py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 sm:px-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Goals</h2>
            <ul className="list-disc list-inside space-y-3 text-justify">
              <li>
                Provide world-class education with a strong emphasis on critical
                thinking, problem-solving, and a deep understanding of core
                subjects, preparing students for success in any field they
                choose.
              </li>
              <li>
                Develop confidence, leadership skills, and a strong sense of
                personal responsibility in students, empowering them to become
                proactive and influential members of their communities.
              </li>
              <li>
                Promote cultural understanding and respect in a diverse and
                inclusive community, fostering an environment where students
                learn from each other and appreciate different perspectives.
              </li>
              <li>
                Encourage innovation, creativity, and adaptability through
                project-based learning and technological integration, ensuring
                our students are well-prepared for a rapidly changing world.
              </li>
              <li>
                Support holistic development through a balanced approach to
                academics, sports, arts, and technology, helping students find
                their passions and develop a well-rounded character.
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src={schoolImg}
              alt="EIS Goals"
              className="rounded-xl shadow-md object-cover w-full max-w-md md:max-w-full"
            />
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-[var(--secondary-color)] text-[var(--primary-color)] py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 sm:px-6">
          <div className="flex justify-center order-1 md:order-none">
            <img
              src={goalsImg}
              alt="EIS Achievements"
              className="rounded-xl shadow-md object-cover w-full max-w-md md:max-w-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
            <ul className="list-disc list-inside space-y-3 text-justify">
              <li>
                Consistently produced excellent results in national and
                international examinations, including SEE, +2, and various
                international board exams, with a high percentage of students
                achieving top grades.
              </li>
              <li>
                A significant number of our students securing full scholarships
                at prestigious universities and colleges in Nepal, as well as in
                the USA, UK, Australia, and other countries.
              </li>
              <li>
                Recognized for outstanding performance in various inter-school
                competitions, including winning national championships in
                sports, debating, and science fairs.
              </li>
              <li>
                Award-winning participation in regional and international
                events, showcasing our students' talents in science, technology,
                robotics, and cultural events.
              </li>
              <li>
                Successful community service initiatives and fundraising
                campaigns led by students, demonstrating their commitment to
                social responsibility and making a difference.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Special Awards Section */}
      <div className="bg-[var(--primary-color)] text-[var(--secondary-color)] py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-start px-4 sm:px-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Special Awards</h2>
            <ul className="list-disc list-inside space-y-3 text-justify">
              <li>
                The EIS Excellence Award for outstanding academic and
                extracurricular performance, celebrating students who embody the
                school's values and dedication to excellence.
              </li>
              <li>
                A robust scholarship program that provides financial assistance
                to meritorious students and those from underprivileged
                backgrounds, ensuring that a quality education is accessible to
                all.
              </li>
              <li>
                Annual recognition awards for leadership, innovation, and social
                service, highlighting students who have made significant
                contributions to the school community and beyond.
              </li>
              <li>
                The Principal's Honor Roll and Annual Merit Awards for
                top-performing students in national and international board
                exams, acknowledging their hard work and academic achievements.
              </li>
              <li>
                Awards and accolades from external organizations for our
                innovative curriculum, faculty development programs, and
                commitment to environmental sustainability.
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              src={awardsImg}
              alt="EIS Awards"
              className="rounded-xl shadow-md object-cover w-full max-w-md md:max-w-full"
            />
          </div>

          {/* Closing Paragraph */}
          <div className="col-span-1 md:col-span-2">
            <p className="bg-[var(--primary-color)] text-[var(--secondary-color)] leading-relaxed text-justify p-6 md:p-10 lg:p-16 rounded-xl shadow-sm">
              Everest International School is more than an institution—it’s a
              dynamic community where students are inspired to dream big and
              achieve their goals. Guided by experienced and passionate faculty
              and a progressive vision, EIS continues to uphold its mission of{" "}
              <span className="italic">
                "Excellence in Education with Global Values."
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
