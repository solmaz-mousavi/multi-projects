import { useEffect } from "react";
import "./sidebar.scss";
import Icon from "../../../main/modules/icon/Icon";
type SidebarPropsType = {
	data: string[];
	showSidebar: boolean;
	setShowSidebar: (showSidebar:boolean)=>void;
}

function Sidebar({data,
	showSidebar,
	setShowSidebar}:SidebarPropsType) {

  const closeSidebarHandler = () => {
    setShowSidebar(false);
    window.document
      .getElementById("glint")
      ?.removeEventListener("click", closeSidebarHandler);
  };

  useEffect(() => {
    if (showSidebar) {
      window.document
        .getElementById("glint")
        ?.addEventListener("click", closeSidebarHandler);
    }
  }, [showSidebar]);

  return (
    <>
        <section
          className={`glint-sidebar-wrapper ${showSidebar ? "show" : ""}`}
        >
          <nav className="sidebar-container">
            <div onClick={() => setShowSidebar(false)} >
							<Icon name="MdClose" className="sidebar-closeBtn"/>
            </div>

            <h3 className="sidebar-title">navigation</h3>
            <ul className="sidebar-link-container">
              {data && data.map((item) => (
                <li
								key={item}
                  className="sidebar-link"
                  onClick={() => setShowSidebar(false)}
                >
                  <a href={`#Glint-${item}`}>{item}</a>
                </li>
              ))}
            </ul>

            <p className="sidebar-description">
              Perspiciatis hic praesentium nesciunt. Et neque a dolorum 
              <a href="#" className="sidebar-description-link">
							{" "}voluptatem{" "}
								 </a>
               porro iusto sequi veritatis libero enim. Iusto id suscipit
              veritatis neque reprehenderit.
            </p>
          </nav>
        </section>

    </>
  );
}

export default Sidebar;
