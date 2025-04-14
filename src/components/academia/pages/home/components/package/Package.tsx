import { PackageDataType } from "../../../../../../dataTypes/academiaData.type";
import SectionHeader from "../../../../modules/sectionHeader/SectionHeader";
import "./package.scss";
import PackageThumb from "./packageThumb/PackageThumb";

function Package({data}:{data:PackageDataType[]}) {
	return (
		<section id="packages" className="academia-home-category-container">
		<div className="academia-container">
			<SectionHeader
				toptitle="Pricing and Packages"
				title="Be Professional With Our Rad Maps And Special Offers"
			/>
			<div className="academia-home-category-content">
				{data &&
					data.map((item) => <PackageThumb {...item} key={item.id} />)}
			</div>
		</div>
	</section>
	)
}

export default Package