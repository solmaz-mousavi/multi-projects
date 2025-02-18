import { useState } from "react";
import "./App.css";
import router from "./routes";
import { useRoutes } from "react-router-dom";
import Header from "./components/templates/main/header/Header";
import { BreakpointType } from "./dataTypes/mainDataType";

function App() {
  const routes = useRoutes(router);
	const [display, setDisplay] = useState<BreakpointType>(null)

  return <div className="App">
		<Header />
		
		{routes}
		
		
		
		
		</div>;
}

export default App;
