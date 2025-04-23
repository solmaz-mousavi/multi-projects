import { useNavigate, useOutletContext } from "react-router-dom";
import "./packageThumb.scss";
import {
  AcademiaDataType,
  PackageDataType,
} from "../../../../dataTypes/academiaData.type";
import { getResultByID } from "../../../../utils/getDataByID";
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";

function PackageThumb({ id, title, courses, price }: PackageDataType) {
  const academiaData = useOutletContext<AcademiaDataType>();
  const { userInfo } = useContext(AuthContext);
  const purchased = userInfo?.packages.includes(id);

  return (
    <div className="academia-package-thumb-container academia-thumb">
      <img
        src="/assets/images/academia/flaticons/aqua/milestone.png"
        alt="road map"
        className="academia-avatar"
      />
      <h3 className="academia-title-sm">{title}</h3>
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

      {purchased ? (
        <div className="academia-package-purchased">
          You have purchased this package.
        </div>
      ) : (
        <div className="btn">
          Learn All Above For Just<span> ${price}</span>
        </div>
      )}
    </div>
  );
}

export default PackageThumb;
