import GetIcon from "../icon/iconGetter";
import "./button.scss";

type ButtonTypes = {
  color: "dark" | "transparent" | "";
  iconName?: string;
	iconColor?: string;
  text?: string;
  title?: any;
  tooltip?: string;
  tooltipType?: "left" | "right" | "bottom" | "top";
  tooltipColor?: string;
  className?: string;
	hover?:boolean;
};

function Button({
  color,
  iconName,
	iconColor,
  text,
  title,
  tooltip,
  tooltipType,
  tooltipColor,
  className,
	hover,
}: ButtonTypes) {
	let Icon;
	if (iconName) {
		Icon = GetIcon(iconName);
  }

  return (
    <>
      <div className={`btn-container ${color} ${className || ""} ${hover ? "hover" : ""}`}>
        <button className="btn" title={title}>
          {Icon && <Icon className="icon" style={{color: `${iconColor || ""}`}}/>}
          {text && <span className="txt">{text}</span>}
        </button>
      </div>
      {tooltip && (
        <span
          className={`btn-tooltip ${tooltipType} ${hover && "hover"}`}
          style={{ color: `${tooltipColor}` }}
        >
          {tooltip}
        </span>
      )}
    </>
  );
}

export default Button;
