import { IntroDataType } from "../../../../../../dataTypes/academiaData.type";
import "./intro.scss";

function Intro({ data }: { data: IntroDataType[] }) {
  return (
    <section className="academia-home-intro-container">
      <div className="academia-container">
        <div className="academia-img-wrapper academia-home-intro-image">
          <img
            src="/assets/images/academia/home/intro/intro.jpg"
            alt="academia"
          />
        </div>
        <div className="academia-home-intro-details">
          <h4 className="academia-toptitle">learn anything</h4>
          <h2 className="academia-main-title">
            Benefits About Online Learning Expertise
          </h2>
          {data &&
            data.map((item) => (
              <div className="academia-home-intro-thumb">
                <div className="academia-home-intro-thumb-img">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="academia-home-intro-thumb-details">
                  <h4 className="academia-subtitle">{item.title}</h4>
                  <p className="academia-desc">{item.desc}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Intro;
