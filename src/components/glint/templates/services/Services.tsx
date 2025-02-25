import { ServicesDataType } from "../../../../dataTypes/glintDataType";
import Aos from "../../../main/modules/aos/Aos";
import Button from "../../../main/modules/button/Button";
import "./services.scss";

function Services({ data }: { data: ServicesDataType[] }) {
  return (
    <section id="Services" className="section-container services-container">
      <Aos aosStyle="fadeInUp" once={true}>
        <div className="services-header">
          <p className="top-title services-header__top">What We Do</p>
          <p className="main-title services-header__title">
            We've got everything you need to launch and grow your business
          </p>
        </div>
      </Aos>
      <Aos aosStyle="fadeInUp" once={true}>
        <div className="service-item-container">
          {data &&
            data.map((item, index) => (
              <div key={index} className="service-item-thumbnail">
                <Button
                  className="service-item-icon"
                  color="transparent"
                  hover={false}
                  iconName={item.iconName}
                  iconColor="var(--glint-color-green)"
                />
                <div className="service-item__desc">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
        </div>
      </Aos>
    </section>
  );
}

export default Services;
