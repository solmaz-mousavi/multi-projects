import { IntroDataType } from "../../../../../../dataTypes/academiaData.type";
import Aos from "../../../../../main/modules/aos/Aos";
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
          <Aos aosStyle="fadeInUp" once={true}>
            <h4 className="academia-toptitle">learn anything</h4>
            <h2 className="academia-main-title">
              Benefits About Online Learning Expertise
            </h2>
          </Aos>
          {data &&
            data.map((item) => (
              <Aos aosStyle="fadeInUp" once={true}>
                <IntroThumb {...item} key={item.id} />
              </Aos>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Intro;
