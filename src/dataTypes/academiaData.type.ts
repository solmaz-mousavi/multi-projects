import { NavbarDataType, SocialDataType } from "./mainData.type";

type IntroKeyType = "id" | "title" | "desc" | "img";
export type IntroDataType = {
  [index in IntroKeyType]: string;
};

export type StatusDataType = {
	id:string;
	title:string;
	number:number;
	img:string;
}















export type AcademiaDataType = {
  navbar: NavbarDataType[];
  social: SocialDataType[];
  intro: IntroDataType[];
	status: StatusDataType[];
  courses: any[];
  onlineCourse: any[];
  testimonial: any[];
  blogs: any[];
  pricing: any[];
};
