import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { ReviewDataType } from "../../../../../../dataTypes/patoData.type";
import Aos from "../../../../../main/modules/aos/Aos";
import "./review.scss";

function Review({ data }: { data: ReviewDataType[] }) {
  return (
    <section className="pato-home__reviews-container">
      <Aos aosStyle="fadeInUp" once={true}>
        <div className="pato-home__reviews-header">
          <p className="pato-top-title">Customers Say</p>
          <h4 className="pato-title">Reviews</h4>
        </div>
      </Aos>

      <Aos aosStyle="fadeInUp" once={true}>
        <Swiper
          slidesPerView={2}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper pato-home__reviews-content"
        >
          {data &&
            data.map((item) => (
              <SwiperSlide className="pato-home__reviews-item" key={item.id}>
                <p className="pato-desc">{item.desc}</p>
                <div className="pto-home__reviews-sep"></div>
               
               
							  <p className="pto-home__reviews-name">{item.name} - {item.city}</p>
                <p className="pto-home__reviews-date">{item.date}</p>
              </SwiperSlide>
            ))}
        </Swiper>
      </Aos>
    </section>
  );
}

export default Review;
