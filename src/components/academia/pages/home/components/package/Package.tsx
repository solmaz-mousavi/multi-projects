import SectionHeader from "../../../../modules/sectionHeader/SectionHeader";
import "./package.scss";

function Package() {
	return (
		<section className="academia-home-category-container">
		<div className="academia-container">
			<SectionHeader
				toptitle="Our Categories"
				title="Browse Our Online Courses"
			/>
			<div className="academia-home-category-content">
				{/* {data &&
					data.map((item) => <CategoryThumb {...item} key={item.id} />)} */}
			</div>
		</div>
	</section>
	)
}

export default Package