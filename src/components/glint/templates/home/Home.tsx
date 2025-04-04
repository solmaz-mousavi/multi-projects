import { StyledHomeWrapper } from "./StyledHomeWrapper";
import Button from "../../../main/modules/button/Button";
import "./home.scss";
import Aos from "../../../main/modules/aos/Aos";
import { SocialDataType } from "../../../../dataTypes/mainData.type";
type HomePropsType = {
  scrollPosition: number;
  data: SocialDataType[];
};
function Home({ scrollPosition, data }: HomePropsType) {
  return (
    <>
      <StyledHomeWrapper
        $scrollposition={`100% ${scrollPosition / -8}px`}
        className="glint-section-container glint-home-container"
        id="Glint-Home"
      >
        <div className="home-txt-container">
          <Aos aosStyle="fadeInUp" once={true}>
            <h1 className="glint-top-title home-txt__welcome">Welcome to Glint</h1>
            <h2 className="glint-main-title home-txt__description">
              We are a creative group of people who design influential brands
              and digital experiences.
            </h2>
            <div className="home-txt__btn-container">
              <Button
                type="link"
                text="start a project"
                to="#Glint-Contacts"
                variant="light"
                transparent={true}
                className="home-txt__btn"
              />
              <Button
                type="link"
                text="more about us"
                to="#Glint-About"
                variant="light"
                transparent={true}
                className="home-txt__btn"
              />
            </div>
          </Aos>
        </div>

        <div className="home-social-container">
          {data &&
            data.map((item) => (
              <Button
							key={item.id}
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
