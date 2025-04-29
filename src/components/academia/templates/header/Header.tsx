import { SocialDataType } from "../../../../dataTypes/mainData.type";
import "./header.scss";
import { MdLogin, MdLogout } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Social from "../../modules/social/Social";
import HeaderInfo from "../../modules/headerInfo/HeaderInfo";

function Header({ data }: { data: SocialDataType[] }) {
  const navigate = useNavigate();
  const { userInfo, setUserInfo, setToken } = useContext(AuthContext);

  const logout = () => {
    setUserInfo(null);
    setToken(null);
    localStorage.removeItem("token");
    navigate("/academia/");
  };

  return (
    <section className="academia-header-wrapper academia-container">
      <div className="academia-header-left">

        {/* user info / login link */}
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

        {/* working hours and contact info */}
        <HeaderInfo />
      </div>


      <div className="academia-header-right header">
				{/* social: */}
        <Social data={data} />
				
				{/* logo: */}
        <div className="academia-header-logo-container">
          <h2 className="header-logo">academia</h2>
          <p>Online Education & Learning</p>
        </div>
      </div>
    </section>
  );
}

export default Header;
