import { IntroDataType } from "../../../../../../dataTypes/academiaData.type";
import IntroThumb from "./IntroThumb/IntroThumb";
import "./intro.scss";

function Intro({ data }: { data: IntroDataType[] }) {
  return (
    <section className="academia-home-intro-container">
      <div className="academia-container">
        <div className="academia-img-wrapper academia-home-intro-image">
          <img src="/assets/images/academia/home/intro.jpg" alt="academia" />
        </div>
        <div className="academia-home-intro-details">
          <h4 className="academia-toptitle">learn anything</h4>
          <h2 className="academia-main-title">
            Benefits About Online Learning Expertise
          </h2>
          {data && data.map((item) => <IntroThumb {...item} key={item.id} />)}
        </div>
      </div>
    </section>
  );
}

export default Intro;
