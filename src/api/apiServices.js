import axios from "axios";
import imageCompression from "browser-image-compression";
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
  const imageFile = postData.image[0];
  let compressedFile;
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };
  try {
    compressedFile = await imageCompression(imageFile, options);
  } catch (error) {
    console.log(error);
    throw error;
  }

  const formData = new FormData();
  formData.append("title", postData.title);
  formData.append("content", postData.content);
  formData.append("image", compressedFile);
  try {
    const response = await axios.post(`${API_BASE_URL}/feed/posts`, formData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Server responded with:", error.response.data);
    } else {
      console.error("Error:", error.message);
    }
    throw error; // Rethrow for error handling in components
  }
};
