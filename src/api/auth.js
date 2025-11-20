import { axiosClient } from "./axiosClient";

// Sign Up
export const signUpUser = async (user) => {
  const response = await axiosClient.post("/users", { user });
  return response.data;
};

// Sign In
export const signInUser = async (credentials) => {
  const response = await axiosClient.post("/users/sign_in", { user: credentials });
  return response.data;
};

// Sign Out
export const signOutUser = async (token) => {
  const response = await axiosClient.delete("/users/sign_out", {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};
