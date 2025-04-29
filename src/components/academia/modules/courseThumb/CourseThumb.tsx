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
import Score from "../score/Score";
import "./courseThumb.scss";
import "animate.css";
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import Button from "../../../main/modules/button/Button";
import { ModalContext } from "../../../../contexts/ModalContext";

function CourseThumb({
  id,
  title,
  iconName,
  teacher,
  score,
  price,
  discount,
  lectures,
}: CourseDataType) {
  const academiaData = useOutletContext<AcademiaDataType>();
  const { userInfo, setUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const { setShowModal, setModalDetails } = useContext(ModalContext);

  // determines if the course is purchased or not:
  const purchased =
    userInfo?.courses.includes(id) ||
    academiaData?.packages
      .filter((i) => userInfo?.packages.includes(i.id))
      .some((item) => item.courses.includes(id));

  // determines course's teacher
  const courseTeacher = getResultByID({
    ID: teacher,
    data: academiaData.teachers,
  });

  // determines course lectures's duration
  const duration = getRangeSumOfData({ data: lectures, range: "duration" });

  // course purchasing handler
  const purchaseHandler = () => {
    if (userInfo) {
      const newUserInfo = userInfo;
      newUserInfo.courses.push(id);
      setUserInfo(newUserInfo);
      setModalDetails({
        desc: "Congratulations! You have purchased this course, Now you can enjoy it.",
        icon: { name: "MdCheck", variant: "success" },
        button: [
          {
            title: "OK",
            variant: "success",
            clickHandler: () => setShowModal(false),
          },
        ],
      });
      setShowModal(true);
    } else {
      navigate("/academia/login");
    }
  };

  return (
    <div
      className="academia-course-thumb-container academia-thumb animate__animated animate__fadeIn"
      key={String(purchased)}
    >
      {/* course info */}
      <div className="academia-course-thumb-top">
        <Icon name={iconName} className="academia-avatar" />
        <div className="academia-course-thumb-details">
          <h3 className="academia-title-sm">{title}</h3>
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
              <img src={courseTeacher.image} alt={courseTeacher.name} />
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

      {/* the price and purchase button */}
      {!purchased && (
        <>
          <div className="price-wrapper">
            <p className={discount > 0 ? "deleted" : ""}>
              {price === 0 ? "free" : `$ ${price}`}
            </p>
            {discount > 0 && (
              <p className="new-price">
                $ {(price * (1 - discount / 100)).toFixed(2)}
              </p>
            )}
          </div>
          <Button
            text="enroll now!"
            variant="academia-aqua"
            border={false}
            className="academia-course-thumb-btn"
            clickHandler={purchaseHandler}
          />
        </>
      )}

      {/* show discount percent */}
      {discount > 0 && !purchased && (
        <div className="academia-course-discount">{discount}%</div>
      )}

      {/* link to show course details page*/}
      <Button
        text={
          purchased
            ? "You have purchased this course, Click to enjoy it!"
            : "see course details and lecture"
        }
        variant="transparent"
        border={false}
        icon={{ name: "MdArrowRightAlt" }}
        className="academia-course-details"
        clickHandler={() => navigate(`/academia/course/${id}`)}
      />
    </div>
  );
}

export default CourseThumb;
