import { ButtonStyleType } from "./buttonData.type";

// data types for the mail project
type PackageKeyType = "id" | "name" | "iconName" | "color" | "link";
export type PackageType = {
  [index in PackageKeyType]: string;
};

type ProjectKeyType = "id" | "image" | "route" | "description";
export type ProjectType = {
  [index in ProjectKeyType]: string;
} & {
  title: "glint" | "pato" | "academia" | "ddfr";
  packages: string[];
};

export type MainDataType = {
  projects: ProjectType[];
  packages: PackageType[];
  buttonStyles: ButtonStyleType;
};

// common data types used on other projects
type SocialKeyType = "id" | "socialName" | "iconName" | "link";
export type SocialDataType = {
  [index in SocialKeyType]: string;
};

type NavbarKeyType = "id" | "title" | "route";
export type NavbarDataType = {
  [index in NavbarKeyType]: string;
};

type PersonKeyType = "id" | "name";
export type PersonType = {
	[index in PersonKeyType]: string;
}

type BaseKeyType = "id" | "title" | "desc";
export type BaseType = {
	[index in BaseKeyType]: string;
}

export type ImgIncludedType ={
	image : string;
}
