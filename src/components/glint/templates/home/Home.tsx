import "./home.scss";
import useFetch from "../../../../hooks/useFetch";
import { SocialDataType } from "../../../../dataTypes/glint/glintDataType";
import { StyledHomeWrapper } from "./StyledHomeWrapper";
// import ScrollAnimation from "react-animate-on-scroll";
// import {AnimatedOnScroll} from "react-animated-css-onscroll";





type HomePropsType = {
	scrollPosition: number;
	data: SocialDataType[];
}

function Home({scrollPosition, data}: HomePropsType) {
	const { glintData, pending, error } = useFetch({url:"/data/glintdb.json", project:"glint"});

  return (
    // <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
    //   <section
    //     className="section-container home-container"
    //     style={{
    //       backgroundPosition: `100% -${Number(scrollPosition) / 8}px`,
    //     }}
    //     id="Home"
    //   >
    //     <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
    //       <div className="home-txt-container ">
    //         <p className="top-title home-txt__welcome">Welcome to Glint</p>
    //         <p className="main-title home-txt__description">
    //           We are a creative group of people who design influential brands
    //           and digital experiences.
    //         </p>
    //         <div className="home-txt__btn-container">
    //           <div className="home-txt__btn">
    //             <a href="#Contacts">start a project</a>
    //           </div>
    //           <div className="home-txt__btn">
    //             <a href="#About">more about us</a>
    //           </div>
    //         </div>
    //       </div>
    //     </ScrollAnimation>
    //     <div className="home-social-container">
    //       {error ? (
    //         <div>{error}</div>
    //       ) : (
    //         <>
    //           {/* {socialData.map((social, index) => (
    //             <a href="#" className="home-social__link" key={index}>
    //               <IconBtn
    //                 iconName={social.iconName}
    //                 view="social-link"
    //                 tooltip={social.socialName}
    //               />
    //             </a>
    //           ))} */}
    //         </>
    //       )}
    //     </div>
    //   </section>
    // </ScrollAnimation>
		// <AnimatedOnScroll animationIn="bounceInLeft" animationOut="fadeOut">
    <div>
        hello world
    </div>
// </AnimatedOnScroll>
  );
}

export default Home;



		// <StyledHomeWrapper scrollPosition={scrollPosition}>

