import React, { Suspense, useEffect, useState } from "react";
import Hero from "../components/Hero";
import HotJobs from "../home/HotJobs";

const HomeLayout = () => {
  const [jobsData, setJobsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobsData(data);
        setLoading(false);
      });
  }, []);
  if (loading) return <p>loading jobs....</p>;
  return (
    <div className="min-h-screen ">
      <Hero></Hero>
      <Suspense>
        <HotJobs jobsData={jobsData}></HotJobs>
      </Suspense>
    </div>
  );
};

export default HomeLayout;
