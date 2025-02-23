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
}: ButtonTypes) {
	let Icon;
	if (iconName) {
		Icon = GetIcon(iconName);
  }

  return (
    <>
      <div className={`btn-container ${color} ${className}`}>
        <button className="btn" title={title}>
          {Icon && <Icon className="icon" style={{color: `${iconColor}`}}/>}
          {text && <span className="txt">{text}</span>}
        </button>
      </div>
      {tooltip && (
        <span
          className={`btn-tooltip ${tooltipType}`}
          style={{ color: `${tooltipColor}` }}
        >
          {tooltip}
        </span>
      )}
    </>
  );
}

export default Button;
