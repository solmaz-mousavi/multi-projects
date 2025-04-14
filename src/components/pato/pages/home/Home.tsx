import Intro from "./components/intro/Intro";
import Slider from "./components/slider/Slider";
import Welcome from "./components/welcome/Welcome";
import Menu from "./components/menu/Menu";
import Events from "./components/event/Events";
import Review from "./components/review/Review";
import Blog from "./components/blog/Blog";
import { useOutletContext } from "react-router-dom";
import { PatoDataType } from "../../../../dataTypes/patoData.type";

function Home() {
	const patoData = useOutletContext<PatoDataType>();

  return (
    <>
      {patoData && (
        <section className="pato-home-wrapper">
          <Slider data={patoData.slides} />
          <Welcome />
          <Intro data={patoData.intro} />
          <Menu data={patoData.menu} />

          <Events data={patoData.events} />
					<Review data={patoData.reviews}/>
					<Blog data={patoData.blogs}/>
        </section>
      )}
    </>
  );
}

export default Home;
