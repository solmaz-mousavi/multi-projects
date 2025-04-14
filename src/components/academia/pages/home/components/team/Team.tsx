import { TeacherDataType } from "../../../../../../dataTypes/academiaData.type";
import Aos from "../../../../../main/modules/aos/Aos";
import SectionHeader from "../../../../modules/sectionHeader/SectionHeader";
import "./team.scss";
import TeamThumb from "./teamThumb/TeamThumb";

function Team({ data }: { data: TeacherDataType[] }) {
  return (
    <section className="academia-home-team-container">
      <div className="academia-container">
        <Aos aosStyle="fadeInUp" once={true}>
          <SectionHeader
            toptitle="Our Team"
            title="Learn With Our Professional Team"
          />
        </Aos>
        <div className="academia-home-team-content">
          {data &&
            data.map((item) => (
              <Aos aosStyle="fadeInUp" once={true}>
                <TeamThumb {...item} key={item.id} />
              </Aos>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
