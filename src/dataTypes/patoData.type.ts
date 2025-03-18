import { SocialDataType } from "./mainData.type";

export type NavbarDataType = {
  title: string;
  route: string;
};

export type SlideDataType = {
  image: string;
  title: string;
  desc: string;
  button: {
    title: string;
    navigate: string;
  };
};

type IntroKeyType = "title" | "desc" | "image" | "route";
export type IntroDataType = {
  [index in IntroKeyType]: string;
};

type MenuItemType = {
  title: string;
  image?: string;
  desc: string;
  price: number;
};
export type MenuDataType = {
  category: string;
  image: string;
  items: MenuItemType[];
};

type EventKeyType = "title" | "date" | "time" | "image" | "desc";
export type EventsDataType = {
  [index in EventKeyType]: string;
};

export type PatoDataType = {
  navbar: NavbarDataType[];
  social: SocialDataType[];
  slides: SlideDataType[];
  intro: IntroDataType[];
  menu: MenuDataType[];
  events: EventsDataType[];
};
