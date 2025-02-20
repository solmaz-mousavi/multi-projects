import "./button.scss";
import { Fa6Icons, Fa6IconType } from "../../../../dataTypes/main/iconType";
import { JsxElement } from "typescript";
import { IconType } from "react-icons";

type ButtonTypes = {
  type: "iconBtn" | "";
  color: "dark" | "transparent" | "";
  iconName?: Fa6IconType;
  text?: string;
  title?: any;
  tooltip?: string;
  tooltipType?: "left" | "right" | "bottom" | "top";
  tooltipColor?: string;
	className?: string;
};

function Button({
  type,
  color,
  iconName,
  text,
  title,
  tooltip,
  tooltipType,
  tooltipColor,
	className,
}: ButtonTypes) {
  let Icon;
  if (iconName) {
    Icon = Fa6Icons[iconName];
		console.log(Icon);
  }

  return (
    <>
      <div className={`btn-container ${type} ${color} ${className}`}>
        <button className="btn" title={title}>
          {Icon && <Icon className="icon" />}
          {text && <span className="txt">{text}</span>}
        </button>
      </div>
      {tooltip && (
        <span className={`btn-tooltip ${tooltipType} ${tooltipColor}`}>
          {tooltip}
        </span>
      )}
    </>
  );
}

export default Button;
