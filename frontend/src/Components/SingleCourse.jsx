import React from "react";

const SingleCourse = ({ singleCourse }) => {
  const { title, description, numberOfQuizzes } = singleCourse;
  return (
    <div>
      <div className="border p-4">
        <p>{title}</p>
        <p>{description}</p>
        <p>{numberOfQuizzes}</p>
      </div>
    </div>
  );
};

export default SingleCourse;
