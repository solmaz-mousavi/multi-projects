import Aos from "../../../main/modules/aos/Aos";
import "./pageHeader.scss";

function PageHeader({ title }: { title: string }) {
  return (
    <div className="academia-page-header">
      <Aos aosStyle="fadeInUp" once={true}>
        <h1>{title}</h1>
      </Aos>
    </div>
  );
}

export default PageHeader;
