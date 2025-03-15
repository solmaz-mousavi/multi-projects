import { SlideDataType } from "../../../../../dataTypes/patoData.type";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Slider({ data }: { data: SlideDataType[] }) {
  return (
    <>
      <>
        <Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          loop={true}
        >
          {data &&
            data.map((item, index) => (
              <SwiperSlide className="slide-item" key={index}>
                <div
                  className="pato-home-slider-container"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                  <button>{item.button.title}</button>
                </div>
              </SwiperSlide>
            ))}
          <SwiperSlide className="slide-item">
            <img src="/src/assets/images/works/grow-green.jpg.webp" alt="" />
          </SwiperSlide>
        </Swiper>
      </>
    </>
  );
}

export default Slider;
