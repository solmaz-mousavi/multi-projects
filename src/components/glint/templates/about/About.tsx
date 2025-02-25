import { StatusDataType } from "../../../../dataTypes/glintDataType";
import Aos from "../../../main/modules/aos/Aos";
import CounterUp from "../../../main/modules/countUp/CounterUp";
import "./about.scss";

function About({ data }: { data: StatusDataType[] }) {
  return (
    <section id="About" className="section-container about-container">
      <Aos aosStyle="fadeInUp" once={true}>
        <div className="about-header">
          <p className="top-title about-header__top">Hello There</p>
          <p className="main-title about-header__title">We Are Glint</p>
        </div>
      </Aos>
      <Aos aosStyle="fadeInUp" once={true}>
        <div className="about-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt.
          </p>
        </div>
      </Aos>
      <Aos aosStyle="fadeInUp" once={true}>
        <div className="about-status-container">
          {data &&
            data.map((item, index) => (
              <div key={index} className="about-status">
                <p className="about-status__count">
                  <CounterUp end={Number(item.count)} once={true} />
                </p>
                <p className="about-status__des">{item.name}</p>
              </div>
            ))}
        </div>
      </Aos>
    </section>
  );
}

export default About;
