import React from "react";
import { motion, scale } from "motion/react";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <motion.img
              animate={{ y: [100, 150, 100] }}
              transition={{ duration: 10, repeat: Infinity }}
              src="/celebrate-1.jpg"
              className="border-s-8 border-b-8 rounded-xl border-blue-500  rounded-s-8  shadow-2xl"
            />
            <motion.img
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 20, repeat: Infinity }}
              src="/celebrate-2.jpg"
              className="border-s-8 border-b-8 rounded-xl border-blue-500  rounded-s-8  shadow-2xl"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h1 className="text-5xl font-bold">
              <span className="text-green-600">Browse</span> Top Job
            </h1>
            <p className="py-6">
              Job Seeker is your gateway to thousands of job opportunities
              tailored to your skills. Find your dream job faster with smart
              filters and real-time updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
