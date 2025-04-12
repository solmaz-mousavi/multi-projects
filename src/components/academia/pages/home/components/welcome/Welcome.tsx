import { useNavigate } from "react-router-dom";
import Button from "../../../../../main/modules/button/Button";
import "./welcome.scss";
import Aos from "../../../../../main/modules/aos/Aos";

function Welcome() {
  const navigate = useNavigate();
  return (
    <section className="academia-home-welcome-wrapper">
			<Aos aosStyle="fadeInUp" once={true}>

			
      <div className="academia-home-welcome-container academia-container">
        <h4 className="academia-toptitle">welcome to academia</h4>
        <h1 className="academia-main-title">Best Online Education Expertise</h1>
        <p className="academia-desc">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <div className="academia-home-welcome-btn-container">
          <Button
            text="get started now"
            variant="academia-aqua"
            border={false}
            icon={{ name: "BsArrowRight" }}
            clickHandler={() => navigate("/academia/course")}
          />
          <Button
            text="view courses"
            variant="academia-light"
            border={false}
            icon={{ name: "BsArrowRight" }}
            clickHandler={() => navigate("/academia/course")}
          />
        </div>
      </div>

			</Aos>
    </section>
  );
}

export default Welcome;
