import { useNavigate } from "react-router-dom";
import "./blog.scss";
import { BlogDataType } from "../../../../../../dataTypes/patoData.type";
import Aos from "../../../../../main/modules/aos/Aos";
import Button from "../../../../../main/modules/button/Button";

function Blog({ data }: { data: BlogDataType[] }) {
  const navigate = useNavigate();
  return (
    <section className="pato-home-blog-container">
      <Aos aosStyle="fadeInUp" once={true}>
        <div className="pato-home-blog-header">
          <p className="pato-top-title">Latest News</p>
          <h3 className="pato-title">the blog</h3>
        </div>
      </Aos>

      <Aos aosStyle="fadeInUp" once={true}>
        <div className="pato-home-blog-content">
          {data &&
            data.slice(0,3).map((item) => (
              <div key={item.id} className="pato-home-blog-content-container">
                <div className="pato-image-hover-wrapper">
                  <img
                    className="pato-home-blog-content__image"
                    src={item.image}
                    alt={item.title}
                  />
									<p className="pato-home-blog-content__date">{item.date}</p>
                </div>
                <h4 className="pato-home-blog-content__title pato-subtitle">
                  {item.title}
                </h4>
                <p className="pato-home-blog-content__desc pato-desc">
                  {item.desc}
                </p>
                <Button
                  text="continue reading"
                  variant="pato-transparent"
                  border={false}
                  icon={{ name: "MdArrowRightAlt" }}
                  clickHandler={() => navigate("/pato/blog")}
                />
              </div>
            ))}
        </div>
      </Aos>
    </section>
  );
}

export default Blog;
