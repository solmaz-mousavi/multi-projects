import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import router from './routes';
import useFetch from './hooks/useFetch';
import { DisplayType } from './dataTypes/main/mainDataType';
import { StyledWrapper } from './components/styled-components/StyledWrapper';
import Error from './components/main/templates/error/Error';
import Loader from './components/main/templates/loader/Loader';
import Header from './components/main/templates/header/Header';
import './App.css';

function App() {
  const routes = useRoutes(router);
  const { mainData, pending, error } = useFetch({url:"/data/maindb.json", project:"main"});
  const [display, setDisplay] = useState<DisplayType>({} as DisplayType);
  const [showGuidBox, setShowGuidBox] = useState<boolean>(true);

  return (
    <div className="app-container">
      {error && <Error error={error} fullScreen={true} />}
      {pending && <Loader type="data" fullScreen={true} />}
      {mainData && (
        <>
          {/* {showGuidBox && (
            <div onClick={() => setShowGuidBox(false)}>
              <GuidBox />
            </div>
          )} */}
          <Header data={mainData} setDisplay={setDisplay} />
          <main id="main-wrapper">
            <StyledWrapper displayWidth={display.width}>{routes}</StyledWrapper>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
