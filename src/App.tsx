import { useState } from "react";
import { useRoutes } from "react-router-dom";
import router from "./routes";
import useFetch from "./hooks/useFetch";
import { DisplayType } from "./dataTypes/mainDataType";
import GuidBox from "./components/main/templates/guidBox/GuidBox";
import Error from "./components/main/templates/error/Error";
import Loader from "./components/main/templates/loader/Loader";
import Header from "./components/main/templates/header/Header";
import "./App.css";
import { StyledWrapper } from "./components/styled-components/StyledWrapper";

function App() {
  const routes = useRoutes(router);
  const { data, pending, error } = useFetch("/data/maindb.json");
  const [display, setDisplay] = useState<DisplayType>({} as DisplayType);
  const [showGuidBox, setShowGuidBox] = useState<boolean>(true);

  return (
    <>
      {error && <Error error={error} fullScreen={true} />}
      {pending && <Loader type="data" fullScreen={true} />}
      {data && (
        <>
          {showGuidBox && (
            <div onClick={() => setShowGuidBox(false)}>
              <GuidBox />
            </div>
          )}
          <Header data={data} setDisplay={setDisplay} />
          <main id="main-wrapper">
            <StyledWrapper displayWidth={display.width}>
              likshvliksdzvklfdiug
            </StyledWrapper>
            {routes}
          </main>

          <footer>footer</footer>
        </>
      )}
    </>
  );
}

export default App;
