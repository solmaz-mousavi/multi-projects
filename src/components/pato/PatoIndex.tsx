import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Error from "../main/templates/error/Error";
import Loader from "../main/templates/loader/Loader";
import Sidebar from "./templates/sidebar/Sidebar";
import Navbar from "./templates/navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./pato.scss";
import Footer from "./templates/footer/Footer";

function PatoIndex() {
  const { patoData, pending, error } = useFetch({
    url: "/data/patodb.json",
    project: "pato",
  });

  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  return (
    <>
      {error && <Error error={error} fullScreen={true} />}
      {pending && <Loader type="data" fullScreen={true} />}
      {patoData && (
        <div
          id="pato"
          onScroll={(e) => setScrollPosition(e.currentTarget.scrollTop)}
        >
          {/* <Sidebar
          showSidebar={showSidebar}
           setShowSidebar={setShowSidebar}
          /> */}
					<Navbar setShowSidebar={setShowSidebar} scrollPosition={scrollPosition} navbarData={patoData.navbar} socialData = {patoData.social}/>
					<Sidebar
            navbarData={patoData.navbar}
						socialData = {patoData.social}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
					<Outlet/>
					<Footer socialData = {patoData.social} galleryData={patoData.gallery}/>
        </div>
      )}
    </>
  );
}

export default PatoIndex;
