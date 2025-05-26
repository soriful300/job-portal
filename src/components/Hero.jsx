import React from "react";
import { motion, scale } from "motion/react";

const Hero = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
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
          <div className="flex-1">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
