import { CourseDataType } from "../../../../../../dataTypes/academiaData.type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./courses.scss";
import SectionHeader from "../../../../modules/sectionHeader/SectionHeader";
import CourseThumb from "../../../../modules/courseThumb/CourseThumb";
import Aos from "../../../../../main/modules/aos/Aos";
import SeeAll from "../seeAll/SeeAll";

function Courses({ data }: { data: CourseDataType[] }) {
  return (
    <section className="academia-home-courses-container">
      <div className="academia-container">
        <Aos aosStyle="fadeInUp" once={true}>
          <SectionHeader
            toptitle="Our Courses"
            title="Explore Our Popular Online Courses"
          />
        </Aos>
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
                <SwiperSlide key={item.id} className="grid">
                  <CourseThumb {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
				<SeeAll route="course"/>
      </div>
    </section>
  );
}

export default Courses;
