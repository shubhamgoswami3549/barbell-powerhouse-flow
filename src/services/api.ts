import axios from "axios";

// Pre-wired Axios instance for future MERN backend integration.
// Set VITE_API_URL in your environment when the backend is ready.
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.response.use(
  (r) => r,
  (err) => Promise.reject(err)
);
