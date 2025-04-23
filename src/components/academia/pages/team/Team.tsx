import { useOutletContext } from "react-router-dom";
import { AcademiaDataType } from "../../../../dataTypes/academiaData.type";
import PageHeader from "../../modules/pageHeader/PageHeader";
import Aos from "../../../main/modules/aos/Aos";
import SectionHeader from "../../modules/sectionHeader/SectionHeader";
import "./team.scss";
import TeamDetails from "../teamDetails/TeamDetails";

function Team() {
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
                  <TeamDetails data={{ ...item }} />
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
    </>
  );
}

export default Team;
