import {
  MdOutlineClose,
  MdOutlineShare,
  MdFullscreen,
  MdOutlineFileDownload,
} from "react-icons/md";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./worksSlider.scss";
import { WorksDataType } from "../../../../../dataTypes/glintData.type";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
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
    <div className="glint-works-slider-container" id="glint-works-slider">
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
                <div className="glint-works-slider__icon-container">
                  <div className="glint-works-slider__share-container">
                    <MdOutlineShare className="glint-works-slider__btn" />

                    <div className="glint-works-slider-contextMenu">
                      <FacebookShareButton
                        url={item.image}
                        className="context-item"
                      >
                        <FaFacebook />
                        <span>facebook</span>
                      </FacebookShareButton>
                      <WhatsappShareButton
                        url={item.image}
                        className="context-item"
                      >
                        <FaWhatsapp />
                        <span>whatsapp</span>
                      </WhatsappShareButton>
                    </div>
                  </div>

                  <MdFullscreen
                    className="glint-works-slider__btn"
                    onClick={() =>
                      document
                        .getElementById("glint-works-slider")
                        ?.requestFullscreen()
                    }
                  />
                  <a href={item.image} download>
                    <MdOutlineFileDownload className="glint-works-slider__btn" />
                  </a>
                  <MdOutlineClose
                    className="glint-works-slider__btn"
                    onClick={() => setShowWorksSlider(false)}
                  />
                </div>

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
        </Swiper>
      </div>
    </div>
  );
}

export default WorksSlider;
