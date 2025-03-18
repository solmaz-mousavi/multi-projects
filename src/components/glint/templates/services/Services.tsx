import { ServicesDataType } from "../../../../dataTypes/glintData.type";
import Aos from "../../../main/modules/aos/Aos";
import Icon from "../../../main/modules/icon/Icon";
import "./services.scss";

function Services({ data }: { data: ServicesDataType[] }) {
  return (
    <section id="Glint-Services" className="glint-section-container glint-services-container">
      <Aos aosStyle="fadeInUp" once={true}>
        <div className="services-header">
          <p className="glint-top-title services-header__top">What We Do</p>
          <h2 className="glint-main-title services-header__title">
            We've got everything you need to launch and grow your business
          </h2>
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
                    <h4>{item.title}</h4>
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
