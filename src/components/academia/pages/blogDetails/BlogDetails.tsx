import { useLocation, useOutletContext } from "react-router-dom";
import PageHeader from "../../modules/pageHeader/PageHeader";
import "./blogDetails.scss";
import {
  AcademiaDataType,
  BlogDataType,
} from "../../../../dataTypes/academiaData.type";
import { useEffect, useState } from "react";
import BlogThumb from "../../modules/blogThumb/BlogThumb";
import Comment from "../../modules/comment/Comment";

function BlogDetails() {
  const academiaData = useOutletContext<AcademiaDataType>();
  const [data, setData] = useState<BlogDataType | undefined>(undefined);
  const blogID = useLocation().pathname.split("/").reverse()[0];

  useEffect(() => {
    if (academiaData?.blogs) {
      const allData = academiaData.blogs;
      setData(allData.find((i) => i.id === blogID));
    }
  }, [academiaData, blogID]);

  return (
    <section className="academia-blog-details-wrapper list">
      <PageHeader title={data?.title || ""} />

      <div className="academia-blog-details-container">
        <div className="academia-container">
          {data && <BlogThumb {...data} />}

          {data?.comments && <Comment data={data.comments} addComment={true} />}
        </div>
      </div>
    </section>
  );
}

export default BlogDetails;
