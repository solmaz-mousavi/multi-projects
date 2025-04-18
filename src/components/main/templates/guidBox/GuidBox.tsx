import { useState } from "react";
import "./guidBox.scss";

function GuidBox() {
	const[showGuidBox1, setShowGuidBox1] = useState<boolean>(true);
	const[showGuidBox2, setShowGuidBox2] = useState<boolean>(false);
const switchGuidboxHandler = () => {
setShowGuidBox1(false);
	setShowGuidBox2(true);
}
const closeGuidboxHandler = () => {
	setShowGuidBox1(false);
	setShowGuidBox2(false);
	localStorage.setItem('showGuidBox', "false");
}
  return (
    <div className="main-guidbox-wrapper">

			{/* ------------- guid user - how to see other projects ------------- */}
      <div className={`guidbox guidbox-1 ${showGuidBox1 ? "" : "hidden"}`}>
				<div className="guidbox-arrow-top"></div>
				<div className="guidbox-arrow-bottom guidbox1-arrow-bottom"></div>
        <p className="guidbox-message guidbox1-message">Select other projects from here</p>
				<button className="guidbox-btn guidbox1-btn" onClick={switchGuidboxHandler}>Got it</button>
      </div>

			{/* ------------- guid user - how to see contact information ------------- */}
			<div className={`guidbox guidbox-2 ${showGuidBox2 ? "" : "hidden"}`}>
				<div className="guidbox-arrow-top"></div>
				<div className="guidbox-arrow-bottom guidbox2-arrow-bottom"></div>
        <p className="guidbox-message guidbox2-message">Our contact information in here</p>
				<button className="guidbox-btn guidbox2-btn" onClick={closeGuidboxHandler}>Got it</button>
      </div>

    </div>
  );
};

export default GuidBox;
