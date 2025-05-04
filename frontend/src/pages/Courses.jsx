import React from "react";
import { useLoaderData } from "react-router";
import SingleCourse from "../Components/SingleCourse";

const Courses = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h3>here are the courses</h3>
      <div>
        {data.map((singleCourse) => (
          <SingleCourse
            key={singleCourse.id}
            singleCourse={singleCourse}
          ></SingleCourse>
        ))}
      </div>
    </div>
  );
};

export default Courses;
