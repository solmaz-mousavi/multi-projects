import { TeacherDataType } from "../../../../../../dataTypes/academiaData.type";
import SectionHeader from "../../../../modules/sectionHeader/SectionHeader";
import "./team.scss";
import TeamThumb from "./teamThumb/TeamThumb";

function Team({data}:{data:TeacherDataType[]}) {
	return (
		<section className="academia-home-team-container">
		<div className="academia-container">
		<SectionHeader
				toptitle="Our Team"
				title="Learn With Our Professional Team"
			/>
			<div className="academia-home-team-content">
			{data &&
            data.map((item) => <TeamThumb {...item} key={item.id} />)}



				</div>
				</div>
				</section>
	)
}

export default Team