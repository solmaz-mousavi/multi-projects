import Aos from "../../../main/modules/aos/Aos";
import "./header.scss";
type HeaderPropsType = {
	title: string;
	topTitle?: string;
	section?:boolean;
}
function Header({title, topTitle, section=false}:HeaderPropsType) {
  return (
    <div className={`pato-header ${section ? "pato-section-header" : ""}`}>
      <Aos aosStyle="fadeInUp" once={true}>
        {topTitle && <p className="pato-top-title">{topTitle}</p>}
        <h3 className="pato-title">{title}</h3>
      </Aos>
    </div>
  );
}

export default Header;
