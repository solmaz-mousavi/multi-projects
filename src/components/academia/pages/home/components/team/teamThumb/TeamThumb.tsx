import { useNavigate } from "react-router-dom";
import { SocialDataType } from "../../../../../../../dataTypes/mainData.type";
import Icon from "../../../../../../main/modules/icon/Icon";
import "./teamThumb.scss";
type TeamThumbPropsType = {
  name: string;
  education: string;
  img: string;
  social: SocialDataType[];
};
function TeamThumb({ name, education, img, social }: TeamThumbPropsType) {
	const navigate = useNavigate();
  return (
    <div className="academia-team-thumb-container" onClick={()=>navigate("/academia/course")}>
      <div className="image-wrapper">
        <img src={img} alt={name} className="academia-team-thumb-img" />
      </div>
      <h3 className="academia-subtitle">{name}</h3>
			<p className="academia-desc">{education}</p>
      <p className="academia-desc">{6} courses</p>
			<div className="social-container">
				{social.map(item=>(
					<a href={item.link}>
						<Icon name={item.iconName} />
					</a>
				))}
			</div>
    </div>
  );
}

export default TeamThumb;
