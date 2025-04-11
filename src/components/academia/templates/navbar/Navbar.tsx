import { NavLink } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import "./navbar.scss";

function Navbar() {
	const { academiaData, pending, error } = useFetch({
    url: "/data/academiadb.json",
    project: "academia",
  });
  return (
    <section className="academia-navbar-wrapper">
      <nav className="academia-navbar-container">
				{academiaData?.navbar && academiaData.navbar.map(item => (
					            <NavLink
											key={item.id}
											to={`/academia/${item.route}`}
											className={(link) =>
												link.isActive ? "active academia-navbar-link" : "academia-navbar-link"
											}
										>
											{item.title}
										</NavLink>
				))}
			</nav>
      <div className="academia-navbar-right">
        <p className="academia-subtitle">get certificate</p>
      </div>
    </section>
  );
}

export default Navbar;
