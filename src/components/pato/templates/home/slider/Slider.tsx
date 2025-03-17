import { SlideDataType } from "../../../../../dataTypes/patoData.type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "./slider.scss";
import { useNavigate } from "react-router-dom";

function Slider({ data }: { data: SlideDataType[] }) {
	const navigate = useNavigate();
  return (
    <>
      <Swiper
        slidesPerView={1}
				spaceBetween={30}
        navigation={true}
				pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper pato-home-slider-container"
        loop={true}
      >
        {data &&
          data.map((item, index) => (
            <SwiperSlide className="slide-item" key={index}>
              <div
                className="pato-home-slide-container"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <h5 className="pato-home-slide__title pato-top-title">{item.title}</h5>
                <p className="pato-title">{item.desc}</p>
                <button className="pato-home-slide__btn" onClick={()=> navigate(`${item.button.navigate}`)}>{item.button.title}</button>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default Slider;
