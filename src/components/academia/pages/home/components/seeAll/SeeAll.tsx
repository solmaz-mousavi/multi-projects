import { useNavigate } from "react-router-dom";
import Aos from "../../../../../main/modules/aos/Aos";
import Button from "../../../../../main/modules/button/Button";
import "./seeAll.scss";

function SeeAll({route}:{route:string}) {
	const navigate = useNavigate();
	return (
		<Aos aosStyle="fadeInUp" once={true} className="see-all-btn">
		<Button
			text="see all"
			variant="transparent"
			border={false}
			icon={{ name: "BsArrowRight" }}
			clickHandler={() => navigate(`/academia/${route}`)}
		/>
	</Aos>
	)
}

export default SeeAll