import useFetch from "../../../../hooks/useFetch";
import Error from "../../../main/templates/error/Error";
import Loader from "../../../main/templates/loader/Loader";
import Intro from "./templates/intro/Intro";
import Slider from "./templates/slider/Slider";
import Welcome from "./templates/welcome/Welcome";
import Menu from "./templates/menu/Menu";
import Events from "./templates/event/Events";
import Review from "./templates/review/Review";
import Blog from "./templates/blog/Blog";

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
