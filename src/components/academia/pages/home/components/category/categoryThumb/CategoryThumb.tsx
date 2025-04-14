import { useOutletContext } from "react-router-dom";
import {
  AcademiaDataType,
  CategoryDataType,
} from "../../../../../../../dataTypes/academiaData.type";
import "./categoryThumb.scss";

function CategoryThumb({ id, title, img }: CategoryDataType) {
  const academiaData = useOutletContext<AcademiaDataType>();
  const courseNum = academiaData.courses.filter((item) =>
    item.categories.includes(id)
  ).length;
	
  return (
    <div className="academia-category-thumb-container">
      <img src={img} alt={title} className="academia-category-thumb-img" />
      <h3 className="academia-category-thumb-title">{title}</h3>
      <p className="academia-category-thumb-desc">{courseNum} courses</p>
    </div>
  );
}

export default CategoryThumb;
