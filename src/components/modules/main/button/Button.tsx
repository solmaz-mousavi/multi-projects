import "./button.scss";
import { Fa6Icons, Fa6IconType } from "../../../../dataTypes/iconType";

type ButtonTypes = {
  type: "iconBtn" | "";
  color: "dark" | "transparent" | "";
  iconName?: Fa6IconType;
  text?: string;
  title?: any;
  tooltip?: string;
  tooltipType?: string;
  tooltipColor?: string;
};

function Button({
  type,
  color,
  iconName,
  tooltip,
  text,
  title,
  tooltipType,
  tooltipColor,
}: ButtonTypes) {
  let Icon;
  if (iconName) {
    Icon = Fa6Icons[iconName];
  }

  return (
    <>
      <div className={`btn-container ${type} ${color}`}>
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
