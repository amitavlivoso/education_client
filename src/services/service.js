import axiosClient from "./axiosClient";


export function signup(payLoad) {
  return axiosClient.post("/auth/signup", payLoad);
}

export function login(payLoad) {
  return axiosClient.post("/auth/login", payLoad);
}

export function createexam(payLoad) {
  return axiosClient.post("/auth/createexam", payLoad);
}


