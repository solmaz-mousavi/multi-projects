import { useState } from "react";
import { MainDataType } from "../../../../dataTypes/mainData.type";
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

  // ---- navbar show and hide handler ---------------------
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

  // ---- contact info section show and hide handler ---------------------
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
      {/* ------------- main - header ------------- */}
      <header id="Header" className="main-header-container">
        {/* ------------- navbar show btn ------------- */}
        <div className="header-btn" onClick={showNavbarHandler}>
          <Button
            text="Select Project"
            icon={{ name: "FaChevronDown" }}
            variant="grey"
            transparent={true}
            border={false}
          />
        </div>

        {/* ------------- contact info show btn ------------- */}
        <div className="header-btn" onClick={showContactInfoHandler}>
          <Button
            text="Contact Info"
            icon={{ name: "FaChevronDown" }}
            variant="grey"
            transparent={true}
            border={false}
          />
        </div>
      </header>

      {/* ------------- main - navbar (includes projects) ------------- */}
      <nav className={`main-navbar-wrapper ${showNavbar && "show"}`}>
        <Navbar closeNavbarHandler={closeNavbarHandler} data={data} />
      </nav>

      {/* ------------- main - contact info ------------- */}
      <section
        className={`main-contactInfo-wrapper ${showContactInfo && "show"}`}
      >
        <ContactInfo data={data.packages} />
      </section>
    </>
  );
}

export default Header;
