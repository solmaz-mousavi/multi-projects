import { useNavigate } from "react-router-dom";
import Button from "../../../../../main/modules/button/Button";
import SectionHeader from "../../../../modules/sectionHeader/SectionHeader";
import "./blog.scss";
import BlogThumb from "./blogThumb/BlogThumb";
import Aos from "../../../../../main/modules/aos/Aos";

function Blog({ data }: { data: any[] }) {
  const navigate = useNavigate();
  return (
    <section className="academia-home-blog-container">
      <div className="academia-container">
        <Aos aosStyle="fadeInUp" once={true}>
          <SectionHeader toptitle="Our Blog" title="Recent From Blog" />
        </Aos>
        <div className="academia-home-blog-content">
          {data &&
            data.slice(0, 3).map((item) => (
              <Aos aosStyle="fadeInUp" once={true}>
                <BlogThumb {...item} key={item.id} />
              </Aos>
            ))}
        </div>
        <Aos aosStyle="fadeInUp" once={true}>
          <Button
            text="see all"
            variant="transparent"
            border={false}
            icon={{ name: "BsArrowRight" }}
            clickHandler={() => navigate("/academia/blog")}
          />
        </Aos>
      </div>
    </section>
  );
}

export default Blog;
