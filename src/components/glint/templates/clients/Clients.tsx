import { ClientsDataType } from "../../../../dataTypes/glintDataType";
import Aos from "../../../main/modules/aos/Aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Button from "../../../main/modules/button/Button";
import "./clients.scss";

function Clients({ data }: { data: ClientsDataType[] }) {
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
              {data &&
                data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Button
                      className="clients-item-icon"
                      color="transparent"
                      hover={true}
                      iconName={item.iconName}
                      iconColor="#eee"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </Aos>





      <Aos aosStyle="fadeInUp" className="clients-description" once={true}>
        <div>
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
        <div className="clients-status-container">
          {data &&
            data.map((item, index) => (
              <div key={index} className="clients-status">
                <div className="clients-status__count"></div>
                <p className="clients-status__des">{item.name}</p>
              </div>
            ))}
        </div>
      </Aos>
    </section>
  );
}

export default Clients;
