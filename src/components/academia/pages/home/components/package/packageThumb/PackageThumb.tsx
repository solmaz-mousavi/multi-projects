import { useOutletContext } from "react-router-dom";
import { getResultByID } from "../../../../../../../utils/getDataByID";
import "./packageThumb.scss";
import { AcademiaDataType } from "../../../../../../../dataTypes/academiaData.type";
type PackageThumbPropsType = {
  title: string;
  desc: string;
  courses: string[];
  price: number;
};
function PackageThumb({ title, desc, courses, price }: PackageThumbPropsType) {
  const academiaData = useOutletContext<AcademiaDataType>();
  return (
    <div className="academia-package-thumb-container">
      <img
        src="/assets/images/academia/flaticons/aqua/milestone.png"
        alt="road map"
      />
      <h3 className="academia-subtitle">{title}</h3>
      <p className="academia-desc">{desc}</p>
      {courses &&
        courses.map((item, index) => (
          <div className="academia-package-course-container">
            <div className="row">{index + 1}</div>
            <div className="academia-desc">
              {getResultByID(item, academiaData.courses).title}
            </div>
            <div className="price">
              ${getResultByID(item, academiaData.courses).price}
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
