import {
  ClientsDataType,
  TeamMembersDataType,
} from "../../../../dataTypes/glintData.type";
import Aos from "../../../main/modules/aos/Aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./clients.scss";
import Icon from "../../../main/modules/icon/Icon";
import Button from "../../../main/modules/button/Button";
type ClientsPropsType = {
  clientsData: ClientsDataType[];
  teamMembersData: TeamMembersDataType[];
};

function Clients({ clientsData, teamMembersData }: ClientsPropsType) {
  return (
    <section id="Clients" className="section-container clients-container">
      <Aos aosStyle="fadeInUp" once={true}>
        <div className="clients-header">
          <p className="top-title clients-header__top">Our Clients</p>
          <p className="main-title clients-header__title">
            Glint has been honored to partner up with these clients
          </p>

          <div className="clients-slider">
            <Swiper
              pagination={true}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              slidesPerView="auto"
              loop={true}
            >
              {clientsData &&
                clientsData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Button
                      variant="grey"
                      icon={{ name: `${item.iconName}` }}
                      transparent={true}
                      border={false}
                      className="clients-item-icon"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </Aos>
      <div className="devider dark"></div>
      <Aos aosStyle="fadeInUp" once={true}>
        <div className="clients-team">
          <div className="team-slider">
            <Swiper
              navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
              slidesPerView={1}
              modules={[Navigation]}
              loop={true}
              className="mySwiper"
            >
              {teamMembersData &&
                teamMembersData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="team-thumbnail">
                      <p className="team-desc">{item.desc}</p>
                      <img
                        className="team-image"
                        src={item.image}
                        alt={item.name}
                      />
                      <p className="team-name">{item.name}</p>
                      <p className="team-job">{item.job}</p>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
            <Icon className="arrow arrow-left" name="TbArrowRight" />
            <Icon className="arrow arrow-right" name="TbArrowLeft" />
          </div>
        </div>
      </Aos>
      <div className="decoration"></div>
    </section>
  );
}

export default Clients;
