import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomeLayout from "../layouts/HomeLayout";
import Register from "../auth/Register";
import Login from "../auth/Login";
import JobDetails from "../pages/jobdetails/JobDetails";
import ApplyJob from "../pages/applayJob/ApplyJob";
import ProtectedRoute from "../hooks/ProtectedRoute/ProtectedRoute";
import ApplyInfo from "../pages/applayJob/ApplyInfo";
import ApplyData from "../pages/myApplyJobs/ApplyData";
import AddJob from "../pages/AddNewJob/AddJob";
import AddedJobList from "../pages/AddNewJob/AddedJobList";
import Applications from "../pages/AddNewJob/Applications";

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
        loader: ({ params }) => fetch(`http://localhost:3000/${params.id}`),
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
        path: "/myApply",
        element: (
          <ProtectedRoute>
            <ApplyData></ApplyData>
          </ProtectedRoute>
        ),
      },
      {
        path: "/addJob",
        element: (
          <ProtectedRoute>
            <AddJob></AddJob>
          </ProtectedRoute>
        ),
      },
      {
        path: "/addedJobList",
        element: (
          <ProtectedRoute>
            <AddedJobList></AddedJobList>
          </ProtectedRoute>
        ),
      },
      {
        path: "/applications/:job_id",
        element: (
          <ProtectedRoute>
            <Applications></Applications>
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
