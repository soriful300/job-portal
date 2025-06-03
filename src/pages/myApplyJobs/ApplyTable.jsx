import React, { use, useEffect } from "react";
import TableRow from "./TableRow";

const ApplyTable = ({ applyData }) => {
  // useEffect(() => {
  //   const data = use(applyUserData);
  //   console.log(data);
  // }, [applyUserData]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Resume</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {applyData?.map((singleApply) => (
              <TableRow singleApply={singleApply}></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplyTable;
