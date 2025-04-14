import { useOutletContext } from "react-router-dom";
import {
  AcademiaDataType,
  CourseDataType,
  TeacherDataType,
} from "../../../../../../../dataTypes/academiaData.type";
import { getResultByID } from "../../../../../../../utils/getDataByID";
import Icon from "../../../../../../main/modules/icon/Icon";
import Score from "../../../../../../main/modules/score/Score";
import "./courseThumb.scss";
import { useEffect } from "react";

function CourseThumb({
  title,
  iconName,
  teacher,
  score,
  price,
  discount,
  lectures,
}: CourseDataType) {
  const academiaData = useOutletContext<AcademiaDataType>();
  const courseTeacher = getResultByID(teacher, academiaData.teachers);

  return (
    <div className="academia-course-thumb-container">
      <div className="academia-course-thumb-top">
        <Icon name={iconName} />
        <div className="academia-course-thumb-details">
          <h3 className="academia-title">{title}</h3>
          <div className="score-wrapper">
            <Score score={score} />
            <div>({score})</div>
          </div>
          <div className="teacher-wrapper">
						<div className="image-wrapper">

            <img src={courseTeacher.img} alt={courseTeacher.name} />
						</div>
            <p className="author">
              by {" "}
              {courseTeacher.name}{" "}
            </p>
          </div>
          <p className="lecture">
            {lectures.length} lectures ( {190} hours){" "}
          </p>

						</div>
						</div>
          <div className="price-wrapper">
            <p className={discount > 0 ? "deleted" : ""}>
              {price === 0 ?"free" :`$ ${price}`}
            </p>
            {discount > 0 && (
              <p className="new-price">$ {(price * (1 - discount / 100)).toFixed(2)}</p>
            )}
          </div>
					<button className="academia-course-thumb-btn">enroll now!</button>
      <p className="academia-category-thumb-desc"></p>
    </div>
  );
}

export default CourseThumb;
