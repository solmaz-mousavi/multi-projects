import { RouteObject } from "react-router-dom";
import Glint from "./projects/Glint";
import Dashboard from "./projects/Dashboard";
import Pato from "./projects/Pato";
import PatoHome from "./components/pato/pages/home/Home";
import PatoAbout from "./components/pato/pages/about/About";
import PatoBlog from "./components/pato/pages/blog/Blog";
import BlogDetails from "./components/pato/pages/blogDetails/BlogDetails";
import PatoContact from "./components/pato/pages/contact/Contact";
import PatoGallery from "./components/pato/pages/gallery/Gallery";
import PatoMenu from "./components/pato/pages/menu/Menu";
import PatoReservation from "./components/pato/pages/reservation/Reservation";

import Academia from "./projects/Academia";
import AcademiaHome from "./components/academia/pages/home/Home";
import AcademiaCourse from "./components/academia/pages/course/Course";
import AcademiaAbout from "./components/academia/pages/about/About";
import AcademiaTeam from "./components/academia/pages/team/Team";
import AcademiaContact from "./components/academia/pages/contact/Contact";
import AcademiaPricing from "./components/academia/pages/pricing/Pricing";
import AcademiaBlog from "./components/academia/pages/blog/Blog";

import NotFound from "./components/main/templates/notFound/NotFound";

const Router = () => {
  const router: RouteObject[] = [
    { path: "/", element: Glint() },
    {
      path: "/pato/*",
      element: Pato(),
      children: [
        { path: "", element: PatoHome() },
        { path: "home", element: PatoHome() },
        { path: "about", element: PatoAbout() },
        { path: "blog", element: PatoBlog() },
        { path: "blog/:ID", element: BlogDetails() },
        { path: "contact", element: PatoContact() },
        { path: "gallery", element: PatoGallery() },
        { path: "menu", element: PatoMenu() },
        { path: "reservation", element: PatoReservation() },
      ],
    },
		{
      path: "/academia/*",
      element: Academia(),
      children: [
        { path: "", element: AcademiaHome() },
        { path: "home", element: AcademiaHome() },
        { path: "course", element: AcademiaCourse() },
        { path: "about", element: AcademiaAbout() },
        { path: "team", element: AcademiaTeam() },
        { path: "pricing", element: AcademiaPricing() },
        { path: "blog", element: AcademiaBlog() },
        { path: "contact", element: AcademiaContact() },
      ],
    },

    { path: "/dashboard", element: Dashboard() },
    { path: "/*", element: NotFound() },
  ];

  return router;
};
export default Router;
