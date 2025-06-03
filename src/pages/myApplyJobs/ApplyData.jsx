import React, { useContext, useEffect, useState } from "react";
import ApplyTable from "./ApplyTable";
import axios from "axios";
import { useUserData } from "../../hooks/ProtectedRoute/CustomContext";
import useAxiosSecure from "../../hooks/ProtectedRoute/useAxiosSecure";
import { AuthContext } from "../../context/AuthContext";
import useJobApi from "../../hooks/ProtectedRoute/useJobApi";

const ApplyData = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [applyData, setApplyData] = useState([]);
  console.log(applyData);
  useEffect(() => {
    axiosSecure
      .get(`/singleUserData/${user?.email}`)
      .then((res) => setApplyData(res.data));
  }, [user?.email, axiosSecure]);

  return (
    <div>
      <h1>My apply data</h1>
      <ApplyTable applyData={applyData}></ApplyTable>
    </div>
  );
};

export default ApplyData;
