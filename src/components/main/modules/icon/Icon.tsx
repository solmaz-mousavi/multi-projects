import GetIcon from "./iconGetter";
import "./icon.scss";

type IconPropsType = {
  name: string;
  color?: string;
  size?: string;
  hoverColor?: string;
  title?: string;
  className?: string;
};

function Icon({
  name,
  color = "#000",
  hoverColor = "#fff",
  size = "1rem",
  title,
  className,
}: IconPropsType) {
  const Icon = GetIcon(name);

  return (
    <>
		<style>
			{`
			.icon{
			color: ${color};
			fontSize: ${size};
			transition: all 400ms ease-out;
			};
			.icon:hover{
			color: ${hoverColor};
			}
			`}
		</style>
      {Icon && (
        <Icon
          className={`icon ${className || ""}`}
          title={title}
         
        />
      )}
    </>
  );
}

export default Icon;
