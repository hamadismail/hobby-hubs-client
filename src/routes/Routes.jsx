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
import Error from "../pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    Component: MainLayout,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Spinner />,
        loader: () =>
          fetch("https://hobby-hub-server-seven.vercel.app/hobbies"),
        Component: Home,
      },
      {
        path: "groups",
        hydrateFallbackElement: <Spinner />,
        loader: () =>
          fetch("https://hobby-hub-server-seven.vercel.app/hobbies"),
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
        loader: () =>
          fetch("https://hobby-hub-server-seven.vercel.app/hobbies"),
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
          fetch(
            `https://hobby-hub-server-seven.vercel.app/hobbies/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateGroup />
          </PrivateRoute>
        ),
      },
      {
        path: "group/:id",
        hydrateFallbackElement: <Spinner />,
        loader: ({ params }) =>
          fetch(
            `https://hobby-hub-server-seven.vercel.app/hobbies/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <GroupDetails />
          </PrivateRoute>
        ),
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
