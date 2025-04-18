import { StatusDataType } from "../../../../dataTypes/academiaData.type";
import Aos from "../../../main/modules/aos/Aos";
import StatusThumb from "../../modules/StatusThumb/StatusThumb";

import "./status.scss";

function Status({ data }: { data: StatusDataType[] }) {
  return (
    <section className="academia-home-status-container">
      <div className="academia-container">
        {data &&
          data.map((item) => (
            <Aos aosStyle="fadeInUp" once={true} key={item.id}>
              <StatusThumb {...item} />
            </Aos>
          ))}
      </div>
    </section>
  );
}

export default Status;
