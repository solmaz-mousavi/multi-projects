import { useContext } from "react";
import "./myCourse.scss";
import { AuthContext } from "../../../../contexts/AuthContext";
import { getResultByID } from "../../../../utils/getDataByID";
import { useOutletContext } from "react-router-dom";
import { AcademiaDataType } from "../../../../dataTypes/academiaData.type";
import CourseThumb from "../../modules/courseThumb/CourseThumb";
import PageHeader from "../../modules/pageHeader/PageHeader";
import PackageDetails from "../packageDetails/PackageDetails";

function MyCourse() {
  const academiaData = useOutletContext<AcademiaDataType>();
  const { userInfo } = useContext(AuthContext);
  return (
    <section className="academia-mycourse-wrapper">
      <PageHeader title="Courses that you have purchased" />
      <div className="academia-container">

      {/* ---- purchased packages ---- */}
        <div className="academia-mycourse-packages">
          {userInfo?.packages.map((item) => {
            const packageInfo = getResultByID({
              ID: item,
              data: academiaData.packages,
            });
            return <PackageDetails data={packageInfo} key={packageInfo.id} />;
          })}
        </div>

      {/* ---- purchased courses ---- */}
        <div className="academia-mycourse-courses list">
          {userInfo?.courses.map((item) => {
            const courseInfo = getResultByID({
              ID: item,
              data: academiaData.courses,
            });
            return <CourseThumb {...courseInfo} key={courseInfo.id} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default MyCourse;
