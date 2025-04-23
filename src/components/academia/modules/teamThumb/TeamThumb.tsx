import { useOutletContext } from "react-router-dom";
import Icon from "../../../main/modules/icon/Icon";
import "./teamThumb.scss";
import { AcademiaDataType, TeacherDataType } from "../../../../dataTypes/academiaData.type";

function TeamThumb({id, name, education, image, social }: TeacherDataType) {
	const academiaData = useOutletContext<AcademiaDataType>();
	const courseNum = academiaData.courses.filter(item => item.teacher===id).length;

  return (
    <div className="academia-team-thumb-container">
      <div className="image-wrapper">
        <img src={image} alt={name} className="academia-team-thumb-img" />
      </div>
      <h3 className="academia-title-sm">{name}</h3>
			<p className="academia-desc">{education}</p>
      <p className="academia-desc">{courseNum} courses</p>
			<div className="social-container">
				{social.map(item=>(
					<a href={item.link} key={item.id}>
						<Icon name={item.iconName} className="academia-social"/>
					</a>
				))}
			</div>
    </div>
  );
}

export default TeamThumb;
