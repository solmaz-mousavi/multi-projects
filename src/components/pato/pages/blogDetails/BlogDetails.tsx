import { useLocation, useParams } from "react-router-dom";
import "./blogDetails.scss";
import useFetch from "../../../../hooks/useFetch";
import Header from "../../templates/header/Header";
import Error from "../../../main/templates/error/Error";
import Loader from "../../../main/templates/loader/Loader";
import { useEffect, useState } from "react";
import { BlogDataType } from "../../../../dataTypes/patoData.type";
import BlogThumb from "../blog/components/blogThumb/BlogThumb";
import PopularBlogThumb from "../blog/components/popularBlogThumb/PopularBlogThumb";

function BlogDetails() {
  const [data, setData] = useState<BlogDataType | undefined>(undefined);
  const { patoData, pending, error } = useFetch({
    url: "/data/patodb.json",
    project: "pato",
  });
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
  }, [patoData]);

  return (
    <section className="pato-blog-details-wrapper">
      <Header title={data?.title || ""} section={true} />

      {error && <Error error={error} fullScreen={true} />}
      {pending && <Loader type="data" fullScreen={true} />}
      <section className="pato-blog-details-container">
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
      </section>
    </section>
  );
}

export default BlogDetails;
