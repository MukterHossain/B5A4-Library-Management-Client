import MainLayout from "@/components/layout/MainLayout";
import Tasks from "@/pages/tasks/Tasks";
import User from "@/pages/users/User";
import { createBrowserRouter } from "react-router";

export  const  router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children: [
      {
        index: true,
        Component: Tasks
      },
      {
        path: "tasks",
        Component: Tasks
      },
      {
        path: "users",
        Component: User
      },
    ],
  },
]);