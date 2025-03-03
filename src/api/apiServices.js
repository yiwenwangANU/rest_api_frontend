import axios from "axios";

// Base URL for API requests
const API_BASE_URL = "http://localhost:8080/";

// Fetch data from the API
export const fetchPost = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/feed/posts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow for error handling in components
  }
};
