import Icon from "../icon/Icon";
import "./button.scss";

type ButtonTypes = {
	type?: "button" | "submit" | "reset";
  text?: string;
  title?: any;
	// hover?:{bgColor: string, color:string, };
	onClickHandler?: ()=>void;

	// iconData?:{name:string, color:string, size:string, hoverColor: string};




	iconName?: string;
	iconColor?: string;
	iconClassName?: string;

  tooltip?: string;
  tooltipColor?: string;
  tooltipType?: "left" | "right" | "bottom" | "top";
	tooltipClassName?: string;

  color: "dark" | "transparent" | "";
  className?: string;

};

function Button({
	iconName,
	iconColor,
	iconClassName,
  
	tooltip,
  tooltipColor,
  tooltipType,

	type = "button",
  color = "transparent",
  text,
  title,
  className,

	onClickHandler,
}: ButtonTypes) {

  return (
    <>
      <div className={`btn-container ${color} ${className || ""}`}>
        <button type={type} className="btn" title={title}>
          {iconName && <Icon name={iconName} color={iconColor} className={iconClassName}/>}
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
