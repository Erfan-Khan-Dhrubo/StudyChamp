import React from "react";
import { useLoaderData } from "react-router";
import SingleRank from "../Components/SingleRank";

const Leaderboard = () => {
  const data = useLoaderData();
  //console.log(data);
  return (
    <div>
      <div>
        <div>
          <table className="table-auto border-collapse border border-gray-300 w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Rank</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Score</th>
              </tr>
            </thead>

            <tbody>
              {data.map((singleStudent) => (
                <SingleRank
                  key={singleStudent.id}
                  singleStudent={singleStudent}
                ></SingleRank>
              ))}
            </tbody>
          </table>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Leaderboard;
