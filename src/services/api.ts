import axios from "axios";

// Axios instance for the Express/MongoDB backend in /backend.
// Set VITE_API_URL in your project root .env, e.g.:
//   VITE_API_URL=http://localhost:5000/api
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" },
});

const TOKEN_KEY = "barbell_token";

export const tokenStore = {
  get: () => (typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null),
  set: (t: string) => localStorage.setItem(TOKEN_KEY, t),
  clear: () => localStorage.removeItem(TOKEN_KEY),
};

api.interceptors.request.use((config) => {
  const token = tokenStore.get();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (r) => r,
  (err) => Promise.reject(err)
);

export type AuthUser = {
  _id: string;
  name: string;
  email: string;
  role: "member" | "trainer" | "admin";
  membership?: { plan: string; since?: string };
};

export const authApi = {
  register: (data: { name: string; email: string; password: string }) =>
    api.post<{ user: AuthUser; token: string }>("/auth/register", data).then((r) => r.data),
  login: (data: { email: string; password: string }) =>
    api.post<{ user: AuthUser; token: string }>("/auth/login", data).then((r) => r.data),
  me: () => api.get<{ user: AuthUser }>("/auth/me").then((r) => r.data.user),
};
