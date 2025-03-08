type PackageKeyType = "name"|"iconName"|"color"|"link";
export type PackageType = {
	[index in PackageKeyType] : string;
};
export type ProjectType = {
  title: "glint" | "kakura" | "dashboard";
  image: string;
  route: string;
  description: string;
  packages: string[];
};

type ColorKeyType = "text"|"bg"|"border"|"hoverText"|"hoverBg";
export type StyleType = "success" | "info" | "warning" | "error" | "light" | "dark" | "grey" | "transparent";
export type ColorType = {
	[index in ColorKeyType] : string;
};
export type ButtonStyleType = {
	[index in StyleType] : ColorType ;
}

export type MainDataType = {
  projects: ProjectType[];
  packages: PackageType[];
	buttonStyles: ButtonStyleType;
};
