interface NewsCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
}

export default function NewsCard({
  title,
  description,
  date,
  image,
}: NewsCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h2 className="text-xl font-bold text-blue-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  );
}
