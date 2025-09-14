import { useParams, Link } from "react-router-dom";
import { newsData } from "../data/newsData";

export default function NewsDetails() {
  const { id } = useParams<{ id: string }>();
  const news = newsData.find((n) => n.id === id);

  if (!news) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold text-red-600">News Not Found</h2>
        <Link to="/news" className="text-blue-600 hover:underline">
          Back to News
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Title */}
        <h1 className="text-3xl font-bold text-blue-900 mb-2">{news.title}</h1>

        {/* Date */}
        <p className="text-gray-500 text-sm mb-4">{news.date}</p>

        {/* Image */}
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />

        {/* Description / Content */}
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {news.content}
        </p>

        {/* Back Link */}
        <div className="mt-6">
          <Link
            to="/news"
            className="text-blue-600 font-medium hover:underline"
          >
            Back to News
          </Link>
        </div>
      </div>
    </div>
  );
}
