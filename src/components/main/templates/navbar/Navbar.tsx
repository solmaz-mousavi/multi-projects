import { MainDataType, ProjectType } from "../../../../dataTypes/mainDataType";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./navbar.scss";
import useFetch from "../../../../hooks/useFetch";
import Button from "../../modules/button/Button";

type NavbarPropsType = {
  closeNavbarHandler: () => void;
  data: MainDataType;
};

function Navbar({ closeNavbarHandler, data }: NavbarPropsType) {
  return (
    <>
      {data.projects && (
        <section className="navbar-container">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            navigation={true}
            keyboard={true}
            modules={[Navigation, Keyboard]}
            className="mySwiper"
          >
            {data.projects.map((item) => (
              <SwiperSlide key={item.title}>
                <Link to={item.route}>
                  <div
                    className="navbar-thumbnail"
                    onClick={closeNavbarHandler}
                  >
                    <div className="navbar-thumbnail_top">
                      <img
                        className="navbar-thumbnail_image"
                        src={item.image}
                        alt={item.title}
                      />
                      <h5 className="navbar-thumbnail_title">{item.title}</h5>
                    </div>
                    <p className="navbar-thumbnail_description">
                      {item.description}
                    </p>

                    {item.packages.map((pack, index) => (
										<a className="navbar-thumbnail_package" href={data.packages.find((i) => i.name === pack)?.link}>
											<Button
                        key={index}
                        color="transparent"
                        iconName={
                          data.packages.find((i) => i.name === pack)?.iconName
                        }
                        iconColor={
													data.packages.find((i) => i.name === pack)?.color
													}
													text={data.packages.find((i) => i.name === pack)?.name}
													/>
												</a>
													))}
                  </div>
                </Link>
              </SwiperSlide>
            ))}
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
