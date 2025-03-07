import GetIcon from "./iconGetter";
export type IconPropsType = {
  name: string;
  className?: string;
};

function Icon({
  name,
  className,
}: IconPropsType) {
  const Icon = GetIcon(name);
  return (
    <>
      {Icon && (
        <Icon
          className={`icon ${className || ""}`}
        />
      )}
    </>
  );
}

export default Icon;
