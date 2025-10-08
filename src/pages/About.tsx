import schoolImg from "../assets/imgs/school.jpg";
import goalsImg from "../assets/imgs/goals.jpg";
import awardsImg from "../assets/imgs/awards.jpg";
import historyBg from "../assets/imgs/history.jpeg";

export default function AboutEIS() {
  return (
<<<<<<< HEAD
    <div className="bg-[var(--secondary-color)] pt-15">
      <div className="flex flex-col items-center gap-10 *:text-[var(--primary-color)]">
        {/* Section Title */}
        <h1 className="md:text-4xl text-2xl text-center">
          ABOUT EVEREST INTERNATIONAL SCHOOL
=======
    <div className="bg-[var(--secondary-color)] pt-20">
      {/* About Section */}
      <section className="max-w-[1100px] mx-auto px-6 flex flex-col items-center gap-10 text-[var(--primary-color)]">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          About Everest International School
>>>>>>> 3366ebb (Created Notice page, made some pages responsive, updated Admission page)
        </h1>

        <p className="leading-relaxed text-justify">
          Everest International School (EIS), located in the heart of Kathmandu,
          is a modern institution dedicated to nurturing the leaders of
          tomorrow. Since its establishment, EIS has become one of the leading
          schools in Nepal, known for academic excellence, innovation in
          teaching, and a global perspective that prepares students for success
          in higher education and beyond. Our commitment to a dynamic learning
          environment and state-of-the-art facilities ensures that every student
          can reach their full potential.
        </p>

        <p className="leading-relaxed text-justify text-[var(--primary-color)]/90">
          At EIS, we believe in holistic education. Our vision combines strong
          academic programs with a wide array of extracurricular opportunities,
          fostering not just intellectual growth but also creativity,
          discipline, and character development among our students. We provide a
          supportive and inclusive community where students are encouraged to
          explore their interests, challenge themselves, and develop a lifelong
          love for learning.
        </p>
      </section>

      {/* History Section */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat mt-16"
        style={{
          backgroundImage: `url(${historyBg})`,
          minHeight: "400px",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-900/20"></div>

<<<<<<< HEAD
          {/* Content */}
          <div className="relative text-white px-8 py-16 text-center space-y-6 ">
            <h2 className="md:text-4xl text-2xl font-bold text-center">OUR HISTORY</h2>
            <p className="max-w-4xl mx-auto leading-relaxed">
              Established in the early 2000s, Everest International School began
              with a simple yet ambitious mission — to provide a high-quality
              education that meets global standards while preserving and
              celebrating Nepal’s rich cultural values. The founding members
              envisioned a school that would serve as a beacon of academic
              excellence and personal growth.
            </p>
            <p className="max-w-4xl mx-auto leading-relaxed">
              From its humble beginnings with a small group of dedicated
              educators and students, EIS has grown exponentially, expanding its
              curriculum and facilities. We've embraced modern teaching
              practices, integrated cutting-edge technology into our classrooms,
              and built a reputation for extracurricular excellence, shaping
              thousands of students into responsible and compassionate global
              citizens who are ready to make a positive impact on the world.
            </p>
            <p className="max-w-4xl mx-auto leading-relaxed">
              Over the years, our commitment to innovation has led us to adopt a
              project-based learning model, fostering critical thinking and
              collaborative problem-solving. We have continuously invested in
              our infrastructure, including modern science labs, a well-stocked
              library, and state-of-the-art sports facilities, to provide a
              comprehensive learning environment. Our alumni network now spans
              the globe, with graduates excelling in various fields, from
              science and technology to arts and public service, a testament to
              the strong foundation they received at EIS. Our journey is a story
              of continuous improvement and a relentless pursuit of our founding
              vision.
            </p>
          </div>
=======
        {/* Content */}
        <div className="relative text-white px-6 py-16 max-w-[1100px] mx-auto space-y-6">
          <h2 className="text-3xl font-semibold text-center">Our History</h2>
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
            library, and state-of-the-art sports facilities. Our alumni now
            excel globally — a testament to the strong foundation they received
            at EIS.
          </p>
>>>>>>> 3366ebb (Created Notice page, made some pages responsive, updated Admission page)
        </div>
      </section>

      {/* Goals Section */}
      <section className="bg-[var(--primary-color)] py-20">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-[var(--secondary-color)]">
          <div>
<<<<<<< HEAD
            <h2 className="md:text-4xl text-2xl font-bold mb-4">GOALS</h2>
            <ul className="list-disc list-inside  space-y-2 pl-2">
=======
            <h2 className="text-2xl font-semibold mb-4">Goals</h2>
            <ul className="list-disc list-inside space-y-2 pl-2 text-justify">
>>>>>>> 3366ebb (Created Notice page, made some pages responsive, updated Admission page)
              <li>
                Provide world-class education with a strong emphasis on critical
                thinking, problem-solving, and core understanding.
              </li>
              <li>
                Develop confidence, leadership, and responsibility in students,
                empowering them to impact their communities.
              </li>
              <li>
                Promote cultural understanding and inclusivity across diverse
                backgrounds.
              </li>
              <li>
                Encourage innovation, creativity, and adaptability through
                project-based learning and technology.
              </li>
              <li>
                Support holistic development through a balance of academics,
                sports, and arts.
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src={schoolImg}
              alt="EIS Goals"
              className="rounded-xl shadow-md object-cover h-80 w-full max-w-sm"
            />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-[var(--secondary-color)] py-20">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-[var(--primary-color)]">
          <div className="flex justify-center">
            <img
              src={goalsImg}
              alt="EIS Achievements"
              className="rounded-xl shadow-md object-cover h-80 w-full max-w-sm"
            />
          </div>
          <div>
<<<<<<< HEAD
            <h2 className="md:text-4xl text-2xl font-bold mb-4">
              ACHIEVEMENTS
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
=======
            <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
            <ul className="list-disc list-inside space-y-2 pl-2 text-justify">
>>>>>>> 3366ebb (Created Notice page, made some pages responsive, updated Admission page)
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
      </section>

      {/* Awards Section */}
      <section className="bg-[var(--primary-color)] py-20">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-[var(--secondary-color)]">
          <div>
<<<<<<< HEAD
            <h2 className="md:text-4xl text-2xl font-bold mb-4">
              SPECIAL AWARDS
            </h2>
            <ul className="list-disc list-inside  space-y-2 pl-2">
=======
            <h2 className="text-2xl font-semibold mb-4">Special Awards</h2>
            <ul className="list-disc list-inside space-y-2 pl-2 text-justify">
>>>>>>> 3366ebb (Created Notice page, made some pages responsive, updated Admission page)
              <li>
                {" "}
                The EIS Excellence Award for outstanding academic and
                extracurricular performance, celebrating students who embody the
                school's values and dedication to excellence.{" "}
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
                contributions to the school community and beyond.{" "}
              </li>
              <li>
                The Principal's Honor Roll and Annual Merit Awards for
                top-performing students in national and international board
                exams, acknowledging their hard work and academic achievements.{" "}
              </li>
              <li>
                Awards and accolades from external organizations for our
                innovative curriculum, faculty development programs, and
                commitment to environmental sustainability.{" "}
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src={awardsImg}
              alt="EIS Awards"
              className="rounded-xl shadow-md object-cover h-80 w-full max-w-sm"
            />
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto px-6 mt-10 text-[var(--secondary-color)]">
          <p className="leading-relaxed text-justify bg-[var(--primary-color)]">
            Everest International School is more than an institution—it's a
            dynamic community where students are inspired to dream big and
            achieve their goals. Guided by experienced and passionate faculty
            and a progressive vision, EIS continues to uphold its mission of{" "}
            <span className="italic">
              “Excellence in Education with Global Values.”
            </span>{" "}
            We are dedicated to building a brighter future, one student at a
            time.
          </p>
        </div>
      </section>
    </div>
  );
}
