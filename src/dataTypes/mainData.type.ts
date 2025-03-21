import { ButtonStyleType } from "./buttonData.type";

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

export type MainDataType = {
  projects: ProjectType[];
  packages: PackageType[];
	buttonStyles: ButtonStyleType;
};


export type SocialDataType = {
  socialName: string;
  iconName: string;
};
