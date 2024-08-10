import React, { useState, useEffect } from "react";
import { getTopHeadlines } from "../api";
import NewsList from "../components/NewsList";
import { FaSearch } from "react-icons/fa";

const LandingPage = () => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchNews = async (query = "") => {
    try {
      console.log("Fetching news...");
      const response = await getTopHeadlines(1, query);
      const { articles } = response;
      setNews(articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews(searchQuery);
  }, [searchQuery]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.search.value);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://4kwallpapers.com/images/wallpapers/new-york-city-twilight-evening-city-lights-dark-night-pink-3840x2400-6089.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 container mx-auto flex flex-col items-center pt-24 pb-8">
        <div className="text-center mb-12">
          <h1 className="text-white text-3xl font-bold mb-4">
            Check out the Interesting News here
          </h1>
          <p className="text-white text-lg">
            Stay informed with the latest news from around the world. Our top
            headlines keep you updated on major events and trending stories.
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="mb-8 w-full max-w-lg flex items-center bg-white rounded-lg shadow-lg"
        >
          <div className="relative flex-grow">
            <input
              type="text"
              name="search"
              placeholder="Search news..."
              className="w-full px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <FaSearch className="text-gray-500" />
            </div>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg shadow-md hover:bg-blue-600 transition"
          >
            Search
          </button>
        </form>

        <div className="w-full">
          <NewsList news={news} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
