import Header from "../../templates/header/Header";
import ChefThumb from "./chefThumb/ChefThumb";
import "./about.scss";
import { useOutletContext } from "react-router-dom";
import { PatoDataType } from "../../../../dataTypes/patoData.type";

function About() {
	const patoData = useOutletContext<PatoDataType>();

  return (
    <section className="pato-about-container">
      <Header title="about us" section={true} />

      <div className="pato-about-item-container">
        <p className="pato-top-title">Italian Restaurant</p>
        <h2 className="pato-title">our story</h2>
        <p className="pato-desc">
          Fusce at risus eget mi auctor pulvinar. Suspendisse maximus venenatis
          pretium. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Aliquam purus purus, lacinia a
          scelerisque in, luctus vel felis. Donec odio diam, dignissim a
          efficitur at, efficitur et est. Pellentesque semper est ut pulvinar
          ullamcorper. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Nulla et leo accumsan, egestas
          velit ac, fringilla tortor. Sed varius justo sed luctus mattis.
        </p>
      </div>

      <Header title=" " />

      <div className="pato-about-item-container">
        <div className="pato-about-item">
          <div className="pato-about-details">
            <p className="pato-top-title">Delicious</p>
            <h2 className="pato-title">recipes</h2>
            <p className="pato-desc">
              Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.
              Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi,
              ac facilisis ligula sem id neque.
            </p>
          </div>
          <div className="pato-image-hover-wrapper">
            <img
              src="/assets/images/pato/about/our-story-01.jpg"
              alt="pato recipes"
            />
          </div>
        </div>
        <div className="pato-about-item">
          <div className="pato-image-hover-wrapper">
            <img
              src="/assets/images/pato/about/our-story-02.jpg"
              alt="pato recipes"
            />
          </div>
          <div className="pato-about-details">
            <p className="pato-top-title">Romantic</p>
            <h2 className="pato-title">restaurant</h2>
            <p className="pato-desc">
              Fusce iaculis, quam quis volutpat cursus, tellus quam varius eros,
              in euismod lorem nisl in ante. Maecenas imperdiet vulputate dui
              sit amet vestibulum. Nulla quis suscipit nisl.
            </p>
          </div>
        </div>
      </div>

			<Header title=" " />

      <div className="pato-about-item-container">
        <p className="pato-top-title">Meet Our</p>
        <h2 className="pato-title">chef</h2>
				<div className="pato-about-chef-wrapper">

				{patoData?.chefs && patoData.chefs.map((item) => (
					<ChefThumb {...item} key={item.id} />
				))}
				</div>
      </div>


     
    </section>
  );
}

export default About;
