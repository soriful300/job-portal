import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const { user, userSignOut, setLoading } = useContext(AuthContext);

  // Attach request interceptor
  axiosInstance.interceptors.request.use((config) => {
    // Uncomment and use access token as needed
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  // Attach response interceptor to the same instance
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log(error);
      // if (error.response?.status === 401) {
      //   console.log("inside error ");
      //   userSignOut();
      //   setLoading(false);
      // }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
