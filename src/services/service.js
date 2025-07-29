import axiosClient from "./axiosClient";

export function login(payLoad) {
  return axiosClient.post("/auth/login", payLoad);
}
export function signup(payLoad) {
  return axiosClient.post("/auth/signup", payLoad);
}
