import { ButtonStyleType } from "../../../../dataTypes/mainDataType";
import Icon, { IconPropsType } from "../icon/Icon";
import "./button.scss";

type ButtonTypes = {
  type?: "button" | "submit" | "link";
  text?: string;
  title?: string;
  className?: string;
  clickHandler?: () => void;
  variant?: keyof ButtonStyleType;
  icon?: IconPropsType;
  tooltip?: {
    content: string;
    color: string;
    position: "left" | "right" | "top" | "bottom";
  };
  to?: string;
  fullWidth?: boolean;
  transparent?: boolean;
  border?: boolean;
	round?:boolean;
};

function Button({
  type = "button",
  text,
  title,
  className,
  clickHandler,

  variant = "dark",
  icon,
  tooltip,
  to = "#",
  fullWidth = false,
  transparent,
  border = true,
	round=false,
}: ButtonTypes) {
  return (
    <>
      {type === "link" ? (
        <a
          href={to}
          className={`btn ${variant} ${fullWidth ? "fullWidth" : ""} ${
            transparent ? "transparent" : ""
          } ${border ? "border" : ""} ${round ? "round"  : ""} ${className || ""}`}
        >
					{icon && <Icon name={icon.name} className={icon.className} />}
          {text && <span className="text">{text}</span>}
        </a>
      ) : (
        <>
          <button
            type={type}
            title={title}
            className={`btn ${variant} ${fullWidth ? "fullWidth" : ""} ${
              transparent ? "transparent" : ""
            } ${border ? "border" : ""} ${round ? "round"  : ""} ${className || ""}`}
            onClick={clickHandler}
          >
            {icon && <Icon name={icon.name} className={icon.className} />}
            {text && <span className="text">{text}</span>}
          {tooltip && (
						<span className={`tooltip ${tooltip.position}`} style={{color: `${tooltip.color}`}}>
              {tooltip.content}
            </span>
          )}
					</button>
        </>
      )}
    </>
  );
}

export default Button;
