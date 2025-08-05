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

export function uploadDocs(payLoad) {
  return axiosClient.post("/auth/upload-multiple", payLoad, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
