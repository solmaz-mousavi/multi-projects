import { InsHTMLAttributes } from "react";
import { JsxAttributeValue, PropertyName } from "typescript";

export type DisplayType = {
  display: "desktop" | "laptop" | "tablet" | "mobile";
  width: string;
  iconName:
   "FaDesktop"
    | "FaLaptop"
    | "FaTabletScreenButton"
    | "FaMobileScreenButton";
};

export type BreakpointType = DisplayType[];

export type ProjectType = {
	title: "glint" | "kakura" | "dashboard";
	image: string;
	route: string;
}[];

export type MainDataType = {
  breakPoints: BreakpointType;
	projects: ProjectType;
};
