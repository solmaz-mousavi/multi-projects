import React from "react";
import "./App.css";
import router from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  const routes = useRoutes(router);

  return <div className="App">{routes}</div>;
}

export default App;
