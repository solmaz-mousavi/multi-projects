import { StatusDataType } from "../../../../../../dataTypes/academiaData.type";
import StatusThumb from "./StatusThumb/StatusThumb";

import "./status.scss";

function Status({ data }: { data: StatusDataType[] }) {
  return (
    <section className="academia-home-status-container">
      <div className="academia-container">
        {data && data.map((item) => <StatusThumb {...item} key={item.id} />)}
      </div>
    </section>
  );
}

export default Status;
