import React from "react";
import { useParams } from "react-router-dom";

const Department = () => {
  const { department_id } = useParams();
  return <div>Department</div>;
};

export default Department;
