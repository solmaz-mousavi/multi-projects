import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import router from './routes';
import useFetch from './hooks/useFetch';
import Error from './components/main/templates/error/Error';
import Loader from './components/main/templates/loader/Loader';
import Header from './components/main/templates/header/Header';

function App() {
  const routes = useRoutes(router);
  const { mainData, pending, error } = useFetch({url:"/data/maindb.json", project:"main"});
  const [showGuidBox, setShowGuidBox] = useState<boolean>(true);

  return (
    <>
      {error && <Error error={error} fullScreen={true} />}
      {pending && <Loader type="data" fullScreen={true} />}
      {mainData && (
        <>
          {/* {showGuidBox && (
            <div onClick={() => setShowGuidBox(false)}>
              <GuidBox />
            </div>
          )} */}
          <Header data={mainData} />
          <main id="main-wrapper">
						{routes}
          </main>
        </>
      )}
    </>
  );
}

export default App;
