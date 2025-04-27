import { SocialDataType } from "../../../../dataTypes/mainData.type";
import Icon from "../../../main/modules/icon/Icon";
import "./social.scss";

function Social({data}:{data:SocialDataType[]}) {
	return (
		<div className="academia-social-container">
		{data &&
			data.map((item) => (
				<a
					href={item.link}
					target="_blank"
					rel="noreferrer"
					key={item.id}
				>
					<Icon
						key={item.id}
						name={item.iconName}
						className="header-social"
					/>
				</a>
			))}
	</div>
	)
}

export default Social