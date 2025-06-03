import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Applications = () => {
  const [applicationsData, setApplicationsData] = useState([]);
  const { job_id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/job/${job_id}`)
      .then((res) => setApplicationsData(res.data))
      .catch((error) => console.log(error));
  }, [job_id]);

  // job status updated for this function
  const updateStatus = (e, id) => {
    const value = e.target.value;
    const data = {
      status: value,
    };
    axios
      .patch(`https://job-portal-server-roan-theta.vercel.ap/${id}`, data)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div className="min-h-screen w-11/12 mx-auto mt-10">
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Resume Link</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applicationsData.map((application, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{application.name}</td>
                <td>{application.email}</td>
                <td>{application.resume}</td>
                <td>
                  <select
                    defaultValue={application.status}
                    onChange={(e) => updateStatus(e, application._id)}
                    className="select"
                  >
                    <option disabled={true}>Pick a color</option>
                    <option>Pending</option>
                    <option>Interview</option>
                    <option>Rejected</option>
                    <option>Hired</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;
