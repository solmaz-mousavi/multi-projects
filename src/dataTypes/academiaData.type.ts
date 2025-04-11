import { SocialDataType } from "./mainData.type";

type NavbarKeyType = "id" | "title" | "route";
export type NavbarDataType = {
  [index in NavbarKeyType]: string;
};










export type AcademiaDataType = {
  navbar: NavbarDataType[];
  social: SocialDataType[];


};