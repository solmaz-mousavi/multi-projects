import { CategoryDataType } from "../../../../../../dataTypes/academiaData.type";
import SectionHeader from "../../../../modules/sectionHeader/SectionHeader";
import CategoryThumb from "./categoryThumb/CategoryThumb";
import "./category.scss";
import { useNavigate } from "react-router-dom";

function Category({ data }: { data: CategoryDataType[] }) {
	const navigate = useNavigate();
  return (
    <section className="academia-home-category-container" onClick={()=>navigate("/academia/course")}>
      <div className="academia-container">
        <SectionHeader
          toptitle="Our Categories"
          title="Browse Our Online Courses"
        />
        <div className="academia-home-category-content">
          {data &&
            data.map((item) => <CategoryThumb {...item} key={item.id} />)}
        </div>
      </div>
    </section>
  );
}

export default Category;
