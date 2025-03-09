import { SocialDataType } from "../../../../dataTypes/glintDataType";
import { StyledHomeWrapper } from "./StyledHomeWrapper";
import Button from "../../../main/modules/button/Button";
import "./home.scss";
import Aos from "../../../main/modules/aos/Aos";
type HomePropsType = {
  scrollPosition: number;
  data: SocialDataType[];
};
function Home({ scrollPosition, data }: HomePropsType) {
  return (
    <>
      <StyledHomeWrapper
        $scrollposition={`100% ${scrollPosition / -8}px`}
        className="section-container home-container"
        id="Home"
      >
        <div className="home-txt-container">
          <Aos aosStyle="fadeInUp" once={true}>
            <p className="top-title home-txt__welcome">Welcome to Glint</p>
            <p className="main-title home-txt__description">
              We are a creative group of people who design influential brands
              and digital experiences.
            </p>
            <div className="home-txt__btn-container">
              <Button
                type="link"
                text="start a project"
                to="#Contacts"
                variant="light"
                transparent={true}
                className="home-txt__btn"
              />
              <Button
                type="link"
                text="more about us"
                to="#About"
                variant="light"
                transparent={true}
                className="home-txt__btn"
              />
            </div>
          </Aos>
        </div>

        <div className="home-social-container">
          {data &&
            data.map((item, index) => (
              <Button
							key={index}
                variant="light"
                icon={{ name: `${item.iconName}` }}
                className="social-link"
                round={true}
                tooltip={{
                  content: `${item.socialName}`,
                  color: "var(--glint-color-green)",
                  position: "left",
                }}
              ></Button>
            ))}
        </div>
      </StyledHomeWrapper>
    </>
  );
}

export default Home;
