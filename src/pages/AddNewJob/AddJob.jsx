import React, { useContext } from "react";
import dataSplit from "../../utils/utility";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const AddJob = () => {
  const { user } = useContext(AuthContext);
  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const fromData = new FormData(form);
    const dataObj = Object.fromEntries(fromData.entries());
    const { min, max, currency, ...newData } = dataObj;
    newData.salaryRange = { min, max, currency };
    newData.responsibilities = dataSplit(newData.responsibilities);
    newData.requirements = dataSplit(newData.requirements);
    console.log(newData);
    axios
      .post("http://localhost:3000/addNewJob", newData)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div className="w-11/12 mx-auto    min-h-screen place-items-center">
      <form onSubmit={handleAddJob} className="">
        <fieldset className="fieldset">
          <label className="label">Title</label>
          <input
            name="title"
            type="text"
            className="input"
            placeholder="Title"
          />
          <label className="label">location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="location"
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="label">Job Category</label>
          <input
            type="text"
            className="input"
            name="category"
            placeholder="Category"
          />
          <label className="label">Job Type</label>
          <select defaultValue="Pick a color" name="jobType" className="select">
            <option disabled={true}>Job Type</option>
            <option>Hybrid</option>
            <option>Marketing</option>
          </select>

          <label className="label">Application DeadLine</label>
          <input type="date" name="applicationDeadline" className="input" />
        </fieldset>

        <fieldset className="fieldset ">
          <label className="label">Salary Range</label>

          <div className="flex gap-4">
            <input placeholder="Min" type="text" name="min" className="input" />
            <input placeholder="Max" type="text" name="max" className="input" />

            <select
              defaultValue="Pick Currency"
              className="select"
              name="currency"
            >
              <option disabled={true}>Currency</option>
              <option>BDT</option>
              <option>USDT</option>
            </select>
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <label className="label">Company Name</label>
          <input
            placeholder="Company"
            type="text"
            name="company"
            className="input"
          />
          <label className="label">Description</label>
          <textarea
            className="textarea"
            name="description"
            placeholder="Description"
          ></textarea>
          <label className="label">Requirements</label>
          <textarea
            name="requirements"
            className="textarea"
            placeholder="requirements separate by comma"
          ></textarea>
          <label className="label">Responsibilities</label>
          <textarea
            className="textarea"
            name="responsibilities"
            placeholder="Responsibilities separate by comma"
          ></textarea>
        </fieldset>

        <fieldset className="fieldset">
          <select defaultValue="Active" name="status" className="select">
            <option disabled={true}>Status</option>
            <option>Active</option>
            <option>DeActive</option>
          </select>
          <label className="label">Hr Email</label>
          <input
            placeholder="Hr Email"
            type="email"
            name="hr_email"
            value={user.email}
            className="input"
          />
          <label className="label">Hr Name</label>
          <input
            placeholder="Hr Name"
            type="text"
            name="hr_name"
            className="input"
            value={user.displayName}
          />
          <label className="label">Company logo</label>
          <input
            placeholder="Company logo URL"
            type="url"
            name="company_logo"
            className="input"
          />
        </fieldset>

        <button className="btn w-sm btn-neutral mt-4">Add Job</button>
      </form>
    </div>
  );
};

export default AddJob;
