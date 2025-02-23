import { useState } from "react";
import { MainDataType } from "../../../../dataTypes/mainDataType";
import Button from "../../modules/button/Button";
import Navbar from "../navbar/Navbar";
import "./header.scss";

type HeaderPropsType = {
  data: MainDataType;
};

function Header({ data }: HeaderPropsType) {
  const [showContactInfo, setShowContactInfo] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const showNavbarHandler = () => {
    setShowNavbar(true);
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

  return (
    <>
      <header className="header-container">
        <div className="header-btn" onClick={showNavbarHandler}>
          <Button
            color="transparent"
            iconName="FaChevronDown"
            text="Select Project"
          />
        </div>
        <div className="header-btn">
          <Button
            color="transparent"
            iconName="FaChevronDown"
            text="Contact Info"
          />
        </div>
      </header>
      <nav className={`navbar-wrapper ${showNavbar && "show"}`}>
        <Navbar
          closeNavbarHandler={closeNavbarHandler}
          projects={data.projects}
        />
      </nav>
    </>
  );
}

export default Header;
