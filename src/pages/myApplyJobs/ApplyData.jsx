import React, { useEffect, useState } from "react";
import ApplyTable from "./ApplyTable";
import axios from "axios";
import { useUserData } from "../../hooks/ProtectedRoute/CustomContext";

const ApplyData = () => {
  const { user } = useUserData();
  const email = user.email;
  const [applyData, setApplyData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/singleUserData/${email}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setApplyData(data));
  }, [email]);
  console.log(applyData);
  return (
    <div>
      <h1>My apply data</h1>

      <ApplyTable applyData={applyData}></ApplyTable>
    </div>
  );
};

export default ApplyData;
