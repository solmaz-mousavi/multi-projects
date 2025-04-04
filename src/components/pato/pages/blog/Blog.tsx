import useFetch from "../../../../hooks/useFetch";
import Aos from "../../../main/modules/aos/Aos";
import Header from "../../templates/header/Header";
import "./blog.scss";
import BlogThumb from "./modules/blogThumb/BlogThumb";

function Blog() {
	const { patoData, pending, error } = useFetch({
    url: "/data/patodb.json",
    project: "pato",
  });
	return (
		<section className="pato-blog-container">
			<Header title="blog" section={true} />
			<div className="pato-blog-content">
				<div className="pato-blog-main">
					{patoData?.blogs && patoData.blogs.slice(0,5).map(item => (
						<BlogThumb {...item} key={item.id} />
					))}
				</div>
				<div className="pato-blog-sidebar"></div>
			</div>




		</section>
	)
}

export default Blog