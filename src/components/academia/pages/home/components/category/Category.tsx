import { CategoryDataType } from "../../../../../../dataTypes/academiaData.type";
import SectionHeader from "../../../../modules/sectionHeader/SectionHeader";
import CategoryThumb from "../../../../modules/categoryThumb/CategoryThumb";
import "./category.scss";
import { useNavigate } from "react-router-dom";
import Aos from "../../../../../main/modules/aos/Aos";

function Category({ data }: { data: CategoryDataType[] }) {
  const navigate = useNavigate();
  return (
    <section
      className="academia-home-category-container"
      onClick={() => navigate("/academia/course")}
    >
      <div className="academia-container">
        <Aos aosStyle="fadeInUp" once={true}>
          <SectionHeader
            toptitle="Our Categories"
            title="Browse Our Online Courses"
          />
        </Aos>
        <div className="academia-home-category-content">
          {data &&
            data.map((item) => (
              <Aos aosStyle="fadeInUp" once={true} key={item.id}>
                <CategoryThumb {...item} onClick={()=> console.log("hhh")}/>
              </Aos>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Category;
