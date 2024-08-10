import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getTopHeadlines } from "../api";
import NewsCard from "../components/NewsCard";

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    const fetchData = async () => {
      const category = queryParams.get("category") || "";
      setCategory(category);
      const data = await getTopHeadlines(category);
      setArticles(data);
    };
    fetchData();
  }, [location.search]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        {category ? `Category: ${category}` : "Top Headlines"}
      </h1>
      {articles.length > 0 ? (
        articles.map((article, index) => (
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
        ))
      ) : (
        <p>No articles available.</p>
      )}
    </div>
  );
};

export default NewsPage;
