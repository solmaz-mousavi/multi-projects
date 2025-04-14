import { useNavigate, useOutletContext } from "react-router-dom";
import Icon from "../../../../main/modules/icon/Icon";
import "./teamThumb.scss";
import { AcademiaDataType, TeacherDataType } from "../../../../../dataTypes/academiaData.type";

function TeamThumb({id, name, education, img, social }: TeacherDataType) {
	const navigate = useNavigate();
	const academiaData = useOutletContext<AcademiaDataType>();
	const courseNum = academiaData.courses.filter(item => item.teacher===id).length;

  return (
    <div className="academia-team-thumb-container" onClick={()=>navigate("/academia/course")}>
      <div className="image-wrapper">
        <img src={img} alt={name} className="academia-team-thumb-img" />
      </div>
      <h3 className="academia-subtitle">{name}</h3>
			<p className="academia-desc">{education}</p>
      <p className="academia-desc">{courseNum} courses</p>
			<div className="social-container">
				{social.map(item=>(
					<a href={item.link} key={item.id}>
						<Icon name={item.iconName} />
					</a>
				))}
			</div>
    </div>
  );
}

export default TeamThumb;
