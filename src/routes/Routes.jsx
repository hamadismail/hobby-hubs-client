import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllGroup from "../pages/AllGroup";
import CreateGroup from "../pages/CreateGroup";
import MyGroup from "../pages/MyGroup";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import GroupDetails from "../components/GroupDetails/GroupDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateGroup from "../pages/UpdateGroup";
import Spinner from "../components/ui/Spinner";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Spinner />,
        loader: () => fetch("http://localhost:3000/hobbies"),
        Component: Home,
      },
      {
        path: "groups",
        hydrateFallbackElement: <Spinner />,
        loader: () => fetch("http://localhost:3000/hobbies"),
        Component: AllGroup,
      },
      {
        path: "createGroup",
        element: (
          <PrivateRoute>
            <CreateGroup />
          </PrivateRoute>
        ),
      },
      {
        path: "myGroups",
        hydrateFallbackElement: <Spinner />,
        loader: () => fetch("http://localhost:3000/hobbies"),
        element: (
          <PrivateRoute>
            <MyGroup />
          </PrivateRoute>
        ),
      },
      {
        path: "updateGroup/:id",
        hydrateFallbackElement: <Spinner />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/hobbies/${params.id}`),
        Component: UpdateGroup,
      },
      {
        path: "group/:id",
        hydrateFallbackElement: <Spinner />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/hobbies/${params.id}`),
        Component: GroupDetails,
      },
      {
        path: "auth/login",
        Component: Login,
      },
      {
        path: "auth/signup",
        Component: SignUp,
      },
    ],
  },
]);
