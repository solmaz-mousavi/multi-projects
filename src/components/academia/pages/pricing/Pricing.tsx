import "./pricing.scss";
import { useOutletContext } from "react-router-dom";
import { AcademiaDataType } from "../../../../dataTypes/academiaData.type";
import PageHeader from "../../modules/pageHeader/PageHeader";
import Package from "../home/components/package/Package";
import Aos from "../../../main/modules/aos/Aos";
import SectionHeader from "../../modules/sectionHeader/SectionHeader";
import PackageThumb from "../../modules/packageThumb/PackageThumb";
import CourseThumb from "../../modules/courseThumb/CourseThumb";

function Pricing() {
  const academiaData = useOutletContext<AcademiaDataType>();
  return (
    <>
      <PageHeader title="Just Select A Package Below" />
      <section className="academia-team-container">
        <div className="academia-container">
          <Aos aosStyle="fadeInUp" once={true}>
            <SectionHeader
              toptitle="Become a professional by the best road maps"
              title="Save up to 40% by purchasing a pack."
            />
          </Aos>

          {academiaData.packages &&
            academiaData.packages.map((item) => (
              <div key={item.id}>
                <Aos aosStyle="fadeInUp" once={true}>
                  <div className="academia-package-content">
                    <PackageThumb {...item} />
                    <div className="list">
                      {academiaData.courses &&
                        academiaData.courses
                          .filter((i) => item.courses.includes(i.id))
                          .map((ind) => <CourseThumb {...ind} key={ind.id}/>)}
                    </div>
                  </div>
                </Aos>
                <Aos aosStyle="fadeInUp" once={true}>
                  <p className="academia-desc academia-teacher-description">
                    {item.desc}
                  </p>
                </Aos>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default Pricing;
