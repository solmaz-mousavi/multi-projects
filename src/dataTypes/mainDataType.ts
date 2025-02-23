
export type PackageType = "javascript" | "reactJS" | "typescript" | "sass" | "next" | "tailwind";
export type ProjectType = {
	title: "glint" | "kakura" | "dashboard";
	image: string;
	route: string;
	packages: PackageType[];
};

export type MainDataType = {
	projects: ProjectType[];
	packages: PackageType[];
};
