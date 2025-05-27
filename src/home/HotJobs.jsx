import React, { useEffect, useState } from "react";
import JobsCard from "../shared/JobsCard";

const HotJobs = ({ jobsData }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-items-center">
      {jobsData?.map((data) => (
        <JobsCard key={data._id} jobsData={data}></JobsCard>
      ))}
    </div>
  );
};

export default HotJobs;
