import { IntroDataType } from "../../../../../dataTypes/patoData.type";
import { useNavigate } from "react-router-dom";
import Button from "../../../../main/modules/button/Button";
import Aos from "../../../../main/modules/aos/Aos";
import "./intro.scss";

function Intro({ data }: { data: IntroDataType[] }) {
  const navigate = useNavigate();
  return (
    <section className="pato-home-intro-container">

        <div className="pato-header">
      <Aos aosStyle="fadeInUp" once={true}>
          <p className="pato-top-title">discover</p>
          <h3 className="pato-title">pato place</h3>
      </Aos>
        </div>

      <Aos aosStyle="fadeInUp" once={true}>
        <div className="pato-home-intro-content">
          {data &&
            data.map((item) => (
              <div className="pato-home-intro-content-container">
                <div className="pato-image-hover-wrapper">
                  <img
                    className="pato-home-intro-content__image"
                    src={item.image}
                    alt=""
                  />
                </div>
                <h4 className="pato-home-intro-content__title pato-subtitle">{item.title}</h4>
                <p className="pato-home-intro-content__desc pato-desc">{item.desc}</p>
                <Button
                  text="more details"
                  variant="pato-transparent"
                  border={false}
                  icon={{ name: "MdArrowRightAlt" }}
                  clickHandler={() => navigate(`${item.route}`)}
                />
              </div>
            ))}
        </div>
      </Aos>

    </section>
  );
}

export default Intro;
