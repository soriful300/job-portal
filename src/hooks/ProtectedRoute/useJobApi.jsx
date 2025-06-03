import React from "react";
import useAxiosSecure from "./useAxiosSecure";

const useJobApi = () => {
  const axiosSecure = useAxiosSecure();
  const applyUserData = (email) => {
    return axiosSecure.get(`/singleUserData/${email}`).then((res) => res.data);
  };
  return {
    applyUserData,
  };
};

export default useJobApi;
