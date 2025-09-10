import annualImg from "../assets/imgs/annual.jpg";
import admissionImg from "../assets/imgs/admission.jpg";
import vacancyImg from "../assets/imgs/vacancy.jpg";
import parentsImg from "../assets/imgs/parents.jpg";

export default function NewsHome() {
  // All news data in one place
  const newsData = [
    {
      title:
        "The School Annual Day 2025, organized by the teachers and staffs of Everest International School",
      date: "SEPTEMBER 10, 2025",
      image: annualImg,
    },
    {
      title: "Admission Open for the Students of Class 1 and 11.",
      date: "SEPTEMBER 5, 2025",
      image: admissionImg,
    },
    {
      title:
        "Job Vacancy opened for English Teacher who has excellent communication and interpersonal skills.",
      date: "AUGUST 5, 2025",
      image: vacancyImg,
    },
    {
      title: "Parents Day of Class 8-9 hosted by Everest International School.",
      date: "JULY 7, 2025",
      image: parentsImg,
    },
  ];

  // First news is featured (big image), next 3 are recent
  const featured = newsData[0];
  const recent = newsData.slice(1, 4);

  return (
    <div className="bg-white py-10 px-6">
      {/* Section Heading */}
      <div className="flex justify-between items-center border-b pb-2 mb-6">
        <h2 className="text-2xl font-bold text-blue-900">News & Updates</h2>
        <a href="/news" className="text-blue-600 text-sm hover:underline">
          Read All News
        </a>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Featured News (Big Image) */}
        <div className="md:col-span-2">
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-72 object-cover rounded-lg"
          />
          <p className="text-gray-500 text-sm mt-4">{featured.date}</p>
          <h3 className="text-lg font-semibold mt-1">{featured.title}</h3>
        </div>

        {/* Recent News (Small Images) */}
        <div className="flex flex-col space-y-6">
          {recent.map((item, index) => (
            <div key={index} className="flex space-x-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <p className="text-gray-500 text-xs">{item.date}</p>
                <h4 className="text-sm font-semibold">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
