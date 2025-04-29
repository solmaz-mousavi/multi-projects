import { useLocation, useOutletContext } from "react-router-dom";
import PageHeader from "../../modules/pageHeader/PageHeader";
import CourseThumb from "../../modules/courseThumb/CourseThumb";
import "./courseDetails.scss";
import {
  AcademiaDataType,
  CourseDataType,
} from "../../../../dataTypes/academiaData.type";
import { useContext, useEffect, useState } from "react";
import Comment from "../../modules/comment/Comment";
import AddScore from "../../templates/addScore/AddScore";
import { AuthContext } from "../../../../contexts/AuthContext";

function CourseDetails() {
  const academiaData = useOutletContext<AcademiaDataType>();
  const courseID = useLocation().pathname.split("/").reverse()[0];
  const { userInfo } = useContext(AuthContext);
  const [purchased, setPurchased] = useState(false);

  const [data, setData] = useState<CourseDataType | undefined>(undefined);
  const [videoNum, setVideoNum] = useState(0);

  useEffect(() => {
    if (academiaData?.courses) {
      const allData = academiaData.courses;
      setData(allData.find((i) => i.id === courseID));
    }

    if (userInfo) {
      setPurchased(
        userInfo?.courses.includes(courseID) ||
          academiaData?.packages
            .filter((i) => userInfo?.packages.includes(i.id))
            .some((item) => item.courses.includes(courseID))
      );
    }
  }, [academiaData, courseID, userInfo]);

  return (
    <section className="academia-course-details-wrapper">
      <PageHeader title={data?.title || ""} />

      <div className="academia-course-details-container">
        <div className="academia-container">
          {/* course info */}
          <div className="list">{data && <CourseThumb {...data} />}</div>
          <p className="academia-desc course-description">{data?.desc}</p>

          <div className="academia-lectures-wrapper">
            {/* lecture video */}
            {purchased && data?.lectures && (
              <div className="academia-lectures-video-container">
                <div className="academia-lectures-video-title">
                  <p className="academia-row">{videoNum + 1}</p>
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

            {/* course lectures list */}
            <div className="academia-lectures-list-container">
              {data?.lectures &&
                data.lectures.map((item, index) => (
                  <div
                    className={`academia-lectures-list ${
                      videoNum === index ? "active" : ""
                    } ${purchased ? "purchased" : ""}`}
                    onClick={() => setVideoNum(index)}
                    key={item.id}
                  >
                    <div className="academia-lectures-list-title">
                      <p className="academia-row">{index + 1}</p>
                      <p className="academia-desc">{item.title}</p>
                    </div>
                    <p className="duration">{item.duration} minutes</p>
                  </div>
                ))}
            </div>
          </div>

          {/* add score */}
          {purchased && <AddScore />}

          {/* comments */}
          {data?.comments && (
            <Comment data={data.comments} addComment={purchased} />
          )}
        </div>
      </div>
    </section>
  );
}

export default CourseDetails;
