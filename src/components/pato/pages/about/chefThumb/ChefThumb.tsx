import "./chefThumb.scss";
type ChefThumbPropsType = {
	name: string;
	image:string;
	desc:string;
}
function ChefThumb({name, image, desc}:ChefThumbPropsType) {
	return (
		<div className="pato-about-chef-container">
			<div className="pato-image-hover-wrapper">
				<img src={image} alt={name} />
			</div>
			<p className="chef-name">{name}</p>
			<p className="pato-desc">CHEF</p>
			<p className="chef-desc pato-desc">{desc}</p>
		</div>
	)
}

export default ChefThumb