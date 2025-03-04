import {
  ClientsDataType,
  TeamMembersDataType,
} from "../../../../dataTypes/glintDataType";
import Aos from "../../../main/modules/aos/Aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import Button from "../../../main/modules/button/Button";
import "./clients.scss";
import Icon from "../../../main/modules/icon/Icon";
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
                    <Icon
                      className="clients-item-icon"
                      name={item.iconName}
                      color="#eee"
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
				<Icon className="arrow arrow-left" name="TbArrowRight" color="#555"/>
				<Icon className="arrow arrow-right" name="TbArrowLeft" color="#555"/>
          </div>
        </div>
      </Aos>
			<div className="decoration"></div>
    </section>
  );
}

export default Clients;
