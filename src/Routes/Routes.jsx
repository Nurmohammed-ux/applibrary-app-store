import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Apps from "../pages/Apps/Apps";
import AppDetails from "./AppDetails/AppDetails";
import InstallApps from "../pages/InstallApps/InstallApps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,
    HydrateFallback: () => (
      <div className="loading loading-spinner text-success"></div>
    ),
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/trendingAppsData.json"),
        Component: Home,
      },
      {
        path: "apps",
        loader: () => fetch("/appsData.json"),
        Component: Apps,
      },
      {
        path: "apps/:appId",
        loader: () => fetch("/appsData.json"),
        Component: AppDetails,
      },
      {
        path: "installApp",
        loader: () => fetch("/appsData.json"),
        Component: InstallApps,
      },
    ],
  },
]);
