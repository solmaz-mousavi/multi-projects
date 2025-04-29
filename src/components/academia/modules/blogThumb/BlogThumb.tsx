import { FaCalendarAlt, FaComment, FaUser } from "react-icons/fa";
import { BlogDataType } from "../../../../dataTypes/academiaData.type";
import "./blogThumb.scss";
import { useNavigate } from "react-router-dom";

function BlogThumb({
  id,
  title,
  desc,
  image,
  date,
  author,
  comments,
}: BlogDataType) {
  const navigate = useNavigate();
  return (
    <div
      className="academia-blog-thumb-container academia-thumb"
      onClick={() => navigate(`/academia/blog/${id}`)}
    >
      <div className="academia-blog-image-wrapper">
        <img src={image} alt={title} className="academia-blog-thumb-img" />
      </div>

      <div>
        <div className="details-wrapper">
          <div>
            <FaUser className="academia-icon" />
            <span>{author}</span>
          </div>

          <div>
            <FaCalendarAlt className="academia-icon" />
            <span>{date}</span>
          </div>

          <div>
            <FaComment className="academia-icon" />
            <span>{comments.length} comments</span>
          </div>
        </div>

        <h3 className="academia-title-sm">{title}</h3>
        <p className="academia-desc">{desc}</p>
      </div>
    </div>
  );
}

export default BlogThumb;
