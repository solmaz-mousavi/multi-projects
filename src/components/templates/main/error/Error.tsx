import { MdOutlineReportGmailerrorred } from "react-icons/md";
import "./error.scss"

function Error(props: { error: string }) {
  return (
    <div className="error-container">
			<div className="error-top">

      <MdOutlineReportGmailerrorred className="error-icon" />
      <span className="error-title">An error accured:</span>
			</div>
      <p className="error-txt">{props.error}</p>
    </div>
  );
}

export default Error;
