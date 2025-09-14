import NewsCard from "../components/NewsCard";
import Marquee from "react-fast-marquee";
import { newsData } from "../data/newsData"; // import news data with IDs

export default function NewsPage() {
  return (
    <div className="bg-[var(--secondary-color)]  p-6">
      {/* Marquee News Section */}
      <div className="bg-white border border-gray-300 flex items-center mb-10">
        <div className="bg-red-700 text-white px-4 py-2 font-semibold">
          Recent News
        </div>
        <div className="flex-1 overflow-hidden">
          <Marquee pauseOnHover={true} gradient={false} speed={100}>
            {newsData.slice(0, 3).map((news) => (
              <div key={news.id} className="px-6 flex items-center space-x-2">
                <span className="text-red-600">✔</span>
                <span className="text-red-600 font-medium">{news.title}</span>
                <span className="text-gray-500 text-sm">({news.date})</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Full News Grid */}
      <div className="min-h-screen mt-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((news) => (
            <NewsCard
              key={news.id}
              id={news.id} // pass id for routing
              title={news.title}
              description={news.description}
              date={news.date}
              image={news.image}
            />
          ))}
        </div>
      </div>
      <div className="h-[2px] bg-white mt-12"></div>
    </div>
  );
}
