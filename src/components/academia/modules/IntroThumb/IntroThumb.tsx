import { IntroDataType } from "../../../../dataTypes/academiaData.type";
import "./introThumb.scss";

function IntroThumb({ title, image, desc }: IntroDataType) {
  return (
		<div className="academia-home-intro-thumb">
		<div className="academia-home-intro-thumb-img">
			<img src={image} alt={title} />
		</div>
		<div className="academia-home-intro-thumb-details">
			<h4 className="academia-subtitle">{title}</h4>
			<p className="academia-desc">{desc}</p>
		</div>
	</div>
	);
}

export default IntroThumb;
