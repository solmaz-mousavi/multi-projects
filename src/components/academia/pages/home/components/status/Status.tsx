import { StatusDataType } from "../../../../../../dataTypes/academiaData.type";
import CounterUp from "../../../../../main/modules/countUp/CounterUp";

import "./status.scss";

function Status({ data }: { data: StatusDataType[] }) {
  return (
    <section className="academia-home-status-container">
      <div className="academia-container">
        {data &&
          data.map((item) => (
            <div className="academia-status-thumb" key={item.id}>
              <div className="academia-status-img">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="academia-status-details">
                <div className="academia-status-count">
                  <CounterUp end={item.number} once={true} />
                </div>
                <h4 className="academia-desc">{item.title}</h4>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Status;
