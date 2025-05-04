import React from "react";

import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../Components/Home";
import Login from "../pages/login";
import Signup from "../pages/Signup";
import Courses from "../pages/Courses";
import Leaderboard from "../pages/Leaderboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component: Signup,
      },
      {
        path: "courses",
        loader: () => fetch("subData.json"),
        Component: Courses,
      },
      {
        path: "leaderboard",
        loader: () => fetch("leaderboard.json"),
        Component: Leaderboard,
      },
    ],
  },
]);
