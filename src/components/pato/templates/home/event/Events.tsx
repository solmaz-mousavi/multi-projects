import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { EventsDataType } from "../../../../../dataTypes/patoData.type";
import "./events.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../../../main/modules/button/Button";
import { remainDays } from "../../../../../utils/remainDays";

function Events({ data }: { data: EventsDataType[] }) {
  const navigate = useNavigate();
  return (
    <section className="pato-home__events-container">
      <div className="pato-home__events-header">
        <p className="pato-top-title">Upcoming</p>
        <h4 className="pato-title">events</h4>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
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
          data.map((item, index) => (
            <SwiperSlide className="pato-home__events-item" key={index}>
              <div className="pato-home__events-item-time">
                <p>
                  {item.time} - {remainDays(item.date)[1]}
                </p>
              </div>
              <div className="pato-home__events-item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="pato-home__events-item-details">
                <h3 className="title">{item.title}</h3>
                <p className="desc">{item.desc}</p>
                <p className="remDayContainer">
                  <span className="remDayTxt">remaining days:</span>
                  <span className="remDay">{remainDays(item.date)[0]}</span>
                </p>
                <Button
                  text="view details"
                  variant="pato-transparent"
                  border={false}
                  icon={{ name: "MdArrowRightAlt" }}
                  clickHandler={() => navigate("/pato/reservation")}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}

export default Events;
