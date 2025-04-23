import { FaUserCircle } from "react-icons/fa";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { VscTriangleDown } from "react-icons/vsc";
import {
  AcademiaDataType,
  CommentDataType,
} from "../../../../dataTypes/academiaData.type";
import "./comment.scss";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { getResultByID } from "../../../../utils/getDataByID";
import { BsCalendar3 } from "react-icons/bs";
import { TbUsers } from "react-icons/tb";
import Pagination from "../../../main/modules/pagination/Pagination";
import {
  IFormInputType,
  ValuesType,
} from "../../../../dataTypes/formData.type";
import { ButtonType } from "../../../../dataTypes/buttonData.type";
import { requiredStringValidator } from "../../../../validators/rules";
import Form from "../../../main/modules/form/Form";
import { dateFormatter } from "../../../../utils/dateFormatter";
import "animate.css";
import { ModalContext } from "../../../../contexts/ModalContext";
import { AuthContext } from "../../../../contexts/AuthContext";

function Comment({
  data,
  addComment,
}: {
  data: CommentDataType[];
  addComment: boolean;
}) {
  const academiaData = useOutletContext<AcademiaDataType>();
  const { userInfo } = useContext(AuthContext);
	const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);
  const perPage = 2;

  const { setShowModal, setModalDetails } = useContext(ModalContext);
  const inputs: IFormInputType[] = [
    {
      tag: "textarea",
      placeholder: "Write Your Message Here",
      className: "pato-contact-textarea",

      variant: "light",
      name: "message",
      initialvalue: "",
      validators: [requiredStringValidator()],
    },
  ];
  const buttons: ButtonType[] = [
    {
      type: "submit",
      text: "send",
      variant: "academia-aqua",
    },
  ];
  const submitHandler: (values: ValuesType) => void = (items) => {
    if (userInfo) {
      const newComment: CommentDataType = {
        id: String(data.length),
        userID: userInfo.id,
        role: "student",
        date: dateFormatter({ date: String(new Date()), type: 3 }),
        desc: String(items.message),
      };
      data.unshift(newComment);

      setModalDetails({
        desc: "Thank you for taking the time to share your experience with us.",
        icon: { name: "MdCheck", variant: "success" },
        button: [
          {
            title: "OK",
            variant: "success",
            clickHandler: () => {
              setShowModal(false);
              setStartIndex(0);
            },
          },
        ],
      });
      setShowModal(true);
    } else {
navigate("/academia/login")
		}
  };

  useEffect(() => {}, [academiaData, data]);

  return (
    <div className="academia-comment-wrapper">
      <div className="academia-comment-title">
        <h3>
          all comments{" "}
          <span>
            <>&#x28;</>
            {data.length || ""}
            <>&#x29;</>
          </span>{" "}
        </h3>
        <VscTriangleDown className="academia-icon icon" />
      </div>
      {data && data.length === 0 && <div>No comments yet.</div>}
      {data && data.length > 0 && (
        <>
          <div
            className="academia-comments-container animate__animated animate__fadeInRight"
            key={startIndex}
          >
            {data.slice(startIndex, startIndex + perPage).map((item) => {
              let user;
              if (item.role === "student") {
                user = getResultByID({
                  ID: item.userID,
                  data: academiaData.students,
                });
              } else {
                user = getResultByID({
                  ID: item.userID,
                  data: academiaData.teachers,
                });
              }

              return (
                <div className="academia-comment" key={item.id}>
                  <div className="academia-comment-user">
										{user.image ? <img src={user.image} alt={user.name} /> : <FaUserCircle className="academia-comment-user-icon" />}
                    
                    <div className="academia-comment-user-details">
                      <p>{user.name}</p>
                      <span>
                        <>&#xa0;</>-<>&#xa0;</>
                      </span>
                      <TbUsers className="academia-icon" />
                      <p>
                        <>&#x28;</>
                        {item.role}
                        <>&#x29;</>
                      </p>
                      <span>
                        <>&#xa0;</>-<>&#xa0;</>
                      </span>
                      <BsCalendar3 className="academia-icon" />
                      <p>{item.date}</p>
                    </div>
                  </div>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="academia-pagination-wrapper">
            <Pagination
              dataLength={data.length}
              perPage={perPage}
              startIndex={startIndex}
              setStartIndex={setStartIndex}
            />
          </div>
        </>
      )}

      {addComment && (
        <>
          <div className="academia-comment-title">
            <h3>leave a comment:</h3>
            <PiPencilSimpleLineFill className="academia-icon icon" />
          </div>

          <div className="academia-add-comment">
            <Form
              inputs={inputs}
              buttons={buttons}
              submitHandler={submitHandler}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Comment;
