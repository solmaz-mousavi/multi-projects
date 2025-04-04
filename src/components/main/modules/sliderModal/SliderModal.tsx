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
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import "./sliderModal.scss";
type SliderModalPropsType = {
	data: any[];
	slideNumber: number;
	setShowSlider: (showWorksSlider: boolean) => void;
};

function SliderModal({
  data,
  slideNumber,
  setShowSlider,
}: SliderModalPropsType) {
	return (
		<div className="main-slider-container" id="main-slider">
		<div className="slider__slides">
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
						<SwiperSlide className="slide-item" key={item.id}>
							<div className="main-slider__icon-container">
								<div className="main-slider__share-container">
									<MdOutlineShare className="main-slider__btn" />

									<div className="main-slider-contextMenu">
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
									className="main-slider__btn"
									onClick={() =>
										document
											.getElementById("main-slider")
											?.requestFullscreen()
									}
								/>
								<a href={item.image} download>
									<MdOutlineFileDownload className="main-slider__btn" />
								</a>
								<MdOutlineClose
									className="main-slider__btn"
									onClick={() => setShowSlider(false)}
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
	)
}

export default SliderModal