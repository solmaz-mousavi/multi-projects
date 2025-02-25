import "./menu.scss";
import { FaBars } from "react-icons/fa6";

function Menu(props: { setShowSidebar: (showSidebar: boolean) => void }) {
  return (
    <div className="menu-wrapper" onClick={() => props.setShowSidebar(true)}>
      <div className="menu-txt">MENU</div>
      <FaBars className="menu-icon" />
    </div>
  );
}

export default Menu;
