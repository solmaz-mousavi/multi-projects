export type PackageType = {
  name: string;
  iconName: string;
  color: string;
	link: string;
};
export type ProjectType = {
  title: "glint" | "kakura" | "dashboard";
  image: string;
  route: string;
  description: string;
  packages: string[];
};

export type StyleType = "success" | "info" | "warning" | "error" | "light" | "dark" | "grey" | "transparent";
export type ColorType = {
	text: string;
	bg:string;
	border:string;
	hoverText:string;
	hoverBg:string;
};
export type ButtonStyleType = {
	[index in StyleType] : ColorType ;
}


export type MainDataType = {
  projects: ProjectType[];
  packages: PackageType[];
	buttonStyles: ButtonStyleType;
};
