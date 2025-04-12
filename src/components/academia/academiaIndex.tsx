import Header from "./templates/header/Header";
import Navbar from "./templates/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./templates/footer/Footer";
import useFetch from "../../hooks/useFetch";
import Error from "../main/templates/error/Error";
import Loader from "../main/templates/loader/Loader";
import "./academia.scss";

function AcademiaIndex() {
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

          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
}

export default AcademiaIndex;
