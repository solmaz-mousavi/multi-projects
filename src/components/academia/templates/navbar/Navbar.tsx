import { NavLink } from "react-router-dom";
import { NavbarDataType } from "../../../../dataTypes/mainData.type";
import "./navbar.scss";

function Navbar({ data }: { data: NavbarDataType[] }) {
  return (
    <section className="academia-navbar-wrapper academia-container">
      <nav className="academia-navbar-container">
        {data &&
          data.map((item) => (
            <NavLink
              key={item.id}
              to={`/academia/${item.route}`}
              className={(link) =>
                link.isActive
                  ? "active academia-navbar-link"
                  : "academia-navbar-link"
              }
            >
              {item.title}
            </NavLink>
          ))}
      </nav>
      <div className="academia-navbar-right">
        <p className="academia-toptitle">get certificate</p>
      </div>
    </section>
  );
}

export default Navbar;
