import { Typewriter } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";

import SectionContainer from "../components/SectionContainer";
import SchoolImg from "../assets/imgs/school-Image.png";
import CollageImg1 from "../assets/imgs/collage-1.png";
import CollageImg2 from "../assets/imgs/collage-2.png";
import CollageImg3 from "../assets/imgs/collage-3.png";
import CollageImg4 from "../assets/imgs/collage-4.png";
import CollageImg5 from "../assets/imgs/collage-5.png";
import StudentPhoto1 from "../assets/imgs/student-photo-girl.png";
import StudentPhoto2 from "../assets/imgs/student-photo-guy.png";
import PrincipalePhoto from "../assets/imgs/principal-photo.png";
import StudentDetailsCard from "../components/StudentDetailsCard";
import ProgrammerSection from "../components/ProgrammesSection";
import CounterCard from "../components/CounterCard";
import HighlightedNews from "../components/HighlightedNews";
import { Palette, Trophy, User, UserStar } from "lucide-react";
import Testimonial from "../components/Testimonial";
import NoticePopup from "../components/NoticePopup";
import { noticeData } from "../data/noticeData";
import { useEffect, useState } from "react";

function Home() {
  const [currentNotice, setCurrentNotice] = useState(-1);

  useEffect(() => {
    const popupShown = localStorage.getItem("popupShown");

    if (!popupShown) {
      setCurrentNotice(0);
      localStorage.setItem("popupShown", "true");
    }
  }, []);

  const handleClose = () => {
    if (currentNotice < noticeData.length - 1) {
      setCurrentNotice(currentNotice + 1);
    } else {
      setCurrentNotice(-1);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center">
      {/* Show only one notice at a time */}
      {currentNotice >= 0 && (
        <NoticePopup notice={noticeData[currentNotice]} onClose={handleClose} />
      )}

      {/* Container wraps all sections */}
      <div className="container">
        <SectionContainer backgroundImg={SchoolImg} height="small">
          <div className="w-full h-full flex items-end md:text-4xl text-2xl">
            <h1>
              WE BUILD{" "}
              <span className="text-[#F5D32B]">
                <Typewriter
                  words={["FUTURES,", "LEADERS,", "INNOVATORS,", "DREAMS,"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                />
              </span>
              <span>
                <button className="block text-xl border p-3 rounded-sm hover:bg-[var(--secondary-color)] cursor-pointer">
                  <NavLink to="/admission">Apply Now</NavLink>
                </button>
              </span>
            </h1>
          </div>
        </SectionContainer>

        <SectionContainer background="secondary">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="md:flex-1">
              <h1 className="md:text-4xl text-2xl text-center">MESSAGE FROM</h1>
              <h1 className="md:text-4xl text-2xl font-bold text-center">
                PRINCIPAL
              </h1>
              <p>
                Welcome to Everest International School, a place where learning
                meets purpose and potential is nurtured with care.At Everest
                International School, we believe education is not just about
                academic success—it's about shaping responsible global citizens
                with strong values, sharp minds, and compassionate hearts.
                Located in the heart of Nepal, our school blends international
                standards with the rich cultural heritage of our nation,
                providing a truly holistic learning environment.Our mission is
                to empower students to think critically, communicate
                effectively, and act ethically. We offer a balanced curriculum
                that encourages creativity, innovation, and academic excellence
                while placing equal emphasis on character-building and community
                service.Our dedicated team of educators brings passion,
                experience, and commitment to every classroom, guiding students
                through a journey of discovery and growth. We foster an
                environment where students feel safe, supported, and inspired to
                achieve their highest potential.As the principal of Everest
                International School, I am proud to lead a community that values
                curiosity, respect, and lifelong learning. We are not just
                preparing students for exams—we are preparing them for
                life.Thank you for taking the time to learn more about us. I
                warmly invite you to visit our school, meet our team, and see
                firsthand what makes Everest International School a unique and
                inspiring place to learn.With warm regards, Mr.Rajendra Prasad
                Joshi, Everest International School
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-1 m-5 md:m-0">
              <img src={PrincipalePhoto} alt="" />
              <h5>Mr. Rajendra Prasad Joshi</h5>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer background="primary">
          <div className="w-full h-full grid grid-row-2 grid-cols-[repeat(3,20%)] gap-2 m-5 items-center *:flex *:justify-center justify-center">
            <div className="order-1">
              <img src={CollageImg1} alt="" />
            </div>

            <div className="order-2">
              <img src={CollageImg2} alt="" />
            </div>
            <div className="order-4">
              <img src={CollageImg3} alt="" />
            </div>
            <div className="order-5">
              <img src={CollageImg4} alt="" />
            </div>
            <div className="order-3 row-span-2">
              <img src={CollageImg5} alt="" />
            </div>
          </div>
        </SectionContainer>

        <SectionContainer background="primary">
          <div className="flex flex-col justify-center items-center text-justify">
            <div>
              <h1 className="md:text-4xl text-2xl mb-3">WHY CHOOSE US?</h1>
            </div>
            <div>
              <h1 className="md:text-center mb-5">
                At Everest International School, we combine academic excellence
                with a supportive, inclusive environment that helps every
                student thrive. Our experienced faculty, modern facilities, and
                focus on real-world skills ensure you’re not just prepared for
                exams, but for life beyond the classroom. Whether you're aiming
                for university, a career, or personal growth, we provide the
                resources, guidance, and opportunities to help you succeed.
              </h1>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-around w-full gap-3">
              <CounterCard
                icon={Trophy}
                iconBg="#FFF9C4"
                counter={15}
                description="Years Of Excellence"
              />
              <CounterCard
                icon={User}
                iconBg="#C8E6C9"
                counter={500}
                description="Total Student Enrolled"
              />
              <CounterCard
                icon={UserStar}
                iconBg="#BBDEFB"
                counter={100}
                description="Total Teacher/Staff"
              />
              <CounterCard
                icon={Palette}
                iconBg="#FFE0B2"
                counter={50}
                description="Extra Activities"
              />
            </div>
          </div>
        </SectionContainer>

        <SectionContainer background="secondary">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="">
              <h1 className="md:text-4xl text-2xl text-center">SEE BOARD</h1>
              <h1 className="md:text-4xl text-2xl font-bold text-center">
                TOPPERS
              </h1>
              <p>
                At Everest International School, excellence isn't just a goal —
                it's our standard.Our students consistently achieve outstanding
                results at national and international levels, reflecting our
                commitment to high-quality education and personal growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-10 place-items-center w-full">
              <StudentDetailsCard
                studentPic={StudentPhoto1}
                studentName="Aayusha Karki"
                GPA={4.0}
              />
              <StudentDetailsCard
                studentPic={StudentPhoto2}
                studentName="Pratik Sharma"
                GPA={4.0}
              />
              <StudentDetailsCard
                studentPic={StudentPhoto1}
                studentName="Shena Adhikari"
                GPA={4.0}
              />
              <StudentDetailsCard
                studentPic={StudentPhoto2}
                studentName="Ramesh Bhandari"
                GPA={3.91}
              />
              <StudentDetailsCard
                studentPic={StudentPhoto1}
                studentName="Sita Tamang"
                GPA={3.9}
              />
              <StudentDetailsCard
                studentPic={StudentPhoto2}
                studentName="Anish Karel"
                GPA={3.9}
              />
            </div>
          </div>
        </SectionContainer>

        <SectionContainer background="primary">
          <div>
            <div className="">
              <h1 className="md:text-4xl text-2xl text-center">OUR</h1>
              <h1 className="md:text-4xl text-2xl font-bold text-center">
                PROGRAMMES
              </h1>
            </div>
            <div className="w-full flex justify-around items-center">
              <ProgrammerSection />
            </div>
          </div>
        </SectionContainer>

        <SectionContainer upperTitle="NEWS/" belowTitle="UPDATES">
          <div>
            <div className="">
              <h1 className="md:text-4xl text-2xl text-center">NEWS/</h1>
              <h1 className="md:text-4xl text-2xl font-bold text-center">
                UPDATES
              </h1>
            </div>
            <div>
              <HighlightedNews />
            </div>
          </div>
        </SectionContainer>

        <SectionContainer background="primary">
          <div>
            <div className="">
              <h1 className="md:text-4xl text-2xl text-center">
                WORD OF INSPIRATION
              </h1>
              <h1 className="md:text-4xl text-2xl font-bold text-center">
                SUCESS STORIES OF OUR ACHIEVERS
              </h1>
            </div>
            <div>
              <Testimonial />
            </div>
          </div>
        </SectionContainer>
      </div>
    </main>
  );
}

export default Home;
