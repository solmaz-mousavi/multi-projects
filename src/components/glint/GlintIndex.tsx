import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Error from "../main/templates/error/Error";
import Loader from "../main/templates/loader/Loader";
import Home from "./templates/home/Home";
import Menu from "./templates/menu/Menu";
import Sidebar from "./templates/sidebar/Sidebar";
import Scroll from "./templates/scroll/Scroll";
import About from "./templates/about/About";
import Services from "./templates/services/Services";
import "./glint.scss";
import Logo from "./templates/logo/Logo";
import Aos2 from "../main/modules/aos/Aos";

function GlintIndex() {
  const { glintData, pending, error } = useFetch({
    url: "/data/glintdb.json",
    project: "glint",
  });

  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <>
      {error && <Error error={error} fullScreen={true} />}
      {pending && <Loader type="data" fullScreen={true} />}
      {glintData && (
        <div
          id="glint"
          onScroll={(e) => setScrollPosition(e.currentTarget.scrollTop)}
        >

					<Logo/>
          <Menu setShowSidebar={setShowSidebar}/>
					<Sidebar data={glintData.menu} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
					<Scroll scrollPosition={scrollPosition} data={glintData.scrollData}/>
					
					<Home scrollPosition={scrollPosition} data={glintData.social}/>
					<Aos2 >
						<p>soli moli goli</p>
					</Aos2>
					<About data={glintData.status} />
					<Services data={glintData.services}/>

          <h1 id="WorksTop">srthbyhjt</h1>
          <h1 id="WorksBottom">srthbyhjt</h1>
          <h1 id="Clients">srthbyhjt</h1>
          <h1 id="Contacts">srthbyhjt</h1>
          <h1>srthbyhjt</h1>
          <h1>srthbyhjt</h1>
          <h1>srthbyhjt</h1>
          <h1>srthbyhjt</h1>
          <h1>srthbyhjt</h1>
          <h1>srthbyhjt</h1>
          <h1>srthbyhjt</h1>
          <h1>srthbyhjt</h1>
          <h1>srthbyhjt</h1>
          <h1>srthbyhjt</h1>
          <h1>srthbyhjt</h1>
          <h1>srthbyhjt</h1>
          <h1>srthbyhjt</h1>
          <h1>srthbyhjt</h1>
          <h1>srthbyhjt</h1>
          <h1>srthbyhjt</h1>
          <h1>srthbyhjt</h1>
          <h1>srthbyhjt</h1>
          <h1>srthbyhjt</h1>
          <h1>srthbyhjt</h1>
          <h1>srthbyhjt</h1>
          <h1>srthbyhjt</h1>
        </div>
      )}
    </>
  );
}

export default GlintIndex;
