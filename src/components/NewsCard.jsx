import React from "react";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";

const NewsCard = ({
  title,
  description,
  source_url,
  image_url,
  category,
  pubDate,
  source_icon,
  source_priority,
  video_url,
}) => {
  const formattedDate = pubDate
    ? format(parseISO(pubDate), "dd MMMM yyyy", { locale: id })
    : "Tanggal Tidak Tersedia";

  return (
    <div className="relative bg-[#3b4d2a] shadow-md rounded-lg overflow-hidden flex mb-4">
      <div className="w-1/3 h-48 flex-shrink-0 relative">
        {image_url ? (
          <a
            href={video_url || source_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={image_url}
              alt={title}
              className="w-full h-60 object-cover"
            />
          </a>
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>

      <div className="p-4 w-2/3 flex flex-col justify-between">
        <div>
          <a
            href={source_url}
            className="block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-xl font-bold mb-2 hover:text-yellow-400">
              {title}
            </h2>
          </a>
          <p className="text-gray-300 text-sm mb-2">{formattedDate}</p>
          {category && (
            <span className="bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded mb-2 inline-block">
              {category}
            </span>
          )}
          <p className="mb-4 line-clamp-2 max-w-[45rem]">{description}</p>
        </div>
        <div className="flex items-center justify-between">
          <a
            href={source_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-yellow-400 hover:underline"
          ></a>
          {source_priority !== undefined && (
            <span className="text-xs text-gray-400">
              Priority: {source_priority}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
