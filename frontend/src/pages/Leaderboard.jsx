import React from "react";
import { useLoaderData } from "react-router";

const Leaderboard = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div>leader</div>
    </div>
  );
};

export default Leaderboard;
