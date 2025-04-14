import { useNavigate } from "react-router-dom";
import Button from "../../../../../main/modules/button/Button";
import SectionHeader from "../../../../modules/sectionHeader/SectionHeader";
import "./blog.scss";
import BlogThumb from "./blogThumb/BlogThumb";

function Blog({ data }: { data: any[] }) {
	const navigate = useNavigate();
	return (
		<section className="academia-home-blog-container">
		<div className="academia-container">
			<SectionHeader
				toptitle="Our Blog"
				title="Recent From Blog"
			/>
			<div className="academia-home-blog-content">
				{data &&
					data.slice(0,3).map((item) => <BlogThumb {...item} key={item.id} />)}
			</div>
			<Button
            text="see all"
            variant="transparent"
            border={false}
            icon={{ name: "BsArrowRight" }}
            clickHandler={() => navigate("/academia/blog")}
          />
		</div>
	</section>
	)
}

export default Blog