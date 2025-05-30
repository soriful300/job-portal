import React, { useEffect, useState } from "react";
import JobsCard from "../shared/JobsCard";
import { FaFire } from "react-icons/fa";

const HotJobs = ({ jobsData }) => {
  return (
    <div className="w-11/12 mx-auto mt-10 mb-8">
      <h1 className="text-3xl font-bold flex items-center gap-2 ">
        <FaFire color="red"/>
        Hot Jobs
      </h1>
      <div className="divider"></div>
      <div className="grid grid-cols-1  gap-10 lg:grid-cols-4 mt-4 md:grid-cols-2 place-items-center">
        {jobsData?.map((data) => (
          <JobsCard key={data._id} jobsData={data}></JobsCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
