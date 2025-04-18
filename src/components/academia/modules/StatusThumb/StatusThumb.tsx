
import { StatusDataType } from "../../../../dataTypes/academiaData.type";
import CounterUp from "../../../main/modules/countUp/CounterUp";
import "./statusThumb.scss";

function StatusThumb({ image, title, number }: StatusDataType) {
  return (
    <div className="academia-status-thumb">
      <div className="academia-status-img">
        <img src={image} alt={title} />
      </div>
      <div className="academia-status-details">
        <div className="academia-status-count">
          <CounterUp end={number} once={true} />
        </div>
        <h4 className="academia-desc">{title}</h4>
      </div>
    </div>
  );
}

export default StatusThumb;
