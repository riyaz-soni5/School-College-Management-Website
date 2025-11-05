import SeeImg from "../assets/imgs/see-student-img.png";
import Plus2Img from "../assets/imgs/plus2-Student-img.png";

import { useState } from "react";
import { Link } from "react-router-dom";

type SectionData = {
  id: string;
  name: string;
  img: string;
  description: string;
};

const Tabs: SectionData[] = [
  {
    id: "see",
    name: "SEE",
    img: SeeImg,
    description:
      "At Everest International School, the Secondary Education Examination (SEE) program marks a significant milestone in a student’s academic journey, encapsulating years of learning and growth from Class 3 through Class 10. This program is designed to bring together all aspects of the student’s educational experience into a comprehensive and meaningful conclusion. We offer a well-structured and nurturing learning environment where students are encouraged to explore their potential and achieve academic excellence. With a curriculum that emphasizes core subjects as well as interdisciplinary learning, we ensure that students are not only well-prepared for the national examinations but are also intellectually curious and engaged learners.Beyond academics, our SEE program focuses on developing essential life skills such as analytical thinking, effective communication, and strong moral values...",
  },
  {
    id: "plus2",
    name: "NEB +2",
    img: Plus2Img,
    description:
      "At Everest International School, our NEB +2 program is thoughtfully designed to support students as they transition from secondary education to higher studies and future careers. We offer specialized streams in Science, Management, and Law, each carefully crafted to promote academic excellence and cultivate essential real-world skills. Whether students aspire to enter fields such as medicine, engineering, business, or law, our comprehensive curriculum lays a strong foundation through expert instruction, hands-on learning experiences, and personalized mentorship. By focusing on both theoretical understanding and practical application, we ensure that our students are well-equipped to succeed in their chosen paths.In addition to academic rigor, we place great emphasis on the holistic development of every student. Through leadership opportunities, values-based education, and ...",
  },
];

function ProgrammerSection() {
  let [activeTab, changeTab] = useState("see");

  let activeContent = Tabs.find((item) => item.id == activeTab);

  return (
    <div className="container bg-white border border-white shadow-white rounded-xl flex justify-around m-5 mx-10 overflow-hidden">
      <div className="flex-1">
        <img src={activeContent?.img} alt="" className="w-full h-full" />
      </div>
      <div className="flex  flex-1 flex-col">
        <div className="border border-l-0 rounded-r-xl flex *:text-2xl *:border-r *:p-2 *:hover:bg-[#DDDDDD] *:focus:bg-[#DDDDDD]">
          <button
            type="button"
            onClick={() => changeTab("see")}
            className="cursor-pointer"
          >
            SEE
          </button>
          <button
            type="button"
            onClick={() => changeTab("plus2")}
            className="cursor-pointer"
          >
            NEB +2
          </button>
        </div>
        <div className="p-5 text-justify text-l">
          <p>{activeContent?.description}</p>
        </div>
        {/* <div>
          <p className="text-right mr-5 hover:underline mb-10 cursor-pointer">
            Learn More
          </p>
        </div> */}

        <div>
          <Link
            to={`/academic-programs/${activeTab}`}
            className="text-right mr-5 hover:underline mb-10 cursor-pointer block"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProgrammerSection;
