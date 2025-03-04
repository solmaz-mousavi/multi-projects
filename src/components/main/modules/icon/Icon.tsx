import GetIcon from "./iconGetter";
import "./icon.scss";

type IconPropsType = {
  name: string;
  color?: string;
	size?: string;
	hoverColor?: string;
	title?:string;
  className?: string;
};

function Icon({ name, color = "#000", hoverColor ="#000", size ="1rem" ,title, className }: IconPropsType) {
  const Icon = GetIcon(name);

  return (
    <>
      {Icon && (
        <Icon
          className={`icon ${className || ""}`}
					title={title}
          style={{ color: `${color}` }}
        />
      )}
    </>
  );
}

export default Icon;
