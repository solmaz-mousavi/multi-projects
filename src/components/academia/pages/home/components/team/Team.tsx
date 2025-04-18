import { TeacherDataType } from "../../../../../../dataTypes/academiaData.type";
import Aos from "../../../../../main/modules/aos/Aos";
import SectionHeader from "../../../../modules/sectionHeader/SectionHeader";
import "./team.scss";
import TeamThumb from "../../../../templates/teamThumb/TeamThumb";
import SeeAll from "../seeAll/SeeAll";

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
            data.slice(0,4).map((item) => (
              <Aos aosStyle="fadeInUp" once={true} key={item.id}>
                <TeamThumb {...item} />
              </Aos>
            ))}
        </div>
				<SeeAll route="team" />
      </div>
    </section>
  );
}

export default Team;
