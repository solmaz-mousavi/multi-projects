import { FaCalendarAlt, FaComment, FaUser } from "react-icons/fa";
import { CommentDataType } from "../../../../../../../dataTypes/academiaData.type";
import "./blogThumb.scss";
type BlogThumbPropsType = {
  title: string;
  desc: string;
  image: string;
  date: string;
  author: string;
  comments: CommentDataType[];
};
function BlogThumb({
  title,
  desc,
  image,
  date,
  author,
  comments,
}: BlogThumbPropsType) {
  return(
    <div className="academia-blog-thumb-container">
      <div className="image-wrapper">
        <img src={image} alt={title} className="academia-blog-thumb-img" />
      </div>
			<div className="details-wrapper">
			<FaUser className="blog-thumb-icon"/>
			<span>{author}</span>

			<FaCalendarAlt className="blog-thumb-icon" />
<span>{date}</span>

<FaComment className="blog-thumb-icon"/>
<span>{comments.length} comments</span>

			</div>
      <h3 className="academia-subtitle">{title}</h3>
			<p className="academia-desc">{desc}</p>

    </div>
		
		);
}

export default BlogThumb;
