import "./blog.scss";
import PageHeader from "../../modules/pageHeader/PageHeader";
import Form from "../../../main/modules/form/Form";
import { useOutletContext } from "react-router-dom";
import {
  AcademiaDataType,
  BlogDataType,
} from "../../../../dataTypes/academiaData.type";
import { useState } from "react";
import {
  IFormInputType,
  ValuesType,
} from "../../../../dataTypes/formData.type";
import { ButtonType } from "../../../../dataTypes/buttonData.type";
import { requiredStringValidator } from "../../../../validators/rules";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";
import BlogThumb from "../../modules/blogThumb/BlogThumb";
import Pagination from "../../../main/modules/pagination/Pagination";

function Blog() {
  const academiaData = useOutletContext<AcademiaDataType>();

  // pagination state:
  const [startIndex, setStartIndex] = useState(0);

  // view selection:
  const [view, setView] = useState<"grid" | "list">("grid");

  // state and form for filtering:
  const [data, setData] = useState<BlogDataType[]>(academiaData.blogs);
  const inputs: IFormInputType[] = [
    {
      tag: "input",
      type: "text",
      className: "academia-search-input",
      variant: "light",
      border: false,

      name: "search",
      initialvalue: "",
      validators: [requiredStringValidator()],
    },
  ];
  const buttons: ButtonType[] = [
    {
      type: "submit",
      variant: "transparent",
      icon: { name: "BsSearch" },
      className: "academia-search-btn",
      border: false,
    },
  ];
  const submitHandler: (values: ValuesType) => void = (items) => {
    const allData = academiaData.blogs;

    setData(
      allData.filter((i) =>
        i.title.toLowerCase().includes(String(items.search).toLowerCase())
      )
    );
  };

  return (
    <section className="academia-blog-wrapper">
      <PageHeader title="Journals" />

      <div className="academia-container">
				
        {/* search input for filtering and view selection buttons */}
        <div className="academia-filtering-wrapper">
          <div className="academia-search-container">
            <Form
              inputs={inputs}
              buttons={buttons}
              submitHandler={submitHandler}
            />
            <p onClick={() => setData(academiaData.blogs)}>View All</p>
          </div>
          <div className="academia-view-container">
            <CiGrid2H
              className="academia-view-icon"
              onClick={() => setView("list")}
            />
            <CiGrid41
              className="academia-view-icon"
              onClick={() => setView("grid")}
            />
          </div>
        </div>

        {/* blogs */}
        <div className={`academia-blog-container ${view}`}>
          {data && data.length === 0 && <p>Not found any data to show.</p>}
          {data &&
            data
              .slice(startIndex, startIndex + 6)
              .map((item) => <BlogThumb {...item} key={item.id} />)}
        </div>

        {/* pagination */}
        {data && (
          <div className="pato-gallery-pagination-wrapper">
            <Pagination
              dataLength={data.length}
              perPage={6}
              startIndex={startIndex}
              setStartIndex={setStartIndex}
            />
          </div>
        )}

      </div>
    </section>
  );
}

export default Blog;
