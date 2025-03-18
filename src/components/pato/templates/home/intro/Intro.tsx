import { IntroDataType } from "../../../../../dataTypes/patoData.type";
import { MdArrowRightAlt } from "react-icons/md";
import "./intro.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../../../main/modules/button/Button";

function Intro({ data }: { data: IntroDataType[] }) {
  const navigate = useNavigate();
  return (
    <section className="pato-home-intro-container">
      <div className="pato-home-intro-header">
        <p className="pato-home-intro__title pato-top-title">discover</p>
        <h3 className="pato-title">pato place</h3>
      </div>
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
              <h4 className="pato-home-intro-content__title">{item.title}</h4>
              <p className="pato-home-intro-content__desc">{item.desc}</p>
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
    </section>
  );
}

export default Intro;
