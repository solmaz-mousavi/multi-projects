import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Error from "../main/templates/error/Error";
import Loader from "../main/templates/loader/Loader";
import Logo from "./templates/logo/Logo";
import Menu from "./templates/menu/Menu";
import Sidebar from "./templates/sidebar/Sidebar";
import Scroll from "./templates/scroll/Scroll";
import Home from "./templates/home/Home";
import About from "./templates/about/About";
import Services from "./templates/services/Services";
import Works from "./templates/works/Works";
import Clients from "./templates/clients/Clients";
import Contact from "./templates/contact/Contact";
import Footer from "./templates/footer/Footer";
import "./glint.scss";

const Glint = () => {
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const [showSidebar, setShowSidebar] = useState<boolean>(false);

	// ---- fetch data and send by props to all components
	const { glintData, pending, error } = useFetch({
    url: "/data/glintdb.json",
    project: "glint",
  });
	
  return (
    <>
      {error && <Error error={error} fullScreen={true} />}
      {pending && <Loader type="data" fullScreen={true} />}
      {glintData && (
        <div
          id="glint"
          onScroll={(e) => setScrollPosition(e.currentTarget.scrollTop)}
        >
          <Logo />
          <Menu setShowSidebar={setShowSidebar} />
          <Sidebar
            data={glintData.menu}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
          <Scroll scrollPosition={scrollPosition} data={glintData.scrollData} />

          <Home scrollPosition={scrollPosition} data={glintData.social} />
          <About data={glintData.status} />
          <Services data={glintData.services} />
          <Works data={glintData.works} />
          <Clients
            clientsData={glintData.clients}
            teamMembersData={glintData.teamMembers}
          />
          <Contact data={glintData.social} />

          <Footer />
        </div>
      )}
    </>
  );
};

export default Glint;
