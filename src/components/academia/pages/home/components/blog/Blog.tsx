import { useNavigate } from "react-router-dom";
import Button from "../../../../../main/modules/button/Button";
import SectionHeader from "../../../../modules/sectionHeader/SectionHeader";
import "./blog.scss";
import BlogThumb from "../../../../templates/blogThumb/BlogThumb";
import Aos from "../../../../../main/modules/aos/Aos";
import SeeAll from "../seeAll/SeeAll";

function Blog({ data }: { data: any[] }) {
  return (
    <section className="academia-home-blog-container">
      <div className="academia-container">
        <Aos aosStyle="fadeInUp" once={true}>
          <SectionHeader toptitle="Our Blog" title="Recent From Blog" />
        </Aos>
        <div className="academia-home-blog-content">
          {data &&
            data.slice(0, 3).map((item) => (
              <Aos
                aosStyle="fadeInUp"
                once={true}
                key={item.id}
                className="grid"
              >
                <BlogThumb {...item} />
              </Aos>
            ))}
        </div>
        <SeeAll route="blog" />
      </div>
    </section>
  );
}

export default Blog;
