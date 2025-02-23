import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as TbIcons from "react-icons/tb";
import { IconType } from "react-icons";

const GetIcon = ( icon:string ) => {
  const getIcon = (iconName: string) => {
    const iconsMap = new Map();
    iconsMap.set("Fa", FaIcons);
    iconsMap.set("Md", MdIcons);
    iconsMap.set("Tb", TbIcons);
    return iconsMap.get(iconName.substring(0, 2));
  };
  const icons: any = getIcon(icon);
  const TheIcon: IconType = icons[icon];
  return TheIcon;
};

export default GetIcon;