import { CourseDataType } from "../../../../../../dataTypes/academiaData.type";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  FreeMode,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./courses.scss";
import Icon from "../../../../../main/modules/icon/Icon";
import SectionHeader from "../../../../modules/sectionHeader/SectionHeader";
import CourseThumb from "./courseThumb/CourseThumb";

function Courses({ data }: { data: CourseDataType[] }) {
  return (
    <section className="academia-home-courses-container">
      <div className="academia-container">
			<SectionHeader
          toptitle="Our Courses"
          title="Explore Our Popular Online Courses"
        />
        <div className="academia-home-course-content">
          {data && (
            <Swiper
              slidesPerView={"auto"}
              freeMode={true}
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
							}}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, FreeMode, Pagination]}
              className="mySwiper"
              loop={true}
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
<CourseThumb {...item} key={item.id} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}

export default Courses;
