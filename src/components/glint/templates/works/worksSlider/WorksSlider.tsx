import { MdOutlineClose, MdOutlineShare } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./worksSlider.scss";
import { WorksDataType } from "../../../../../dataTypes/glintDataType";
type WorksSliderPropsType = {
  data: WorksDataType[];
  slideNumber: number;
  setShowWorksSlider: (showWorksSlider: boolean) => void;
};
function WorksSlider({
  data,
  setShowWorksSlider,
  slideNumber,
}: WorksSliderPropsType) {
  return (
    <div className="works-slider-container">
      <div className="works-slider__header">
        <MdOutlineShare className="works-slider__header-btn" />
        <MdOutlineClose
          className="works-slider__header-btn"
          onClick={() => setShowWorksSlider(false)}
        />
      </div>
      <div className="works-slider__slides">
        <Swiper
          slidesPerView={1}
          initialSlide={slideNumber}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          loop={true}
        >
          {data &&
            data.map((item, index) => (
            
                <SwiperSlide className="slide-item" key={index}>
                  <div className="image-wrapper">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <h5>{item.title}</h5>
                  <p>{item.des}</p>
                  <div className="slideNumber">
                    {index + 1}/{data.length}
                  </div>
                </SwiperSlide>
          
            ))}
          <SwiperSlide className="slide-item">
            <img src="/src/assets/images/works/grow-green.jpg.webp" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default WorksSlider;
