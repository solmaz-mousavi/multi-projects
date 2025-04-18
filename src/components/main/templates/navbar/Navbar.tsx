import { MainDataType } from "../../../../dataTypes/mainData.type";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./navbar.scss";
import Button from "../../modules/button/Button";

type NavbarPropsType = {
  closeNavbarHandler: () => void;
  data: MainDataType;
};

function Navbar({ closeNavbarHandler, data }: NavbarPropsType) {
  return (
    <>
      {data.projects && (
        <section className="main-navbar-container">
          <Swiper
            slidesPerView="auto"
            spaceBetween={10}
            navigation={true}
            keyboard={true}
            modules={[Navigation, Keyboard]}
            className="mySwiper"
          >
            {data.projects.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="navbar-thumbnail" onClick={closeNavbarHandler}>
                  {/* ------------- image and main info -------------- */}
                  <div className="navbar-thumbnail_top">
                    <img
                      className="navbar-thumbnail_image"
                      src={item.image}
                      alt={item.title}
                    />
                    <Link to={item.route} className="navbar-thumbnail_title">
                      {item.title}
                    </Link>
                  </div>
                  {/* ------------- description ---------------------- */}
                  <p className="navbar-thumbnail_description">
                    {item.description}
                  </p>
                  {/* ------------- used technologies ---------------- */}
                  {item.packages.map((pack) => (
                    <Button
                      key={pack}
                      type="link"
                      variant="grey"
                      text={`${
                        data.packages.find((i) => i.name === pack)?.name
                      }`}
                      icon={{
                        name: `${
                          data.packages.find((i) => i.name === pack)?.iconName
                        }`,
                      }}
                      className="navbar-thumbnail_package"
                      transparent={true}
                      border={false}
                    />
                  ))}
                </div>
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
