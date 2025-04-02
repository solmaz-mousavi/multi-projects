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
  main: boolean;
  items: MenuItemType[];
};

type EventKeyType = "title" | "date" | "time" | "image" | "desc";
export type EventsDataType = {
  [index in EventKeyType]: string;
};

type ReviewKeyType = "name" | "city" | "date" | "desc";
export type ReviewDataType = {
  [index in ReviewKeyType]: string;
};

export type BlogCategoryType =
  | "Cooking recipe"
  | "Delicious foods"
  | "Events Design"
  | "Restaurant Place";

export type BlogDataType = {
  title: string;
  desc: string;
  image: string;
  date: string;
  author: string;
  categories: BlogCategoryType[];
  comments: {
    [index in ReviewKeyType]: string;
  };
};

export type GalleryCategoryType = "interior" | "food" | "events" | "vip guests";
export type GalleryDataType = {
  title: string;
  image: string;
  date: string;
  author: string;
  categories: GalleryCategoryType[];
};

export type PatoDataType = {
  navbar: NavbarDataType[];
  social: SocialDataType[];
  slides: SlideDataType[];
  intro: IntroDataType[];
  menu: MenuDataType[];
  events: EventsDataType[];
  reviews: ReviewDataType[];
  blogCategory: BlogCategoryType[];
  blogs: BlogDataType[];
  galleryCategory: GalleryCategoryType[];
  gallery: GalleryDataType[];
};
