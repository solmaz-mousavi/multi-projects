import { ProjectType } from "../../../../dataTypes/mainDataType";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./navbar.scss";
import useFetch from "../../../../hooks/useFetch";

type NavbarPropsType = {
  closeNavbarHandler: () => void;
  projects: ProjectType[];
};

function Navbar({ closeNavbarHandler, projects }: NavbarPropsType) {

  return (
    <>
      {projects && (
        <section className="navbar-container">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            navigation={true}
            keyboard={true}
            modules={[Navigation, Keyboard]}
            className="mySwiper"
          >
            {/* {projects.map((item) => (
              <SwiperSlide key={item.title}>
                <Link to={item.route}>
                  <div
                    className="navbar-thumbnail"
                    onClick={closeNavbarHandler}
                  >
                    <img
                      className="navbar-thumbnail_image"
                      src={item.image}
                      alt={item.title}
                    />
                    <p className="navbar-thumbnail_title">{item.title}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))} */}
            <SwiperSlide>coming soon</SwiperSlide>
            <SwiperSlide>coming soon</SwiperSlide>
            <SwiperSlide>coming soon</SwiperSlide>
          </Swiper>
        </section>
      )}
    </>
  );
}

export default Navbar;
