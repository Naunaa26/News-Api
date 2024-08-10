import axios from "axios";

const API_KEY = "pub_50272859e3cc97fbc9ac1c2d0f3b8e32a9639";
const BASE_URL = "https://newsdata.io/api/1";

const validCategories = [
  "business",
  "entertainment",
  "environment",
  "food",
  "health",
  "politics",
  "science",
  "sports",
  "technology",
  "top",
  "world",
];

export const getTopHeadlines = async (category = "") => {
  try {
    const params = {
      apikey: API_KEY,
      country: "id",
      language: "id",
    };

    if (category && validCategories.includes(category)) {
      params.category = category;
    }

    console.log("Request params:", params);

    const response = await axios.get(`${BASE_URL}/news`, { params });
    console.log("API response:", response.data);

    return response.data.results;
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    return [];
  }
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchHeadlinesWithDelay = async () => {
  await delay(1000);
  const headlines = await getTopHeadlines();
  console.log(headlines);
};

fetchHeadlinesWithDelay();
