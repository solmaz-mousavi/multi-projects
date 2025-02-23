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

export type MainDataType = {
  projects: ProjectType[];
  packages: PackageType[];
};
