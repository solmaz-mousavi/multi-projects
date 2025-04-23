import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import Error from "./components/main/templates/error/Error";
import Loader from "./components/main/templates/loader/Loader";
import Header from "./components/main/templates/header/Header";
import GuidBox from "./components/main/templates/guidBox/GuidBox";
import Router from "./Router";
import AuthProvider from "./contexts/AuthContext";
import ModalProvider from "./contexts/ModalContext";
import Modal from "./components/main/templates/modal/Modal";

function App() {
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
        <ModalProvider>
          <Header data={mainData} />
          <main id="main-wrapper">
						<AuthProvider>
            <Router />
						</AuthProvider>
          </main>
					<Modal/>
        </ModalProvider>
      )}
    </>
  );
}

export default App;
