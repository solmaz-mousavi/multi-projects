import { Outlet } from "react-router-dom";
import Error from "../main/templates/error/Error";
import Loader from "../main/templates/loader/Loader";
import Header from "./templates/header/Header";
import Navbar from "./templates/navbar/Navbar";
import Footer from "./templates/footer/Footer";
import useFetch from "../../hooks/useFetch";
import "./academia.scss";

function Academia() {
  const { academiaData, pending, error } = useFetch({
    url: "/data/academiadb.json",
    project: "academia",
  });

  return (
    <>
      {error && <Error error={error} fullScreen={true} />}
      {pending && <Loader type="data" fullScreen={true} />}
      {academiaData && (
        <div id="academia">
          <Header data={academiaData.social} />
          <Navbar data={academiaData.navbar} />
          <Outlet context={academiaData} />
          <Footer socialData={academiaData.social} navbarData={academiaData.navbar} blogData={academiaData.blogs} />
        </div>
      )}
    </>
  );
}


export default Academia;
