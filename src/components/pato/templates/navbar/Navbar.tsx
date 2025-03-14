import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { SocialDataType } from "../../../../dataTypes/mainData.type";
import Icon from "../../../main/modules/icon/Icon";
type NavbarPropsType = {
	scrollPosition:number;
  navbarData: string[];
	socialData: SocialDataType[];
};

function Navbar({ scrollPosition ,navbarData, socialData }: NavbarPropsType) {
  return (
    <nav className={`pato-navbar-wrapper ${scrollPosition>10 ? "blured" : ""}`}>
      <div className="pato-logo">
        <img src="/assets/images/pato/logo.png" alt="pato restaurant" />
      </div>
      <div className="pato-navbar-container">
        {navbarData &&
          navbarData.map((item) => (
            <NavLink
              to={`/pato/${item}`}
              className={(link) =>
                link.isActive ? "active pato-navbar-link" : "pato-navbar-link"
              }
            >
              {item}
            </NavLink>
          ))}
      </div>
      <div className="pato-social-container">
				{socialData && socialData.map(item => (
					<Icon name={item.iconName} className="pato-navbar-social-icon"/>
				))}
			</div>
    </nav>
  );
}

export default Navbar;
