import { useLocation, useOutletContext } from "react-router-dom";
import PageHeader from "../../modules/pageHeader/PageHeader";
import CourseThumb from "../../templates/courseThumb/CourseThumb";
import "./courseDetails.scss";
import {
  AcademiaDataType,
  CourseDataType,
} from "../../../../dataTypes/academiaData.type";
import { useEffect, useState } from "react";
import Modal from "../../../main/templates/modal/Modal";
import Comment from "../../templates/comment/Comment";

function CourseDetails() {
  const academiaData = useOutletContext<AcademiaDataType>();
  const [data, setData] = useState<CourseDataType | undefined>(undefined);
  const courseID = useLocation().pathname.split("/").reverse()[0];
  const [purchased, setPurchased] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [videoNum, setVideoNum] = useState(0);

  useEffect(() => {
    if (academiaData?.courses) {
      const allData = academiaData.courses;
      setData(allData.find((i) => i.id === courseID));
    }
  }, [academiaData]);

  return (
    <section className="academia-course-details-wrapper">
      <PageHeader title={data?.title || ""} />

      <div className="academia-course-details-container list">
        <div className="academia-container">
          <div onClick={() => setShowModal(true)}>
            {data && <CourseThumb {...data} purchased={purchased} />}
          </div>

          <p className="academia-desc course-description">{data?.desc}</p>

          <div className="academia-lectures-wrapper">
            {purchased && data?.lectures && (
              <div className="academia-lectures-video-container">
                <div className="academia-lectures-video-title">
                  <p className="row">{videoNum + 1}</p>
                  <p className="academia-subtitle">
                    {data.lectures[videoNum].title}
                  </p>
                </div>
                <video
                  src={data.lectures[videoNum].video}
                  controls
                  className="academia-lecture-video"
                  key={videoNum}
                ></video>
              </div>
            )}

            <div className="academia-lectures-list-container">
              {data?.lectures &&
                data.lectures.map((item, index) => (
                  <div
                    className={`academia-lectures-list ${
                      videoNum === index ? "active" : ""
                    } ${purchased ? "purchased" : ""}`}
                    onClick={() => setVideoNum(index)}
                  >
                    <div className="academia-lectures-list-title">
                      <p className="row">{index + 1}</p>
                      <p className="academia-desc">{item.title}</p>
                    </div>
                    <p className="duration">{item.duration} minutes</p>
                  </div>
                ))}
            </div>
          </div>

{data?.comments && <Comment data={data.comments} addComment={purchased}/>
}


        </div>
      </div>

      {showModal && (
        <Modal
          desc="You have successfully purchase the course. Now you can see the lectures"
          icon={{ name: "MdCheck", variant: "success" }}
          button={[
            {
              title: "OK",
              variant: "success",
              clickHandler: () => {
                setShowModal(false);
                setPurchased(true);
              },
            },
          ]}
        />
      )}
    </section>
  );
}

export default CourseDetails;
