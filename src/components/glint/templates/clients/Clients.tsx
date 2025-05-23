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
    <section
      id="Glint-Clients"
      className="glint-section-container glint-clients-container"
    >
      <Aos aosStyle="fadeInUp" once={true}>
        <div className="glint-clients-header">
          {/* ---- title ---- */}
          <p className="glint-top-title clients-header__top">Our Clients</p>
          <h2 className="glint-main-title clients-header__title">
            Glint has been honored to partner up with these clients
          </h2>

          {/* ---- clients ---- */}
          <div className="clients-slider">
            {clientsData && (
              <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
                slidesPerView="auto"
                loop={true}
              >
                {clientsData.map((item) => (
                  <SwiperSlide key={item.id}>
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
            )}
          </div>
        </div>
      </Aos>

      {/* ---- devider ---- */}
      <div className="glint-devider dark"></div>

      {/* ---- team members ---- */}
      <Aos aosStyle="fadeInUp" once={true}>
        <div className="clients-team">
          <div className="glint-team-slider">
            {teamMembersData && (
              <Swiper
                navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                slidesPerView={1}
                modules={[Navigation]}
                loop={true}
                className="mySwiper"
              >
                {teamMembersData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="team-thumbnail">
                      <p className="team-desc">{item.desc}</p>
                      <img
                        className="team-image"
                        src={item.image}
                        alt={item.name}
                      />
                      <h4 className="team-name">{item.name}</h4>
                      <p className="team-job">{item.job}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
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
