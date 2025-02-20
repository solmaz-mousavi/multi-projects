import { useState } from "react";
import { DisplayType, MainDataType } from "../../../../dataTypes/main/mainDataType";
import Button from "../../modules/button/Button";
import Navbar from "../navbar/Navbar";
import "./header.scss";

type HeaderPropsType = {
  data: MainDataType;
  setDisplay: (display: DisplayType) => void;
};

function Header({ data, setDisplay }: HeaderPropsType) {
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
      {data?.breakPoints && (
        <header className="header-wrapper">
          <div className="header-container">
            <div className="header-left">
              <button onClick={showNavbarHandler}>Select Prject</button>
            </div>
            <div className="header-right">
              {data.breakPoints.map((item) => (
                <div
                  key={item.display}
                  className={item.display}
                  onClick={() => setDisplay(item)}
                >
                  <Button
                    iconName={item.iconName}
                    type="iconBtn"
                    color="dark"
                    title={String(item.display)}
                    className="navbar-btn"
                  />
                </div>
              ))}
            </div>
          </div>
          <nav className={`navbar-wrapper ${showNavbar && "show"}`}>
            <Navbar
              closeNavbarHandler={closeNavbarHandler}
              projects={data.projects}
            />
          </nav>
        </header>
      )}
    </>
  );
}

export default Header;
