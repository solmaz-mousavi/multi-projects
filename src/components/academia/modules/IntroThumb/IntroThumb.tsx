import { IntroDataType } from "../../../../dataTypes/academiaData.type";
import "./introThumb.scss";

function IntroThumb({ title, image, desc }: IntroDataType) {
  return (
    <div className="academia-home-intro-thumb academia-thumb">
      <img src={image} alt={title} className="academia-avatar" />

      <div className="academia-home-intro-thumb-details">
        <h3 className="academia-title-sm">{title}</h3>
        <p className="academia-desc">{desc}</p>
      </div>
    </div>
  );
}

export default IntroThumb;
