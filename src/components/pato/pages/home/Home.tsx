import useFetch from "../../../../hooks/useFetch";
import Error from "../../../main/templates/error/Error";
import Loader from "../../../main/templates/loader/Loader";
import Intro from "./components/intro/Intro";
import Slider from "./components/slider/Slider";
import Welcome from "./components/welcome/Welcome";
import Menu from "./components/menu/Menu";
import Events from "./components/event/Events";
import Review from "./components/review/Review";
import Blog from "./components/blog/Blog";

function Home() {
  const { patoData, pending, error } = useFetch({
    url: "/data/patodb.json",
    project: "pato",
  });

  return (
    <>
      {error && <Error error={error} fullScreen={true} />}
      {pending && <Loader type="data" fullScreen={true} />}
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
