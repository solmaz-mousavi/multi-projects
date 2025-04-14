import { StatusDataType } from "../../../../../../dataTypes/academiaData.type";
import Aos from "../../../../../main/modules/aos/Aos";
import StatusThumb from "./StatusThumb/StatusThumb";

import "./status.scss";

function Status({ data }: { data: StatusDataType[] }) {
  return (
    <section className="academia-home-status-container">
      <div className="academia-container">
        {data &&
          data.map((item) => (
            <Aos aosStyle="fadeInUp" once={true}>
              <StatusThumb {...item} key={item.id} />
            </Aos>
          ))}
      </div>
    </section>
  );
}

export default Status;
