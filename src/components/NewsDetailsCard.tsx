interface NewsDetailsCardProps {
  title: string;
  content: string;
  date: string;
  image: string;
}

export default function NewsDetailsCard({
  title,
  content,
  date,
  image,
}: NewsDetailsCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <h1 className="text-3xl font-bold text-blue-900 mb-4">{title}</h1>
      <p className="text-gray-500 text-sm mb-4">{date}</p>
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
}
