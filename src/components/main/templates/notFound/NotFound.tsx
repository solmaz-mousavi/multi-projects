import { FaRegTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../../modules/button/Button";
import "./notFound.scss";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={`notfound-container`}>
      <div className="notfound-icon">
        <FaRegTimesCircle />
      </div>
      <p className="notfound-txt">Page Not Found</p>
      <div className="notFound-btn" onClick={() => navigate("/")}>
        <Button variant="light" text="Go to Home"></Button>
      </div>
    </div>
  );
}

export default NotFound;
