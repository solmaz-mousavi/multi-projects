import { IntroDataType } from "../../../../../dataTypes/patoData.type";
import "./intro.scss";

function Intro({data}: {data: IntroDataType[]}) {
  return (
    <div className="pato-home-intro-container">
      <div className="pato-home-intro-header">
        <div className="pato-home-intro__title pato-top-title">discover</div>
        <div className="pato-title">pato place</div>
      </div>
			<div className="pato-home-intro-content">
				{data && data.map(item => (
					<div className="pato-home-intro-content-container">
						<img src={item.image} alt="" />
						<h4>{item.title}</h4>
						<p>{item.desc}</p>
						<button>more details --  </button>


					</div>
				))}

			</div>
    </div>
  );
}

export default Intro;
