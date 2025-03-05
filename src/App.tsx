import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import router from "./routes";
import useFetch from "./hooks/useFetch";
import Error from "./components/main/templates/error/Error";
import Loader from "./components/main/templates/loader/Loader";
import Header from "./components/main/templates/header/Header";
import GuidBox from "./components/main/templates/guidBox/GuidBox";

function App() {
  const routes = useRoutes(router);
  const { mainData, pending, error } = useFetch({
    url: "/data/maindb.json",
    project: "main",
  });
  const [showGuidBox, setShowGuidBox] = useState<string>("");
  useEffect(() => {
    setShowGuidBox(localStorage.getItem("showGuidBox") || "true");
  }, []);

  return (
    <>
      {error && <Error error={error} fullScreen={true} />}
      {pending && <Loader type="data" fullScreen={true} />}
      {showGuidBox === "true" && <GuidBox />}
      {mainData && (
        <>
          <Header data={mainData} />
          <main id="main-wrapper">{routes}</main>
        </>
      )}
    </>
  );
}

export default App;
