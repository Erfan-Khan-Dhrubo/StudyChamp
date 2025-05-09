// import React from "react";
// import { useLoaderData } from "react-router";
// // import { Link } from "react-router-dom";

// import SingleCourse from "../Components/SingleCourse";
// import { Link } from "react-router";

// const Courses = () => {
//   const data = useLoaderData();
//   console.log(data);
//   return (
//     <div>
//       <h3>here are the courses</h3>
//       <div>
//         {data.map((singleCourse) => (
//           // <Link key={singleCourse.id} to={`/quiz`}>
//           <Link key={singleCourse.id} to={`/quiz/${singleCourse.id}`}>

//             <SingleCourse singleCourse={singleCourse} />
//           </Link>
//         ))}
//       </div>
//       <Link className="btn" to="/admin">
//         Add Course
//       </Link>
//     </div>
//   );
// };

// export default Courses;



import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCourse from "../Components/SingleCourse";
import { Link } from "react-router-dom";

const Courses = () => {
  const data = useLoaderData();
  const isAdmin = sessionStorage.getItem("isAdmin") === "true";

  return (
    <div className="p-4">
      <h3 className="text-2xl font-semibold text-center mt-5 mb-8">All The Courses</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((singleCourse) => (
          <Link key={singleCourse.id} to={`/quiz/${singleCourse.id}`}>
            <SingleCourse singleCourse={singleCourse} />
          </Link>
        ))}
      </div>

      {isAdmin && (
        <div className="mt-6">
          <Link className="btn bg-green-500 text-white" to="/admin/add-course">
            Add Course
          </Link>
        </div>
      )}
    </div>
  );
};

export default Courses;


