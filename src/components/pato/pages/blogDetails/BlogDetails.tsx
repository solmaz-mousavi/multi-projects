import { useLocation, useOutletContext } from "react-router-dom";
import "./blogDetails.scss";
import Header from "../../templates/header/Header";
import { useEffect, useState } from "react";
import {
  BlogDataType,
  PatoDataType,
} from "../../../../dataTypes/patoData.type";
import BlogThumb from "../blog/components/blogThumb/BlogThumb";
import PopularBlogThumb from "../blog/components/popularBlogThumb/PopularBlogThumb";

function BlogDetails() {
  const patoData = useOutletContext<PatoDataType>();
  const [data, setData] = useState<BlogDataType | undefined>(undefined);

  const blogID = useLocation().pathname.split("/").reverse()[0];
  const [popularData, setPopularData] = useState<BlogDataType[]>(
    [] as BlogDataType[]
  );
  useEffect(() => {
    if (patoData?.blogs) {
      const allData = patoData.blogs;
      setData(allData.find((i) => i.id === blogID));
      setPopularData(
        allData
          .slice()
          .sort((a, b) => b.comments.length - a.comments.length)
          .slice(0, 3)
      );
    }
  }, [patoData, blogID]);

  return (
    <section className="pato-blog-details-wrapper">
      <Header title={data?.title || ""} section={true} />

      <div className="pato-blog-details-container">
        <div className="pato-blog-details-main">
          {data && <BlogThumb {...data} />}
        </div>

        <div className="pato-blog-details-sidebar">
          <h3 className="pato-subtitle">popular blogs</h3>
          {popularData &&
            popularData.map((item) => (
              <PopularBlogThumb
                {...item}
                comment={item.comments.length}
                key={item.id}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default BlogDetails;
