import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllGroup from "../pages/AllGroup";
import CreateGroup from "../pages/CreateGroup";
import MyGroup from "../pages/MyGroup";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "allgroup",
        Component: AllGroup,
      },
      {
        path: "creategroup",
        Component: CreateGroup,
      },
      {
        path: "mygroup",
        Component: MyGroup,
      },
    ],
  },
]);
