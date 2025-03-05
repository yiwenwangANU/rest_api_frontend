import axios from "axios";

// Base URL for API requests
const API_BASE_URL = "http://localhost:8080";

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

export const createPost = async (postData) => {
  const formData = new FormData();
  formData.append("title", postData.title);
  formData.append("content", postData.content);
  formData.append("image", postData.image[0]);
  try {
    const response = await axios.post(`${API_BASE_URL}/feed/posts`, formData);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error; // Rethrow for error handling in components
  }
};
