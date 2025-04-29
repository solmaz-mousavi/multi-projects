import { NavLink } from "react-router-dom";
import {
  NavbarDataType,
  SocialDataType,
} from "../../../../dataTypes/mainData.type";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import "./navbar.scss";
import { MdOutlineMenu } from "react-icons/md";
import Social from "../../modules/social/Social";
import HeaderInfo from "../../modules/headerInfo/HeaderInfo";

function Navbar({
  navbarData,
  socialData,
}: {
  navbarData: NavbarDataType[];
  socialData: SocialDataType[];
}) {
  const [showNavbar, setShowNavbar] = useState(false);
  const { userInfo } = useContext(AuthContext);
  return (
    <section className="academia-navbar-wrapper academia-container">
      <MdOutlineMenu
        className="academia-dropdown"
        onClick={() => setShowNavbar((prev) => !prev)}
      />
      <nav className={`academia-navbar-container ${showNavbar ? "show" : ""}`}>
        {/* navbar */}
        {navbarData &&
          navbarData.map((item) => (
            <NavLink
              key={item.id}
              to={`/academia/${item.route}`}
              onClick={() => setShowNavbar(false)}
              className={(link) =>
                link.isActive
                  ? "active academia-navbar-link"
                  : "academia-navbar-link"
              }
            >
              {item.title}
            </NavLink>
          ))}

        {userInfo && (
          <NavLink
            to={"/academia/mycourse"}
            onClick={() => setShowNavbar(false)}
            className={(link) =>
              link.isActive
                ? "active academia-navbar-link"
                : "academia-navbar-link"
            }
          >
            My Courses
          </NavLink>
        )}

        {/* social and contact info */}
        <div className="header">
          <Social data={socialData} />
          <HeaderInfo />
        </div>
      </nav>
			
      <div className="academia-navbar-right">
        <p className="academia-toptitle">get certificate</p>
      </div>
    </section>
  );
}

export default Navbar;
