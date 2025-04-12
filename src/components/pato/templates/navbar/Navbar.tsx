import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { NavbarDataType, SocialDataType } from "../../../../dataTypes/mainData.type";
import Icon from "../../../main/modules/icon/Icon";

import { MdDehaze } from "react-icons/md";
type NavbarPropsType = {
  scrollPosition: number;
  navbarData: NavbarDataType[];
  socialData: SocialDataType[];
  setShowSidebar: (showSidebar: boolean) => void;
};

function Navbar({
  scrollPosition,
  navbarData,
  socialData,
  setShowSidebar,
}: NavbarPropsType) {
  return (
    <nav
      className={`pato-navbar-wrapper ${scrollPosition > 10 ? "blured" : ""}`}
    >
      <div className="pato-logo">
        <img src="/assets/images/pato/logo.png" alt="pato restaurant" />
      </div>
      <div className="pato-navbar-container">
        {navbarData &&
          navbarData.map((item) => (
            <NavLink
              key={item.id}
              to={`/pato/${item.route}`}
              className={(link) =>
                link.isActive ? "active pato-navbar-link" : "pato-navbar-link"
              }
            >
              {item.title}
            </NavLink>
          ))}
      </div>
      <div className="pato-social-container">
        {socialData &&
          socialData.map((item) => (
            <Icon
              key={item.id}
              name={item.iconName}
              className="pato-navbar-social-icon"
            />
          ))}
      </div>
      <div className="pato-showSidebar-icon">
        <MdDehaze onClick={() => setShowSidebar(true)} />
      </div>
    </nav>
  );
}

export default Navbar;
