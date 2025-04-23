import { useOutletContext } from "react-router-dom";
import TeamThumb from "../../modules/teamThumb/TeamThumb";
import { AcademiaDataType, TeacherDataType } from "../../../../dataTypes/academiaData.type";
import CourseThumb from "../../modules/courseThumb/CourseThumb";
import "./teamDetails.scss";

function TeamDetails({data}:{data:TeacherDataType}) {
	const academiaData = useOutletContext<AcademiaDataType>();
	return (
		<div className="academia-team-content">
		<TeamThumb {...data} />
		<div className="list">
			{academiaData.courses &&
				academiaData.courses
					.filter((item) => item.teacher === data.id)
					.map((i) => <CourseThumb {...i} key={i.id}/>)}
		</div>
	</div>
	)
}

export default TeamDetails