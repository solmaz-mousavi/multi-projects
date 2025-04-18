import { useNavigate, useOutletContext } from "react-router-dom";
import {
  AcademiaDataType,
  CourseDataType,
} from "../../../../dataTypes/academiaData.type";
import {
  getRangeSumOfData,
  getResultByID,
} from "../../../../utils/getDataByID";
import Icon from "../../../main/modules/icon/Icon";
import Score from "../../../main/modules/score/Score";
import "./courseThumb.scss";
import "animate.css";

interface CourseThumbPropsType extends CourseDataType {
	purchased?: boolean;
}
function CourseThumb({
  id,
  title,
  iconName,
  teacher,
  score,
  price,
  discount,
  lectures,
	purchased
}: CourseThumbPropsType) {
  const academiaData = useOutletContext<AcademiaDataType>();
  const navigate = useNavigate();
  const courseTeacher = getResultByID({
    ID: teacher,
    data: academiaData.teachers,
  });
  const duration = getRangeSumOfData({ data: lectures, range: "duration" });

  return (
    <div
      className={`academia-course-thumb-container animate__animated animate__fadeIn ${purchased ? "purchased" : ""}`}
      onClick={() => navigate(`/academia/course/${id}`)}
    >
      <div className="academia-course-thumb-top">
        <Icon name={iconName} />
        <div className="academia-course-thumb-details">
          <h3 className="academia-title">{title}</h3>
          <div className="score-wrapper">
            <Score score={score} />
            <div>
              <>&#x28;</>
              {score}
              <>&#x29;</>
            </div>
          </div>
          <div className="teacher-wrapper">
            <div className="image-wrapper">
              <img src={courseTeacher.img} alt={courseTeacher.name} />
            </div>
            <p className="author">
              by <>&#xa0;</>
              {courseTeacher.name}
            </p>
          </div>
          <p className="lecture">
            {lectures.length} lectures <>&#x28;</>
            {duration} mins<>&#x29;</>
          </p>
        </div>
      </div>
      <div className={`price-wrapper ${purchased ? "hidden" : ""}`}>
        <p className={discount > 0 ? "deleted" : ""}>
          {price === 0 ? "free" : `$ ${price}`}
        </p>
        {discount > 0 && (
          <p className="new-price">
            $ {(price * (1 - discount / 100)).toFixed(2)}
          </p>
        )}
      </div>
      <button className={`academia-course-thumb-btn ${purchased ? "hidden" : ""}`}>enroll now!</button>
      {discount > 0 && !purchased && (
        <div className="academia-course-discount">{discount}%</div>
      )}
    </div>
  );
}

export default CourseThumb;
