import { ServicesDataType } from "../../../../dataTypes/glintData.type";
import Aos from "../../../main/modules/aos/Aos";
import Icon from "../../../main/modules/icon/Icon";
import "./services.scss";

function Services({ data }: { data: ServicesDataType[] }) {
  return (
    <section id="Services" className="glint-section-container glint-services-container">
      <Aos aosStyle="fadeInUp" once={true}>
        <div className="services-header">
          <p className="glint-top-title services-header__top">What We Do</p>
          <p className="glint-main-title services-header__title">
            We've got everything you need to launch and grow your business
          </p>
        </div>
      </Aos>
      <div className="glint-devider dark"></div>
      <Aos aosStyle="fadeInUp" once={true}>
        <Aos aosStyle="fadeInUp" once={true}>
          <div className="service-item-container">
            {data &&
              data.map((item, index) => (
                <div key={index} className="service-item-thumbnail">
                  <div>
                    <Icon className="service-item-icon" name={item.iconName} />
                  </div>
                  <div className="service-item__desc">
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
          </div>
        </Aos>
      </Aos>
    </section>
  );
}

export default Services;
