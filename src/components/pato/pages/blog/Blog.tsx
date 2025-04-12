import { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import Header from "../../templates/header/Header";
import BlogThumb from "./components/blogThumb/BlogThumb";
import "./blog.scss";
import Error from "../../../main/templates/error/Error";
import Loader from "../../../main/templates/loader/Loader";
import Pagination from "../../../main/modules/pagination/Pagination";
import {
  IFormInputType,
  ValuesType,
} from "../../../../dataTypes/formData.type";
import { requiredStringValidator } from "../../../../validators/rules";
import { ButtonType } from "../../../../dataTypes/buttonData.type";
import Form from "../../../main/modules/form/Form";
import {
  BlogCategoryType,
  BlogDataType,
} from "../../../../dataTypes/patoData.type";
import PopularBlogThumb from "./components/popularBlogThumb/PopularBlogThumb";

function Blog() {
  const [data, setData] = useState<BlogDataType[]>([] as BlogDataType[]);
  const [popularData, setPopularData] = useState<BlogDataType[]>(
    [] as BlogDataType[]
  );
  const [startIndex, setStartIndex] = useState(0);
  const { patoData, pending, error } = useFetch({
    url: "/data/patodb.json",
    project: "pato",
  });
  useEffect(() => {
    if (patoData?.blogs) {
      setData(patoData.blogs);
      const allData = patoData.blogs;
      setPopularData(
        allData
          .slice()
          .sort((a, b) => b.comments.length - a.comments.length)
          .slice(0, 3)
      );
    }
  }, [patoData]);

  const inputs: IFormInputType[] = [
    {
      tag: "input",
      type: "text",
      placeholder: "Search",
      className: "pato-blog-search-input",
      variant: "light",

      name: "search",
      initialvalue: "",
      validators: [requiredStringValidator()],
    },
  ];

  const buttons: ButtonType[] = [
    {
      type: "submit",
      variant: "dark",
      icon: { name: "MdOutlineSearch" },
    },
  ];
  const submitHandler: (values: ValuesType) => void = (items) => {
    const allData = patoData?.blogs || [];
    setData(allData.filter((i) => i.title.includes(items.search.toString())));
  };
  const filterByCategoryHandler = (item: BlogCategoryType | "all") => {
    const allData = patoData?.blogs || [];
    if (item === "all") {
      setData(allData);
    } else {
      setData(allData.filter((i) => i.categories.includes(item)));
    }
  };

  return (
    <section className="pato-blog-container">
      <Header title="blog" section={true} />

      {error && <Error error={error} fullScreen={true} />}
      {pending && <Loader type="data" fullScreen={true} />}
      {data && (
        <div className="pato-blog-content container">
          <div className="pato-blog-main-container">
            <div className="pato-blog-main">
              {data.length === 0 && <p>Not fount any data to show.</p>}
              {data.slice(startIndex, startIndex + 4).map((item) => (
                <BlogThumb {...item} key={item.id} />
              ))}
            </div>
            <div className="pato-gallery-pagination-wrapper">
              <Pagination
                dataLength={data.length}
                perPage={4}
                startIndex={startIndex}
                setStartIndex={setStartIndex}
              />
            </div>
          </div>

          <div className="pato-blog-sidebar">
            <div className="pato-blog-search-container">
              <Form
                inputs={inputs}
                buttons={buttons}
                submitHandler={submitHandler}
              />
            </div>

            <div className="pato-blog-categories-container">
              <h3 className="pato-subtitle">Categories</h3>
              <div
                className="pato-blog-category"
                onClick={() => filterByCategoryHandler("all")}
              >
                all
              </div>
              {patoData?.blogCategory &&
                patoData.blogCategory.map((item) => (
                  <div
                    key={item}
                    className="pato-blog-category"
                    onClick={() => filterByCategoryHandler(item)}
                  >
                    {item}
                  </div>
                ))}
            </div>

            <div className="pato-blog-popular-container">
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
        </div>
      )}
    </section>
  );
}

export default Blog;
