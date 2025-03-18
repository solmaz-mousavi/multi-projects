import { useNavigate } from "react-router-dom";
import Button from "../../../../main/modules/button/Button";
import "./welcome.scss";

function Welcome() {
  const navigate = useNavigate();
  return (
    <section className="pato-home-welcome-container">
      <div className="pato-home-welcome__txt">
        <h4 className="pato-home-welcome__txt-title pato-top-title">
          Welcome To Italian Restaurant
        </h4>
        <p className="pato-home-welcome__txt-desc">
          Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed
          fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac
          facilisis ligula sem id neque.
        </p>
        <Button
          text="our story"
          variant="pato-transparent"
          border={false}
          icon={{ name: "MdArrowRightAlt" }}
          clickHandler={() => navigate("/pato/about")}
        />
      </div>
      <div className="pato-home-welcome__img pato-image-hover-wrapper">
        <img src="/assets/images/pato/home/welcome/welcome.webp" alt="" />
      </div>
    </section>
  );
}

export default Welcome;
