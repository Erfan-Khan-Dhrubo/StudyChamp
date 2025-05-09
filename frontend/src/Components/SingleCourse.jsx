import React from "react";

const SingleCourse = ({ singleCourse }) => {
  const { title, description } = singleCourse;
  return (
    <div>
      <div className="border p-4">
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleCourse;
