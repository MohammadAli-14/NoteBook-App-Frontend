import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development" 
  ? "http://localhost:5001/api" 
  : "https://note-book-app-utae.onrender.com/api"; // Your Render backend URL

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;