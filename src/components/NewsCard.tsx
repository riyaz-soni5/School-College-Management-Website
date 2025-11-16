import { Link } from "react-router-dom";

interface NewsCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

export default function NewsCard({
  id,
  title,
  description,
  date,
  image,
}: NewsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col md:flex-row items-center md:items-start overflow-hidden w-full">
      {/* Image */}
      <div className="md:w-1/4 w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-40 md:h-48 object-cover"
        />
      </div>

      {/* Text */}
      <div className="p-4 flex flex-col justify-between md:w-3/4 w-full">
        <div>
          <h2 className="text-xl font-bold text-blue-800 mb-2">{title}</h2>
          <p className="text-gray-600 mb-2">{description}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
        <Link
          to={`/news/${id}`}
          className="mt-3 text-blue-600 font-medium hover:underline"
        >
          View More
        </Link>
      </div>
    </div>
  );
}
