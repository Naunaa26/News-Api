import React, { useEffect, useState } from "react";
import { getTopHeadlines } from "../api";
import NewsCard from "./NewsCard";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTopHeadlines();
      console.log("Fetched data:", data);
      setArticles(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {articles.map((article, index) => (
        <NewsCard
          key={index}
          title={article.title}
          description={article.description}
          source_url={article.source_url}
          image_url={article.image_url}
          category={article.category}
          pubDate={article.pubDate}
          source_icon={article.source_icon}
          source_priority={article.source_priority}
          video_url={article.video_url}
        />
      ))}
    </div>
  );
};

export default NewsList;
