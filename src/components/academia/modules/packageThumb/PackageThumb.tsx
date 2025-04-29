import { useNavigate, useOutletContext } from "react-router-dom";
import "./packageThumb.scss";
import {
  AcademiaDataType,
  PackageDataType,
} from "../../../../dataTypes/academiaData.type";
import { getResultByID } from "../../../../utils/getDataByID";
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { ModalContext } from "../../../../contexts/ModalContext";
import Button from "../../../main/modules/button/Button";

function PackageThumb({ id, title, courses, price }: PackageDataType) {
  const academiaData = useOutletContext<AcademiaDataType>();
  const { userInfo, setUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const { setShowModal, setModalDetails } = useContext(ModalContext);

  // determines if package purchased or not
  const purchased = userInfo?.packages.includes(id);

  // purchase handler
  const purchaseHandler = () => {
    if (userInfo) {
      const newUserInfo = userInfo;
      newUserInfo.packages.push(id);
      setUserInfo(newUserInfo);
      setModalDetails({
        desc: "Congratulations! You have purchased this course, Now you can enjoy it.",
        icon: { name: "MdCheck", variant: "success" },
        button: [
          {
            title: "OK",
            variant: "success",
            clickHandler: () => setShowModal(false),
          },
        ],
      });
      setShowModal(true);
    } else {
      navigate("/academia/login");
    }
  };

  return (
    <div
      className="academia-package-thumb-container academia-thumb"
      key={String(purchased)}
    >
      <div className="academia-package-thumb-title">
        <img
          src="/assets/images/academia/flaticons/aqua/milestone.png"
          alt="road map"
          className="academia-avatar"
        />
        <h3 className="academia-title-sm">{title}</h3>
      </div>

      {/* show courses of package */}
      {courses &&
        courses.map((item, index) => (
          <div className="academia-package-course-container" key={index}>
            <div className="academia-row">{index + 1}</div>
            <div className="academia-desc">
              {getResultByID({ ID: item, data: academiaData.courses }).title}
            </div>

            <div className="price">
              ${getResultByID({ ID: item, data: academiaData.courses }).price}
            </div>
          </div>
        ))}

      {/* purchase button */}
      {purchased ? (
        <div className="academia-package-purchased">
          You have purchased this package.
        </div>
      ) : (
        <Button
          text={`Learn All Above For Just $${price}`}
          variant="academia-aqua"
          border={false}
          className="academia-package-btn"
          clickHandler={purchaseHandler}
        />
      )}
    </div>
  );
}

export default PackageThumb;
