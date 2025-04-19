import { useNavigate, useOutletContext } from "react-router-dom";
import "./packageThumb.scss";
import { AcademiaDataType, PackageDataType } from "../../../../dataTypes/academiaData.type";
import { getResultByID } from "../../../../utils/getDataByID";
interface PackageThumbPropsType extends PackageDataType {
	purchased?: boolean;
}

function PackageThumb({id, title, desc, courses, price, purchased }: PackageThumbPropsType) {
	const navigate = useNavigate();
  const academiaData = useOutletContext<AcademiaDataType>();

  return (
    <div className={`academia-package-thumb-container ${purchased ? "purchased" : ""}`} onClick={() => navigate(`/academia/course/${id}`)}>
      <img
        src="/assets/images/academia/flaticons/aqua/milestone.png"
        alt="road map"
      />
      <h3 className="academia-subtitle">{title}</h3>
      {courses &&
        courses.map((item, index) => (
          <div className="academia-package-course-container" key={index}>
            <div className="row">{index + 1}</div>
            <div className="academia-desc">
              {getResultByID({ ID: item, data: academiaData.courses }).title}
            </div>
            <div className="price">
              ${getResultByID({ ID: item, data: academiaData.courses }).price}
            </div>
          </div>
        ))}
      <div className="btn">
        Learn All Above For Just<span> ${price}</span>
      </div>
    </div>
  );
}

export default PackageThumb;
