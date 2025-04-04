import Aos from "../../../../../main/modules/aos/Aos";
import "./galleryThumb.scss";
type GalleryThumbPropsType = {
  index: number;
  sliderHandler: (index: number) => void;
  image: string;
  title: string;
  date: string;
  author: string;
  categories: string[];
};

function GalleryThumb({
  index,
  sliderHandler,
  image,
  title,
  date,
  author,
  categories,
}: GalleryThumbPropsType) {
  return (
    <Aos aosStyle="fadeIn" once={true}>
      <div
        className="pato-gallery-item pato-image-hover-wrapper"
        onClick={() => sliderHandler(index)}
      >
        <img src={image} alt={title} />
        <div className="pato-gallery-details">
          <div className="top">
            <p className="pato-subtitle">{title}</p>
            <p className="pato-desc">
              {date} - {author}
            </p>
          </div>
          <div className="pato-gallery-category-container">
            {categories.map((item) => (
              <span className="pato-gallery-category pato-desc">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </Aos>
  );
}

export default GalleryThumb;
