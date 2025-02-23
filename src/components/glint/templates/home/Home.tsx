import { SocialDataType } from "../../../../dataTypes/glintDataType";
import { StyledHomeWrapper } from "./StyledHomeWrapper";
import Button from "../../../main/modules/button/Button";
import ScrollAnimation from "react-animate-on-scroll";

import "./home.scss";

type HomePropsType = {
  scrollPosition: number;
  data: SocialDataType[];
};

function Home({ scrollPosition, data }: HomePropsType) {

  return (
    <>

		
      <StyledHomeWrapper
        scrollPosition={`100% ${(scrollPosition / 8) * -1}px`}
        className="section-container home-container">
        <div className="home-txt-container">
		<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <p className="top-title home-txt__welcome">Welcome to Glint</p>
					</ScrollAnimation>
          <p className="main-title home-txt__description">
            We are a creative group of people who design influential brands and
            digital experiences.
          </p>
          <div className="home-txt__btn-container">
            <div className="home-txt__btn">
              <a href="#Contacts">start a project</a>
            </div>
            <div className="home-txt__btn">
              <a href="#About">more about us</a>
            </div>
          </div>
        </div>

        <div className="home-social-container">
          {data &&
            data.map((item, index) => (
              <div className="home-social__link" key={index}>

                <Button
       
                  color="transparent"
                  iconName={item.iconName}
                  tooltip={item.socialName}
                  tooltipType="left"
                  tooltipColor="var(--glint-color-green)"
                  className="social-link"
                ></Button>
              </div>
            ))}
        </div>
      </StyledHomeWrapper>
    </>
  );
}

export default Home;
