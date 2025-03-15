import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Error from "../main/templates/error/Error";
import Loader from "../main/templates/loader/Loader";
import Sidebar from "./templates/sidebar/Sidebar";
import Navbar from "./templates/navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./pato.scss";

function PatoIndex() {
  const { patoData, pending, error } = useFetch({
    url: "/data/patodb.json",
    project: "pato",
  });

  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

	useEffect(()=>{
		console.log(scrollPosition);
	},[scrollPosition]);

  return (
    <>
      {error && <Error error={error} fullScreen={true} />}
      {pending && <Loader type="data" fullScreen={true} />}
      {patoData && (
        <div
          id="pato"
          onScroll={(e) => setScrollPosition(e.currentTarget.scrollTop)}
        >
					<p>lll: {scrollPosition}</p>
          <Sidebar

          // showSidebar={showSidebar}
          // setShowSidebar={setShowSidebar}
          />
					<Navbar scrollPosition={scrollPosition} navbarData={patoData.navbar} socialData = {patoData.social}/>
					<Outlet context={{b:2}} />
        </div>
      )}
    </>
  );
}

export default PatoIndex;
