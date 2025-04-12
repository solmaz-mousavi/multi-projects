import { NavbarDataType, SocialDataType } from "./mainData.type";

type IntroKeyType = "id" | "title" | "desc" | "img";
export type IntroDataType = {
  [index in IntroKeyType]: string;
};















export type AcademiaDataType = {
  navbar: NavbarDataType[];
  social: SocialDataType[];
  intro: IntroDataType[];
  courses: any[];
  onlineCourse: any[];
  testimonial: any[];
  blogs: any[];
  pricing: any[];
};
