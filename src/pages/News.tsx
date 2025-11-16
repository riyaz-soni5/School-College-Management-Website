import { useState } from "react";
import NewsCard from "../components/NewsCard";
// import Marquee from "react-fast-marquee";
import { newsData } from "../data/newsData";

export default function NewsPage() {
  const [visibleCount, setVisibleCount] = useState(5); // show 5 initially

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const visibleNews = newsData.slice(0, visibleCount);

  return (
    <div className="bg-[var(--secondary-color)] py-6">
      <div className="container px-4">
        {/* Marquee Section
        <div className="bg-white border border-gray-300 flex items-center mb-10">
          <div className="bg-red-700 text-white px-4 py-2 font-semibold">
            Recent News
          </div>
          <div className="flex-1 overflow-hidden">
            <Marquee pauseOnHover={false} gradient={false} speed={100}>
              {newsData.slice(0, 3).map((news) => (
                <div key={news.id} className="px-6 flex items-center space-x-2">
                  <span className="text-red-600">✔</span>
                  <span className="text-red-600 font-medium">{news.title}</span>
                  <span className="text-gray-500 text-sm">({news.date})</span>
                </div>
              ))}
            </Marquee>
          </div>
        </div> */}

        {/* News List */}
        <div className="mt-10 mb-10">
          <h1 className="text-3xl font-bold text-center mb-6 text-white">
            News
          </h1>

          <div className="flex flex-col gap-6">
            {visibleNews.map((news) => (
              <NewsCard
                key={news.id}
                id={news.id}
                title={news.title}
                description={news.description}
                date={news.date}
                image={news.image}
              />
            ))}
          </div>

          {/* More News Button */}
          {visibleCount < newsData.length && (
            <div className="flex justify-center mt-10">
              <button
                onClick={handleShowMore}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                More News
              </button>
            </div>
          )}
        </div>

        <div className="h-[2px] bg-white mt-12"></div>
      </div>
    </div>
  );
}
