import React, { use } from "react";
import TableRow from "./TableRow";

const ApplyTable = ({ applyData }) => {
  console.log(applyData);
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
            {applyData.map((singleApply) => (
              <TableRow singleApply={singleApply}></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplyTable;
