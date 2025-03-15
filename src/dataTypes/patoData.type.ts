import { SocialDataType } from "./mainData.type";
export type SlideDataType = {
  image: string;
  title: string;
  desc: string;
  button: {
    title: string;
    navigate: string;
  };}
export type PatoDataType = {
	navbar: string[];
	social: SocialDataType[];
	slides:SlideDataType[];
};