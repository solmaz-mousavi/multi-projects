import { BsClock, BsTelephone } from "react-icons/bs";
import "./headerInfo.scss";

// show some information about working hours and call number 
function HeaderInfo() {
  return (
    <>
      <div className="academia-header-item-container">
        <BsClock className="header-icon" />
        <div className="academia-header-item-details">
          <p className="academia-desc">Monday - Friday</p>
          <strong className="academia-desc">8:00AM - 8:00PM</strong>
        </div>
      </div>

      <div className="academia-header-item-container">
        <BsTelephone className="header-icon" />
        <div className="academia-header-item-details">
          <p className="academia-desc">Call Us</p>
          <strong>
            <a className="academia-desc" href="tel:+23923929210">
              +2 392 3929 210
            </a>
          </strong>
        </div>
      </div>
    </>
  );
}

export default HeaderInfo;
