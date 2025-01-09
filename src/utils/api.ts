import axios from "axios";
import path from 'path-browserify'; // Ensure @types/path-browserify is installed or add a declaration file

const api = axios.create({
  baseURL: "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
