// import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import "./error.scss";
type ErrorPropsType = {
	error: string;
	fullScreen: boolean;
};

function Error({ error, fullScreen }: ErrorPropsType) {
  return (
    <div className={`main-error-container ${fullScreen && "fullScreen"}`}>
			<div className="error-top">

      {/* <MdOutlineReportGmailerrorred className="error-icon" /> */}
      <span className="error-title">An error accured:</span>
			</div>
      <p className="error-txt">{error}</p>
    </div>
  );
}

export default Error;
