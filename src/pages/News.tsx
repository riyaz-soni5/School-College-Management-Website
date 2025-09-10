import NewsCard from "../components/NewsCard";
import Marquee from "react-fast-marquee";

//Import images
import annualImg from "../assets/imgs/annual.jpg";
import admissionImg from "../assets/imgs/admission.jpg";
import vacancyImg from "../assets/imgs/vacancy.jpg";
import parentsImg from "../assets/imgs/parents.jpg";
import melaImg from "../assets/imgs/mela.jpg";

export default function NewsPage() {
  const newsData = [
    {
      title: "School Annual Day",
      description:
        "Join us for a day full of cultural programs and fun activities.",
      date: "2025-09-10",
      image: annualImg,
    },
    {
      title: "Admission Open for Class 11",
      description:
        "Admissions are now open for the academic year 2025-26 for Class 11.",
      date: "2025-09-05",
      image: admissionImg,
    },
    {
      title: "Admission Open for Class 10",
      description: "Admissions are now open for Class 1.",
      date: "2025-09-05",
      image: admissionImg,
    },
    {
      title: "Vacancy Announcement",
      description:
        "Strong understanding of Classroom Management and excellent communication and interpersonal skills.",
      date: "2025-08-05",
      image: vacancyImg,
    },
    {
      title: "Parents Day of Class 8-9",
      description: "Parents Day of Class 8-9 on August 2, 2025.",
      date: "2025-07-25",
      image: parentsImg,
    },
    {
      title: "School Fair 2025-2026",
      description: "School Fair on December 21, 2025.",
      date: "2025-10-25",
      image: melaImg,
    },
  ];

  return (
    <div className="bg-gray-100 p-6">
      {/*Marquee News Section */}
      <div className="bg-white border border-gray-300 flex items-center mb-10">
        <div className="bg-red-700 text-white px-4 py-2 font-semibold">
          Recent News
        </div>
        <div className="flex-1 overflow-hidden">
          <Marquee pauseOnHover={true} gradient={false} speed={100}>
            {newsData.slice(1, 4).map((news, index) => (
              <div key={index} className="px-6 flex items-center space-x-2">
                <span className="text-red-600">✔</span>
                <span className="text-red-600 font-medium">{news.title}</span>
                <span className="text-gray-500 text-sm">({news.date})</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/*Full News Grid Below */}
      <div className="min-h-screen mt-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-900">
          News
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((news, index) => (
            <NewsCard
              key={index}
              title={news.title}
              description={news.description}
              date={news.date}
              image={news.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
