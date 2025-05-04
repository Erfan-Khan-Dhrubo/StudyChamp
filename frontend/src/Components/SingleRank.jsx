import React from "react";

const SingleRank = ({ singleStudent }) => {
  const { rank, averageScore, name } = singleStudent;

  return (
    <tr>
      <td class="border border-gray-300 px-4 py-2">{rank}</td>
      <td class="border border-gray-300 px-4 py-2">{name}</td>
      <td class="border border-gray-300 px-4 py-2">{averageScore}</td>
    </tr>
  );
};

export default SingleRank;
