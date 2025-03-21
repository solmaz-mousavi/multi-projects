import useFetch from "../../../../hooks/useFetch";
import Error from "../../../main/templates/error/Error";
import Loader from "../../../main/templates/loader/Loader";
import Intro from "../../templates/home/intro/Intro";
import Slider from "../../templates/home/slider/Slider";
import Welcome from "../../templates/home/welcome/Welcome";
import Menu from "../../templates/home/menu/Menu";
import Events from "../../templates/home/event/Events";
import Review from "../../templates/home/review/Review";
import Blog from "../../templates/home/blog/Blog";

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
