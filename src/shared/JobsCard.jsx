import Button from "daisyui/components/button";
import React, { use } from "react";
import { Link } from "react-router";
import { FaLongArrowAltRight, FaMapMarkerAlt } from "react-icons/fa";
import { IoArrowForwardCircle, IoTime } from "react-icons/io5";

const JobsCard = ({ jobsData }) => {
  const {
    _id,
    company_logo,
    title,
    location,
    description,
    applicationDeadline,
  } = jobsData;
  return (
    <div>
      <div className="card bg-base-100 w-full border border-green-100">
        <div className="flex gap-4 place-items-center p-4 ">
          <img width={40} src={company_logo} alt="company logo" />
          <h2 className="font-bold">{title}</h2>
        </div>
        <div className="card-body">
          <p className="flex items-center gap-2 ">
            <IoTime color="green" /> Deadline {applicationDeadline}
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt color="red" />
            {location}
          </p>
          <p className="line-clamp-2 dark:text-white overflow-hidden text-ellipsis text-gray-600">
            {description}
          </p>
        </div>
        <Link className="p-4 flex items-center" to={`/jobs/${_id}`}>
          <button className="btn bg-green-600  text-white">
            Job Details
            <IoArrowForwardCircle />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobsCard;
