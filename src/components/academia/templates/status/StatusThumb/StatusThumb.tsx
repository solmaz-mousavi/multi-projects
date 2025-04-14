
import CounterUp from "../../../../main/modules/countUp/CounterUp";
import "./statusThumb.scss";
type StatusThumbPropsType = {
  img: string;
  title: string;
  number: number;
};
function StatusThumb({ img, title, number }: StatusThumbPropsType) {
  return (
    <div className="academia-status-thumb">
      <div className="academia-status-img">
        <img src={img} alt={title} />
      </div>
      <div className="academia-status-details">
        <div className="academia-status-count">
          <CounterUp end={number} once={false} />
        </div>
        <h4 className="academia-desc">{title}</h4>
      </div>
    </div>
  );
}

export default StatusThumb;
