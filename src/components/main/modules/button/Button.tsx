import { ButtonType } from "../../../../dataTypes/buttonData.type";
import Icon from "../icon/Icon";
import "./button.scss";

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
  round = false,
  children,
}: ButtonType) {
	
  return (
    <>
		{/* ------------- anchor link ------------- */}
      {type === "link" ? (
        <a
          href={to}
          className={`btn ${variant} ${fullWidth ? "fullWidth" : ""} ${
            transparent ? "transparent" : ""
          } ${border ? "border" : ""} ${round ? "round" : ""} ${
            className || ""
          }`}
        >
          {icon && <Icon name={icon.name} className={icon.className} />}
          {text && <span className="text">{text}</span>}
          {children}
          {tooltip && (
            <span
              className={`tooltip ${tooltip.position}`}
              style={{ color: `${tooltip.color}` }}
            >
              {tooltip.content}
            </span>
          )}
        </a>
      ) : (
        <>
				{/* ------------- button ------------- */}
          <button
            type={type}
            title={title}
            className={`btn ${variant} ${fullWidth ? "fullWidth" : ""} ${
              transparent ? "transparent" : ""
            } ${border ? "border" : ""} ${round ? "round" : ""} ${
              className || ""
            }`}
            onClick={clickHandler}
          >
            {icon && <Icon name={icon.name} className={icon.className} />}
            {text && <span className="text">{text}</span>}
            {children}
            {tooltip && (
              <span
                className={`tooltip ${tooltip.position}`}
                style={{ color: `${tooltip.color}` }}
              >
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
