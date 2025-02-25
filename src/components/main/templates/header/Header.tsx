import { useState } from "react";
import { MainDataType } from "../../../../dataTypes/mainDataType";
import Button from "../../modules/button/Button";
import Navbar from "../navbar/Navbar";
import "./header.scss";
import ContactInfo from "../contactInfo/ContactInfo";

type HeaderPropsType = {
  data: MainDataType;
};

function Header({ data }: HeaderPropsType) {
  const [showContactInfo, setShowContactInfo] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const showNavbarHandler = () => {
    setShowNavbar(true);
		setShowContactInfo(false);
    document
      .getElementById("main-wrapper")
      ?.addEventListener("click", closeNavbarHandler);
  };
  const closeNavbarHandler = () => {
    setShowNavbar(false);
    document
      .getElementById("main-wrapper")
      ?.removeEventListener("click", closeNavbarHandler);
  };

	const showContactInfoHandler = () => {
    setShowContactInfo(true);
		setShowNavbar(false);
    document
      .getElementById("main-wrapper")
      ?.addEventListener("click", closeContactInfoHandler);
  };
  const closeContactInfoHandler = () => {
    setShowContactInfo(false);
    document
      .getElementById("main-wrapper")
      ?.removeEventListener("click", closeContactInfoHandler);
  };

  return (
    <>
      <header id="Header" className="header-container">
        <div className="header-btn" onClick={showNavbarHandler}>
          <Button
            color="transparent"
            iconName="FaChevronDown"
            text="Select Project"
						hover={true}
          />
        </div>
        <div className="header-btn" onClick={showContactInfoHandler}>
          <Button
            color="transparent"
            iconName="FaChevronDown"
            text="Contact Info"
						hover={true}
          />
        </div>
      </header>
      <nav className={`navbar-wrapper ${showNavbar && "show"}`}>
        <Navbar
          closeNavbarHandler={closeNavbarHandler}
          data={data}
        />
      </nav>
			<section className={`contactInfo-wrapper ${showContactInfo && "show"}`}>
				<ContactInfo data={data.packages}/>
			</section>
    </>
  );
}

export default Header;
