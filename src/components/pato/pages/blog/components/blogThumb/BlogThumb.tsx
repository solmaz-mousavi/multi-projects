import { BlogCategoryType, BlogDataType } from "../../../../../../dataTypes/patoData.type";
import { dateFormatter } from "../../../../../../utils/dateFormatter";
import Button from "../../../../../main/modules/button/Button";
import "./blogThumb.scss";
function BlogThumb({
  date,
  desc,
  title,
  image,
  author,
  categories,
  comments,
}: BlogDataType) {
  return (
    <div className="pato-blog-thumb-container">
      <div className="pato-blog-image pato-image-hover-wrapper">
        <img src={image} alt={title} />
      </div>
      <p className="pato-subtitle">{title}</p>
      <p className="pato-desc">
        by {author} | {date} | {categories.join(",")} | {comments.length}{" "}
        comments{" "}
      </p>
      <p className="pato-desc pato-blog-description">{desc}</p>
      <Button
        text="continue reading"
        variant="pato-transparent"
        border={false}
        icon={{ name: "MdArrowRightAlt" }}
      />
			<div className="pato-blog-date">
				<p className="day">{dateFormatter(date, 4)}</p>
				<p>{dateFormatter(date, 5)}</p>
			</div>
    </div>
  );
}

export default BlogThumb;
