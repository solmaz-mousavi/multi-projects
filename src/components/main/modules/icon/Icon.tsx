import GetIcon from "./iconGetter";
export type IconPropsType = {
  name: string;
  className?: string;
};
 
// --- create icon component
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
