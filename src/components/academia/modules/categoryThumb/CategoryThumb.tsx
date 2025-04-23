import { useOutletContext } from "react-router-dom";
import {
  AcademiaDataType,
  CategoryDataType,
} from "../../../../dataTypes/academiaData.type";
import "./categoryThumb.scss";
interface CategoryThumbPropsType extends CategoryDataType {
  onClick: (title: string) => void;
}
function CategoryThumb({ id, title, image, onClick }: CategoryThumbPropsType) {
  const academiaData = useOutletContext<AcademiaDataType>();
  const courseNum = academiaData.courses.filter((item) =>
    item.categories.includes(id)
  ).length;

  return (
    <div
      className="academia-category-thumb-container academia-thumb"
      onClick={() => onClick(title)}
    >
      <img src={image} alt={title} className="academia-avatar" />
      <h3 className="academia-title-sm">{title}</h3>
      <p className="academia-desc">{courseNum} courses</p>
    </div>
  );
}

export default CategoryThumb;
