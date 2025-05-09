import React from "react";

// const SingleCourse = ({ singleCourse }) => {
//   const { title, description } = singleCourse;
//   return (
//     <div>
//       <div className="border p-4">
//         <p>{title}</p>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default SingleCourse;




const SingleCourse = ({ singleCourse }) => {
  const { title, description } = singleCourse;
  return (
    <div className="border p-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SingleCourse;
