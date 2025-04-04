import "./works.scss";
import { FaLink, FaPlus } from "react-icons/fa6";
import WorksSlider from "./worksSlider/WorksSlider";
import { WorksDataType } from "../../../../dataTypes/glintData.type";
import Aos from "../../../main/modules/aos/Aos";
import { useState } from "react";

function Works({ data }: { data: WorksDataType[] }) {
  const [showWorksSlider, setShowWorksSlider] = useState<boolean>(false);
  const [slideNumber, setSlideNumber] = useState<number>(0);
  const sliderHandler = (index: number) => {
    setShowWorksSlider(true);
    setSlideNumber(index);
  };
  return (
    <section id="Glint-Works" className="glint-section-container glint-works-container">
      <div id="Glint-WorksTop" className="works-header">
        <Aos aosStyle="fadeInUp" once={true}>
          <p className="glint-top-title works-header__top">Recent Works </p>
          <h2 className="glint-main-title works-header__title">
            We love what we do, check out some of our latest works
          </h2>
        </Aos>
      </div>
      <div id="Glint-WorksBottom" className="work-items-wrapper">
        <div className="work-items-container">
          {data && (
            <>
              {data.map((item, index) => (
                <div key={item.id}
                  className={`work-item work-item__${index + 1}`}
                  title={item.title}
                  onClick={() => sliderHandler(index)}
                >
                  <Aos aosStyle="fadeInUp" once={true}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="work-item-image"
                    />
                    <h4 className="work-item-title">{item.title}</h4>
                    <p className="work-item-cat">{item.category}</p>
                    <FaPlus className="work-item-icon" />
                    <div className="work-item-link" title="Project link">
                      <FaLink />
                    </div>
                  </Aos>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      {showWorksSlider && (
        <div className="modal-wrapper">
          <WorksSlider
            data={data}
            setShowWorksSlider={setShowWorksSlider}
            slideNumber={slideNumber}
          />
        </div>
      )}
    </section>
  );
}

export default Works;
