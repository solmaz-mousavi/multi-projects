import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Error from "../main/templates/error/Error";
import Loader from "../main/templates/loader/Loader";
import Home from "./templates/home/Home";
import "./glint.scss";

function GlintIndex() {
  const { glintData, pending, error } = useFetch({
    url: "/data/glintdb.json",
    project: "glint",
  });

  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [showSidebar, setShowSidebar] = useState<Boolean>(false);

  return (
    <>
      {error && <Error error={error} fullScreen={true} />}
      {pending && <Loader type="data" fullScreen={true} />}
      {glintData && (
        <div
          id="glint"
          onScroll={(e) => setScrollPosition(e.currentTarget.scrollTop)}
        >
          <Home scrollPosition={scrollPosition} data={glintData.social}/>

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
