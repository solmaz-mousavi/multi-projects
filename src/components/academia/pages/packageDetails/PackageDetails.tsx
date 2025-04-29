import { useOutletContext } from "react-router-dom";
import {
  AcademiaDataType,
  PackageDataType,
} from "../../../../dataTypes/academiaData.type";
import "./packageDetails.scss";
import PackageThumb from "../../modules/packageThumb/PackageThumb";
import CourseThumb from "../../modules/courseThumb/CourseThumb";

function PackageDetails({ data }: { data: PackageDataType }) {
  const academiaData = useOutletContext<AcademiaDataType>();
  return (
    <div className="academia-package-content">
      <PackageThumb {...data} />
      <div className="list">
        {academiaData.courses &&
          academiaData.courses
            .filter((item) => data.courses.includes(item.id))
            .map((i) => <CourseThumb {...i} key={i.id} />)}
      </div>
    </div>
  );
}

export default PackageDetails;


