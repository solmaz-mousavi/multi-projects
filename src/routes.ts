import Glint from "./pages/glint/Glint";
import Plants from "./pages/plants/Plants";
import Dashboard from "./pages/dashboard/Dashboard";
import { RouteObject } from "react-router-dom";

const router: RouteObject[] = [
  {path: "/", element: Glint() },
  {path: "/plants", element: Plants()},
  {path: "/dashboard", element: Dashboard()}
];

export default router;
