import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3006/api/v1/"
      : "https://instal-clone.herokuapp.com/api/v1/",
});

export const auth = {
  signup: (body) => api.post("/auth/signup", body),
  login: async (body) => api.post("/auth/login", body),
};
