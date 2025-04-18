import { useCallback, useEffect } from "react";
import "./sidebar.scss";
import Icon from "../../../main/modules/icon/Icon";
type SidebarPropsType = {
  data: string[];
  showSidebar: boolean;
  setShowSidebar: (showSidebar: boolean) => void;
};

function Sidebar({ data, showSidebar, setShowSidebar }: SidebarPropsType) {
  // ---- sidebar close handler ----
  const closeSidebarHandler = useCallback(() => {
    setShowSidebar(false);
    window.document
      .getElementById("glint")
      ?.removeEventListener("click", closeSidebarHandler);
  }, [setShowSidebar]);

  // ---- add event listener when sidebar is open ----
  useEffect(() => {
    if (showSidebar) {
      window.document
        .getElementById("glint")
        ?.addEventListener("click", closeSidebarHandler);
    }
  }, [showSidebar, closeSidebarHandler]);

  return (
    <>
      <section className={`glint-sidebar-wrapper ${showSidebar ? "show" : ""}`}>
        <nav className="sidebar-container">
          {/* ---- close btn ---- */}
          <div onClick={() => setShowSidebar(false)}>
            <Icon name="MdClose" className="sidebar-closeBtn" />
          </div>

          {/* ---- title ---- */}
          <h3 className="sidebar-title">navigation</h3>

          {/* ---- navbar ---- */}
          <ul className="sidebar-link-container">
            {data &&
              data.map((item) => (
                <li
                  key={item}
                  className="sidebar-link"
                  onClick={() => setShowSidebar(false)}
                >
                  <a href={`#Glint-${item}`}>{item}</a>
                </li>
              ))}
          </ul>

          {/* ---- description ---- */}
          <p className="sidebar-description">
            Perspiciatis hic praesentium nesciunt. Et neque a dolorum
            <strong className="sidebar-description-link"> voluptatem </strong>
            porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis
            neque reprehenderit.
          </p>
        </nav>
      </section>
    </>
  );
}

export default Sidebar;
