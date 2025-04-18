import { useOutletContext } from "react-router-dom";
import { AcademiaDataType } from "../../../../dataTypes/academiaData.type";
import PageHeader from "../../modules/pageHeader/PageHeader";
import Status from "../../templates/status/Status";
import Aos from "../../../main/modules/aos/Aos";
import SectionHeader from "../../modules/sectionHeader/SectionHeader";
import TeamThumb from "../../modules/teamThumb/TeamThumb";
import CourseThumb from "../../modules/courseThumb/CourseThumb";
import "./ourTeam.scss";

function OurTeam() {
  const academiaData = useOutletContext<AcademiaDataType>();

  return (
    <>
      <PageHeader title="Meet Our Professional Team" />
      <section className="academia-team-container">
        <div className="academia-container">
          <Aos aosStyle="fadeInUp" once={true}>
            <SectionHeader
              toptitle="Meet Our Professional Team"
              title="Know more about each teacher and the courses."
            />
          </Aos>

          {academiaData.teachers &&
            academiaData.teachers.map((item) => (
              <div key={item.id}>
                <Aos aosStyle="fadeInUp" once={true}>
                  <div className="academia-team-content">
                    <TeamThumb {...item} />
                    <div className="list">
                      {academiaData.courses &&
                        academiaData.courses
                          .filter((i) => i.teacher === item.id)
                          .map((ind) => <CourseThumb {...ind} key={ind.id}/>)}
                    </div>
                  </div>
                </Aos>
                <Aos aosStyle="fadeInUp" once={true}>
                  <p className="academia-desc academia-teacher-description">
                    {item.desc}
                  </p>
                </Aos>
              </div>
            ))}
        </div>
      </section>
      <Status data={academiaData.status} />
    </>
  );
}

export default OurTeam;
