// import React from "react";

// import { createBrowserRouter } from "react-router";
// import Root from "../pages/Root";
// import ErrorPage from "../pages/ErrorPage";
// import Home from "../Components/Home";
// import Login from "../pages/login";
// import Signup from "../pages/Signup";
// import Courses from "../pages/Courses";
// import Leaderboard from "../pages/Leaderboard";
// import AdminLogin from "../pages/AdminLogin";
// import quiz from "../pages/quiz";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: Root,
//     errorElement: <ErrorPage></ErrorPage>,
//     children: [
//       {
//         index: true,
//         path: "/",
//         Component: Home,
//       },
//       {
//         path: "login",
//         Component: Login,
//       },
//       {
//         path: "signup",
//         Component: Signup,
//       },
//       {
//         path: "courses",
//         loader: () => fetch("subData.json"),
//         Component: Courses,
//       },
//       {
//         path: "leaderboard",
//         loader: () => fetch("leaderboard.json"),
//         Component: Leaderboard,
//       },
//       {
//         path: "admin",
//         Component: AdminLogin,
//       },
//       {
//         path: "quiz",
//         loader: () => fetch("quiz.json"),
//         Component: quiz,
//       },
//     ],
//   },
// ]);


import React from "react";
import { createBrowserRouter } from "react-router-dom";  // Corrected import
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../Components/Home";
import Login from "../pages/login";
import Signup from "../pages/Signup";
import Courses from "../pages/Courses";
import Leaderboard from "../pages/Leaderboard";
import AdminLogin from "../pages/AdminLogin";
import Quiz from "../pages/quiz";  // Capitalized the component for consistency

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,  // Changed from Component to element
    errorElement: <ErrorPage />,  // Corrected rendering of ErrorPage
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,  // Corrected for Home
      },
      {
        path: "login",
        element: <Login />,  // Corrected for Login
      },
      {
        path: "signup",
        element: <Signup />,  // Corrected for Signup
      },
      {
        path: "courses",
        element: <Courses />,  // Corrected for Courses
        // If you need to load data from a JSON file, you can use the loader:
        loader: () => fetch("/subData.json").then((res) => res.json()), 
      },
      {
        path: "leaderboard",
        element: <Leaderboard />,  // Corrected for Leaderboard
        // Similarly, if you want to fetch leaderboard data, use loader here as well
        loader: () => fetch("/leaderboard.json").then((res) => res.json()), 
      },
      {
        path: "admin",
        element: <AdminLogin />,  // Corrected for AdminLogin
      },
      {
        path: "quiz/:courseId",  // Dynamic path for quiz
        element: <Quiz />,  // Corrected for Quiz
        // If you need to load data for quiz dynamically:
        loader: () => fetch("/quiz.json").then((res) => res.json()), 
      },
    ],
  },
]);
