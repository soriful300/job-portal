import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomeLayout from "../layouts/HomeLayout";
import Register from "../auth/Register";
import Login from "../auth/Login";
import JobDetails from "../pages/jobdetails/JobDetails";
import ApplyJob from "../pages/applayJob/ApplyJob";
import ProtectedRoute from "../hooks/ProtectedRoute/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <HomeLayout></HomeLayout>,
      },
      {
        path: "/jobs/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "/applyJob/:id",
        element: (
          <ProtectedRoute>
            <ApplyJob></ApplyJob>
          </ProtectedRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
