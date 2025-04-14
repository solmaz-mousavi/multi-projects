import { Route, Routes } from "react-router-dom";
import Glint from "./projects/Glint";
import Dashboard from "./projects/Dashboard";

import Pato from "./components/pato/Pato";
import PatoHome from "./components/pato/pages/home/Home";
import PatoAbout from "./components/pato/pages/about/About";
import PatoBlog from "./components/pato/pages/blog/Blog";
import BlogDetails from "./components/pato/pages/blogDetails/BlogDetails";
import PatoContact from "./components/pato/pages/contact/Contact";
import PatoGallery from "./components/pato/pages/gallery/Gallery";
import PatoMenu from "./components/pato/pages/menu/Menu";
import PatoReservation from "./components/pato/pages/reservation/Reservation";

import Academia from "./components/academia/Academia";
import AcademiaHome from "./components/academia/pages/home/Home";
import AcademiaCourse from "./components/academia/pages/course/Course";
import AcademiaAbout from "./components/academia/pages/about/About";
import AcademiaTeam from "./components/academia/pages/team/OurTeam";
import AcademiaContact from "./components/academia/pages/contact/Contact";
import AcademiaPricing from "./components/academia/pages/pricing/Pricing";
import AcademiaBlog from "./components/academia/pages/blog/Blog";

import NotFound from "./components/main/templates/notFound/NotFound";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Glint />} />

      <Route path="/pato" element={<Pato />}>
        <Route path="" element={<PatoHome />} />
        <Route path="home" element={<PatoHome />} />
        <Route path="about" element={<PatoAbout />} />
        <Route path="blog" element={<PatoBlog />} />
        <Route path="blog/:ID" element={<BlogDetails />} />
        <Route path="contact" element={<PatoContact />} />
        <Route path="gallery" element={<PatoGallery />} />
        <Route path="menu" element={<PatoMenu />} />
        <Route path="reservation" element={<PatoReservation />} />
      </Route>

      <Route path="/academia" element={<Academia />}>
        <Route path="" element={<AcademiaHome />} />
        <Route path="home" element={<AcademiaHome />} />
        <Route path="course" element={<AcademiaCourse />} />
        <Route path="about" element={<AcademiaAbout />} />
        <Route path="team" element={<AcademiaTeam />} />
        <Route path="pricing" element={<AcademiaPricing />} />
        <Route path="blog" element={<AcademiaBlog />} />
        <Route path="contact" element={<AcademiaContact />} />
      </Route>

      <Route path="dashboard" element={<Dashboard />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
