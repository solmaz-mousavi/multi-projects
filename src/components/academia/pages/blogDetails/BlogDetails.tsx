import { useLocation, useOutletContext } from "react-router-dom";
import PageHeader from "../../modules/pageHeader/PageHeader";
import "./blogDetails.scss";
import {
  AcademiaDataType,
  BlogDataType,
} from "../../../../dataTypes/academiaData.type";
import { useEffect, useState } from "react";
import BlogThumb from "../../templates/blogThumb/BlogThumb";
import { getResultByID } from "../../../../utils/getDataByID";
import { FaComment } from "react-icons/fa";

function BlogDetails() {
  const academiaData = useOutletContext<AcademiaDataType>();
  const [data, setData] = useState<BlogDataType | undefined>(undefined);
  const blogID = useLocation().pathname.split("/").reverse()[0];

  useEffect(() => {
    if (academiaData?.blogs) {
      const allData = academiaData.blogs;
      setData(allData.find((i) => i.id === blogID));
    }
  }, [academiaData]);

  return (
    <section className="academia-blog-details-wrapper list" >
      <PageHeader title={data?.title || ""} />

      <div className="academia-blog-details-container">
				<div className="academia-container">
        {data && <BlogThumb {...data} />}

<div className="academia-comments-container">
<h3><FaComment /> comments:</h3>
{data && data.comments.length>0 && data.comments.map(item => (
	<div className="academia-comment">
		<p>{item.role}</p>
		<p>{item.role==="student" ? getResultByID({ID:item.userID, data: academiaData.students}).name : getResultByID({ID:item.userID, data: academiaData.teachers}).name}</p>
	<p>{item.date}</p>
	<p>{item.desc}</p>
	
	
	
	</div>
))}
</div>

				</div>
      </div>
    </section>
  );
}

export default BlogDetails;
