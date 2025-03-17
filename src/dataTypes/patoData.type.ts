import { SocialDataType } from "./mainData.type";

export type NavbarDataType = {
	title: string;
	route: string;
}
export type SlideDataType = {
  image: string;
  title: string;
  desc: string;
  button: {
    title: string;
    navigate: string;
  };}
	export type IntroDataType = {
		title: string;
		desc: string;
		image: string;
	}
export type PatoDataType = {
	navbar: NavbarDataType[];
	social: SocialDataType[];
	slides:SlideDataType[];
	intro: IntroDataType[];
};