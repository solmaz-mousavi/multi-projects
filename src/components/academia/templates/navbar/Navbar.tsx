import { NavLink } from "react-router-dom";
import { NavbarDataType } from "../../../../dataTypes/mainData.type";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import "./navbar.scss";
import { MdOutlineMenu } from "react-icons/md";

function Navbar({ data }: { data: NavbarDataType[] }) {
	const [showNavbar, setShowNavbar] = useState(false);
  const { userInfo } = useContext(AuthContext);
  return (
    <section className="academia-navbar-wrapper academia-container">
			<MdOutlineMenu className="academia-dropdown" onClick={()=> setShowNavbar((prev)=>!prev)} />
      <nav className={`academia-navbar-container ${showNavbar ? "show" : ""}`}>

        {data &&
          data.map((item) => (
            <NavLink
              key={item.id}
              to={`/academia/${item.route}`}
							onClick={()=> setShowNavbar(false)}
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
						onClick={()=> setShowNavbar(false)}
            className={(link) =>
              link.isActive
                ? "active academia-navbar-link"
                : "academia-navbar-link"
            }
          >
            My Courses
          </NavLink>
        )}
      </nav>
      <div className="academia-navbar-right">
        <p className="academia-toptitle">get certificate</p>
      </div>
    </section>
  );
}

export default Navbar;
