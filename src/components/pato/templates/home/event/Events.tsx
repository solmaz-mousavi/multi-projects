import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { EventsDataType } from "../../../../../dataTypes/patoData.type";
import { useNavigate } from "react-router-dom";
import { remainDays, remainHours } from "../../../../../utils/remainTime";
import { dateFormatter } from "../../../../../utils/dateFormatter";
import Button from "../../../../main/modules/button/Button";
import Aos from "../../../../main/modules/aos/Aos";
import "./events.scss";

function Events({ data }: { data: EventsDataType[] }) {
  const navigate = useNavigate();
  return (
    <section className="pato-home__events-container">
      <Aos aosStyle="fadeInUp" once={true}>
        <div className="pato-home__events-header">
          <p className="pato-top-title">Upcoming</p>
          <h4 className="pato-title">events</h4>
        </div>
      </Aos>

      <Aos aosStyle="fadeInUp" once={true}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper pato-home__events-content"
          loop={true}
        >
          {data &&
            data.map((item, index) => {
              const remDay = Number(remainDays(item.date));
              const remHour = Number(remainHours(item.time));
              return (
                <SwiperSlide className="pato-home__events-item" key={index}>
                  <div className="pato-home__events-item-time">
                    <p>
                      {item.time} - {dateFormatter(item.date, 1)}
                    </p>
                  </div>
                  <div className="pato-home__events-item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="pato-home__events-item-details">
                    <h3 className="pato-subtitle">{item.title}</h3>
                    <p className="desc pato-desc">{item.desc}</p>

                    <hr />
                    <p className="remDayTxt">remaining time:</p>

                    <div className="remainTime-container">
                      <p className="remain-time">
                        {remDay > 0
                          ? remDay
                          : remDay === 0 && remHour > 0
                          ? remHour
                          : "expired"}
                      </p>
                      <p className="remain-unit">
                        {remDay > 0
                          ? "days"
                          : remDay === 0 && remHour > 0
                          ? "hours"
                          : ""}
                      </p>
                    </div>

                    <Button
                      text="view details"
                      variant="pato-transparent"
                      border={false}
                      icon={{ name: "MdArrowRightAlt" }}
                      clickHandler={() => navigate("/pato/reservation")}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Aos>
    </section>
  );
}

export default Events;
