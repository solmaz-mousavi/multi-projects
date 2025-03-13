import { RouteObject } from "react-router-dom";
import Glint from "./projects/Glint";
import Dashboard from "./projects/Dashboard";
import Pato from "./projects/Pato";
import PatoHome from "./components/pato/pages/home/Home";
import PatoAbout from "./components/pato/pages/about/About";
import PatoBlog from "./components/pato/pages/blog/Blog";
import PatoContact from "./components/pato/pages/contact/Contact";
import PatoGallery from "./components/pato/pages/gallery/Gallery";
import PatoMenu from "./components/pato/pages/menu/Menu";
import PatoReservation from "./components/pato/pages/reservation/Reservation";

const router: RouteObject[] = [
  {path: "/", element: Glint() },
  {path: "/pato/*", element: Pato(), children:[
		{path: "", element: PatoHome() },
		{path: "about", element: PatoAbout() },
		{path: "blog", element: PatoBlog() },
		{path: "contact", element: PatoContact() },
		{path: "gallery", element: PatoGallery() },
		{path: "menu", element: PatoMenu() },
		{path: "reservation", element: PatoReservation() }
	] },

  {path: "/dashboard", element: Dashboard()}
];

export default router;
