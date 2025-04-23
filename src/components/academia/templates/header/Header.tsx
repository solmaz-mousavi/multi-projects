import { BsClock } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { SocialDataType } from "../../../../dataTypes/mainData.type";
import Icon from "../../../main/modules/icon/Icon";
import "./header.scss";
import { MdLogin, MdLogout } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Header({ data }: { data: SocialDataType[] }) {
  const navigate = useNavigate();
  const { userInfo, setUserInfo, setToken } = useContext(AuthContext);

  const logout = () => {
    setUserInfo(null);
    setToken(null);
		localStorage.removeItem("token");
  };
	
  return (
    <section className="academia-header-wrapper academia-container">
      <div className="academia-header-left">
        <div className="academia-header-userInfo-container">
          {userInfo ? (
            <>
              <img src={userInfo.image} alt={userInfo.name} />
              <h3 className="academia-title-sm name">{userInfo.name}</h3>
              <MdLogout className="header-icon" />
              <button
                className="btn transparent academia-desc"
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <MdLogin className="header-icon" />
              <button
                className="btn transparent academia-desc"
                onClick={() => navigate("/academia/login")}
              >
                Login
              </button>
            </>
          )}
        </div>

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
      </div>

      <div className="academia-header-right">
        <div className="academia-header-social-container">
          {data &&
            data.map((item) => (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                key={item.id}
              >
                <Icon
                  key={item.id}
                  name={item.iconName}
                  className="header-social"
                />
              </a>
            ))}
        </div>

        <div className="academia-header-logo-container">
          <h2 className="header-logo">academia</h2>
          <p>Online Education & Learning</p>
        </div>
      </div>
    </section>
  );
}

export default Header;
