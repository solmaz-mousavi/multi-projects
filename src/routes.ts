import { RouteObject } from "react-router-dom";
import Glint from "./projects/Glint";
import Dashboard from "./projects/Dashboard";

const router: RouteObject[] = [
  {path: "/", element: Glint() },

  {path: "/dashboard", element: Dashboard()}
];

export default router;
