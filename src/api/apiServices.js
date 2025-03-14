import axios from "axios";
import imageCompression from "browser-image-compression";
import axiosInstance from "./axios-instance";
// Base URL for API requests

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Fetch posts
export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/feed/posts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchInfinityPosts = async ({ pageParam = 1 }) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/feed/posts?page=${pageParam}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Fetch single post
export const fetchPost = async (postId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/feed/post/${postId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Create post
export const createPost = async (postData) => {
  const imageFile = postData.image[0];
  let compressedFile, compressedImage;
  // if there is image upload, compress the image
  if (imageFile) {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      compressedFile = await imageCompression(imageFile, options);
      compressedImage = new File([compressedFile], imageFile.name, {
        type: compressedFile.type,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // create FormData for axios request
  const formData = new FormData();
  formData.append("title", postData.title);
  formData.append("content", postData.content);
  formData.append("image", compressedImage);
  try {
    const response = await axiosInstance.post(
      `${API_BASE_URL}/feed/posts`,
      formData
    );
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

// edit post
export const editPost = async (postData) => {
  const imageFile = postData.image[0];
  let compressedFile, compressedImage;
  if (imageFile) {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      compressedFile = await imageCompression(imageFile, options);
      compressedImage = new File([compressedFile], imageFile.name, {
        type: compressedFile.type,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  const formData = new FormData();
  formData.append("title", postData.title);
  formData.append("content", postData.content);
  if (imageFile) formData.append("image", compressedImage);
  try {
    const response = await axiosInstance.put(
      `${API_BASE_URL}/feed/post/${postData.postId}`,
      formData
    );
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

// Delete single post
export const deletePost = async (postId) => {
  try {
    const response = await axiosInstance.delete(
      `${API_BASE_URL}/feed/post/${postId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Create user
export const createUser = async (userData) => {
  const imageFile = userData.image[0];
  let compressedFile, compressedImage;
  // if there is image upload, compress the image
  if (imageFile) {
    const options = {
      maxSizeMB: 0.1,
      maxWidthOrHeight: 100,
      useWebWorker: true,
    };
    try {
      compressedFile = await imageCompression(imageFile, options);
      compressedImage = new File([compressedFile], imageFile.name, {
        type: compressedFile.type,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // create FormData for axios request
  const formData = new FormData();
  formData.append("email", userData.email);
  formData.append("password", userData.password);
  formData.append("name", userData.name);
  if (imageFile) formData.append("image", compressedImage);

  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, formData);
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

// Login user
export const loginUser = async (userData) => {
  // send json data this time
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, userData, {
      headers: { "Content-Type": "application/json" },
    });
    // store jwt in local browser
    const { token, userId, thumbNail } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("thumbNail", thumbNail);
    return;
  } catch (error) {
    if (error.response) {
      console.error("Server responded with:", error.response.data);
    } else {
      console.error("Error:", error.message);
    }
    throw error; // Rethrow for error handling in components
  }
};

// Create comment
export const createComment = async (commentData) => {
  try {
    const response = await axiosInstance.post(
      `${API_BASE_URL}/feed/comment`,
      commentData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
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

// Fetch posts
export const fetchComments = async (postId) => {
  try {
    console.log(`${API_BASE_URL}/feed/comment/${postId}`);
    const response = await axios.get(`${API_BASE_URL}/feed/comment/${postId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
