import React from "react";
import { useLoaderData } from "react-router";
import SingleCourse from "../Components/SingleCourse";
import { Link } from "react-router";

const Courses = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h3>here are the courses</h3>
      <div>
        {data.map((singleCourse) => (
          <Link key={singleCourse.id} to={`/quiz`}>
            <SingleCourse singleCourse={singleCourse} />
          </Link>
        ))}
      </div>
      <Link className="btn" to="/admin">
        Add Course
      </Link>
    </div>
  );
};

export default Courses;
