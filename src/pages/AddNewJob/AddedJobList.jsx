import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Link } from "react-router";

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

 

  return (
    <div className="min-h-screen w-11/12 mx-auto mt-10">
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>category</th>
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

                <td>10</td>
                <td>
                  <Link to={`/applications/${job._id}`}>
                    <button className="btn">see applicants</button>
                  </Link>
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
