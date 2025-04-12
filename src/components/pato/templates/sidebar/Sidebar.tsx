import { useCallback, useEffect } from "react";
import "./sidebar.scss";
import Icon from "../../../main/modules/icon/Icon";
import { NavbarDataType, SocialDataType } from "../../../../dataTypes/mainData.type";
import { NavLink } from "react-router-dom";
type SidebarPropsType = {
  navbarData: NavbarDataType[];
  socialData: SocialDataType[];
	showSidebar: boolean;
	setShowSidebar: (showSidebar:boolean)=>void;
}

function Sidebar({navbarData,socialData,	showSidebar,	setShowSidebar}:SidebarPropsType) {

	const closeSidebarHandler = useCallback( () => {
    setShowSidebar(false);
    window.document
      .getElementById("pato")
      ?.removeEventListener("click", closeSidebarHandler);
  },[setShowSidebar]);

  useEffect(() => {
    if (showSidebar) {
      window.document
        .getElementById("pato")
        ?.addEventListener("click", closeSidebarHandler);
    }
  }, [showSidebar, closeSidebarHandler]);

	return (
	    <>
        <section
          className={`pato-sidebar-wrapper ${showSidebar ? "show" : ""}`}
        >
          <nav className="sidebar-container">
            <div onClick={() => setShowSidebar(false)} >
							<Icon name="MdClose" className="sidebar-closeBtn"/>
            </div>

            <h3 className="pato-subtitle">pato</h3>
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


          </nav>
        </section>

    </>
	)
}

export default Sidebar