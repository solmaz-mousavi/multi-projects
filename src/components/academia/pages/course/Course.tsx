import { useOutletContext } from "react-router-dom";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";
import "./course.scss";
import {
  AcademiaDataType,
  CategoryDataType,
  CourseDataType,
} from "../../../../dataTypes/academiaData.type";
import PageHeader from "../../modules/pageHeader/PageHeader";
import CourseThumb from "../../modules/courseThumb/CourseThumb";
import {
  IFormInputType,
  ValuesType,
} from "../../../../dataTypes/formData.type";
import { requiredStringValidator } from "../../../../validators/rules";
import { ButtonType } from "../../../../dataTypes/buttonData.type";
import { useEffect, useState } from "react";
import Form from "../../../main/modules/form/Form";
import Pagination from "../../../main/modules/pagination/Pagination";

function Course() {
  const academiaData = useOutletContext<AcademiaDataType>();

  // pagination
  const [startIndex, setStartIndex] = useState(0);

  // view selection
  const [view, setView] = useState<"grid" | "list">("grid");

  // filtering state and form info:
  const [category, setCategory] = useState<CategoryDataType | "all">("all");
  const [data, setData] = useState<CourseDataType[]>([]);
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
    const allData = academiaData.courses;
    setData(
      allData.filter((i) =>
        i.title.toLowerCase().includes(String(items.search).toLowerCase())
      )
    );
  };

  // filter the courses by changing category
  useEffect(() => {
    const allData = academiaData.courses;
    category === "all"
      ? setData(allData)
      : setData(allData.filter((i) => i.categories.includes(category.id)));
    setStartIndex(0);
  }, [academiaData, category]);

  // scroll to top of page with page change
  useEffect(() => {
    window.document.getElementById("academia")?.scrollTo(0, 350);
  }, [startIndex]);

  return (
    <section className="academia-course-wrapper">
      <PageHeader title="Courses" />

      <div className="academia-container">
        <div className="academia-filtering-wrapper">
          {/* search input - filtering */}
          <div className="academia-search-container">
            <Form
              inputs={inputs}
              buttons={buttons}
              submitHandler={submitHandler}
            />
          </div>
          {/* view selection buttons */}
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

        {/* filter by category */}
        <div className="academia-course-categories-wrapper">
          {academiaData.categories && (
            <>
              <div
                className={`academia-category ${
                  category === "all" ? "active" : ""
                }`}
                onClick={() => setCategory("all")}
              >
                All
              </div>
              {academiaData.categories.map((item) => (
                <div
                  key={item.id}
                  className={`academia-category ${
                    category === item ? "active" : ""
                  }`}
                  onClick={() => setCategory(item)}
                >
                  {item.title}
                </div>
              ))}
            </>
          )}
        </div>

        {/* courses */}
        <div className={`academia-course-container ${view}`}>
          {data && data.length === 0 && <p>Not fount any data to show.</p>}
          {data &&
            data
              .slice(startIndex, startIndex + 6)
              .map((item) => <CourseThumb {...item} key={item.id} />)}
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

export default Course;
