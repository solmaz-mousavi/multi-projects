import { ButtonStyleType } from "./buttonData.type";

type PackageKeyType = "id" | "name" | "iconName" | "color" | "link";
export type PackageType = {
  [index in PackageKeyType]: string;
};

type ProjectKeyType = "id" | "image" | "route" | "description";
export type ProjectType = {
  [index in ProjectKeyType]: string;
} & {
  title: "glint" | "kakura" | "dashboard" | "pato";
  packages: string[];
};

export type MainDataType = {
  projects: ProjectType[];
  packages: PackageType[];
  buttonStyles: ButtonStyleType;
};

type SocialKeyType = "id" | "socialName" | "iconName";
export type SocialDataType = {
  [index in SocialKeyType]: string;
};
