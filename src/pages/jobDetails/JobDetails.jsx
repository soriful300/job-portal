import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const jobDetails = useLoaderData();
  console.log(jobDetails);
  const { _id, title, company, company_logo, hr_email, hr_name, jobType } =
    jobDetails;
  return (
    <div>
      <h1 className="text-4xl">{title}</h1>
      <p>{company}</p>
      <p>{hr_email}</p>
      <Link to={`/applyJob/${_id}`}>
        <button className="btn">Apply Now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
