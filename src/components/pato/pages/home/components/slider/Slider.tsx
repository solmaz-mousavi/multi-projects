import { SlideDataType } from "../../../../../../dataTypes/patoData.type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../main/modules/button/Button";
import Aos from "../../../../../main/modules/aos/Aos";
import "./slider.scss";

function Slider({ data }: { data: SlideDataType[] }) {
  const navigate = useNavigate();
  return (
    <section>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper pato-home-slider-container"
        loop={true}
      >
        {data &&
          data.map((item) => (
            <SwiperSlide className="slide-item" key={item.id}>
              <div
                className="pato-home-slide-container"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <Aos
                  aosStyle="fadeInUp"
                  once={true}
                  className="pato-home-slide-container"
                >
                  <h5 className="pato-home-slide__title pato-top-title">
                    {item.title}
                  </h5>
                  <p className="pato-title">{item.desc}</p>
                  <Button
                    text={item.button.title}
                    variant="pato-light"
                    border={false}
                    clickHandler={() => navigate(`${item.button.navigate}`)}
                  />
                </Aos>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}

export default Slider;
