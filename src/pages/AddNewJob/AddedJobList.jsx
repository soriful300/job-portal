import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const AddedJobList = () => {

  const { user } = useContext(AuthContext);
  const [addedJOb, setAddedJob] = useState([]);

  // fetching specific email added job
  useEffect(() => {
    axios
      .get(`http://localhost:3000/jobs?email=${user.email}`)
      .then((res) => setAddedJob(res.data))
      .catch((error) => console.log(error));
  }, [user]);
  console.log(addedJOb);

  // job status updated for this function
  const updateStatus = (e, id) => {
    const value = e.target.value;
    const data = {
      status: value,
    };
    axios
      .patch(`http://localhost:3000/statusUpdate/${id}`, data)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  

  return (
    <div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>category</th>
              <th>Status</th>
              <th>Total Applicants</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {addedJOb.map((job, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.category}</td>
                <td>
                  <select
                    defaultValue={job.status}
                    onChange={(e) => updateStatus(e, job._id)}
                    className="select"
                  >
                    <option disabled={true}>Pick a color</option>
                    <option>Active</option>
                    <option>Rejected</option>
                    <option>Pending</option>
                  </select>
                </td>
                <td>10</td>
                <td>
                  <button className="btn">see applicants</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddedJobList;
