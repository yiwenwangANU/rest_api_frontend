import axios from "axios";

// Base URL for API requests
const API_BASE_URL = "https://api.example.com";

// Fetch data from the API
export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/data`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow for error handling in components
  }
};
