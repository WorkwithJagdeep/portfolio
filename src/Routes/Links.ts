import { lazy } from "react";

export const Works = lazy(() => import("../Pages/Works/Works"));
export const ProjectOverview = lazy(
  () => import("../Pages/Project/ProjectOverview")
);
export const Home = lazy(() => import("../Pages/Home/Home"));
