import { BlogCategoryType } from "../../../../../../dataTypes/patoData.type";
import Button from "../../../../../main/modules/button/Button";
import "./blogThumb.scss";
type BlogThumbPropsType = {
  date: string;
  desc: string;
  title: string;
  image: string;
  author: string;
  id: string;
  categories: BlogCategoryType[];
  comments: {
    date: string;
    desc: string;
    name: string;
    id: string;
    city: string;
  }[];
};

function BlogThumb({
  date,
  desc,
  title,
  image,
  author,
  categories,
  comments,
}: BlogThumbPropsType) {
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
      <p className="pato-desc">{desc}</p>
      <Button
        text="continue reading"
        variant="pato-transparent"
        border={false}
        icon={{ name: "MdArrowRightAlt" }}
      />
    </div>
  );
}

export default BlogThumb;
