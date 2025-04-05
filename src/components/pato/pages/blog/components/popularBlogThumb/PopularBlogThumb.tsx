import "./popularBlogThumb.scss";
type PopularBlogThumbPropsType = {
  image: string;
  title: string;
  date: string;
  comment: number;
};
function PopularBlogThumb({
  image,
  title,
  date,
  comment,
}: PopularBlogThumbPropsType) {
  return (
    <div className="pato-blog-popular">
      <div className="pato-blog-popular-image pato-image-hover-wrapper">
        <img src={image} alt={title} />
      </div>
      <div className="pato-blog-popular-details">
        <p className="pato-subtitle">{title}</p>
        <div>
          <p className="pato-desc">{date}</p>
          <p className="pato-desc">{comment} comments</p>
        </div>
      </div>
    </div>
  );
}

export default PopularBlogThumb;
