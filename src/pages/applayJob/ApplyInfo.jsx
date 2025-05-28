import link from "daisyui/components/link";
import React from "react";
import { useUserData } from "../../hooks/ProtectedRoute/CustomContext";
import { useParams } from "react-router";
import axios from "axios";

const ApplyInfo = () => {
  const { user } = useUserData();
  const { id } = useParams();
  console.log(user.displayName);
  const name = user.displayName;
  const email = user.email;
  const submitJobDetails = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const gitHub = form.gitHub.value;
    const resume = form.resume.value;
    axios
      .post("http://localhost:3000/submitInfo", {
        linkedin,
        gitHub,
        resume,
        name,
        email,
        id,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <div className="place-items-center min-h-screen mt-16">
      <form onSubmit={submitJobDetails}>
        <div className="flex flex-col gap-4 ">
          <input
            type="url"
            placeholder="Linkedin Profile"
            name="linkedin"
            className="input input-md"
          />
          <input
            type="url"
            placeholder="GitHub Link"
            name="gitHub"
            className="input input-md"
          />
          <input
            type="url"
            name="resume"
            placeholder="Resume Link"
            className="input input-md"
          />
        </div>
        <button type="submit" className="btn mt-4">
          Submit Now
        </button>
      </form>
    </div>
  );
};

export default ApplyInfo;
