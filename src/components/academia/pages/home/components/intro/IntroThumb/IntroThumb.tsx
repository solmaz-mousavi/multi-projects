import "./introThumb.scss";
type IntroThumbPropsType = {
  title: string;
  img: string;
  desc: string;
};
function IntroThumb({ title, img, desc }: IntroThumbPropsType) {
  return (
		<div className="academia-home-intro-thumb">
		<div className="academia-home-intro-thumb-img">
			<img src={img} alt={title} />
		</div>
		<div className="academia-home-intro-thumb-details">
			<h4 className="academia-subtitle">{title}</h4>
			<p className="academia-desc">{desc}</p>
		</div>
	</div>
	);
}

export default IntroThumb;
