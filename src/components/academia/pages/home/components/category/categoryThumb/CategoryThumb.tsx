import "./categoryThumb.scss";
type CategoryThumbPropsType = {
  title: string;
  img: string;
};
function CategoryThumb({ title, img }: CategoryThumbPropsType) {
  return (
    <div className="academia-category-thumb-container">
      <img src={img} alt={title} className="academia-category-thumb-img" />
      <h3 className="academia-category-thumb-title">{title}</h3>
      <p className="academia-category-thumb-desc">{6} courses</p>
    </div>
  );
}

export default CategoryThumb;
