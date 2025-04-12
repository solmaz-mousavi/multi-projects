import { NavbarDataType, SocialDataType } from "./mainData.type";

type SlideKeyType = "id" | "image" | "title" | "desc";
export type SlideDataType = { [index in SlideKeyType]: string } & {
  button: {
    title: string;
    navigate: string;
  };
};

type IntroKeyType = "id" | "title" | "desc" | "image" | "route";
export type IntroDataType = {
  [index in IntroKeyType]: string;
};

export type MenuItemType = {
  id: string;
  title: string;
  image?: string;
  desc: string;
  price: number;
};
export type MenuDataType = {
  id: string;
  category: string;
  image: string;
  main: boolean;
  items: MenuItemType[];
};

type EventKeyType = "id" | "title" | "date" | "time" | "image" | "desc";
export type EventsDataType = {
  [index in EventKeyType]: string;
};

type ReviewKeyType = "id" | "name" | "city" | "date" | "desc";
export type ReviewDataType = {
  [index in ReviewKeyType]: string;
};

export type BlogCategoryType =
  | "Cooking recipe"
  | "Delicious foods"
  | "Events Design"
  | "Restaurant Place";

type BlogKeyType = "id" | "title" | "desc" | "image" | "date" | "author";
export type BlogDataType = {
  [index in BlogKeyType]: string;
} & {
  categories: BlogCategoryType[];
  comments: {
    [index in ReviewKeyType]: string;
  }[];
};

export type GalleryCategoryType = "interior" | "food" | "events" | "vip guests";
type GalleryKeyType = "id" | "title" | "image" | "date" | "author";
export type GalleryDataType = {
  [index in GalleryKeyType]: string;
} & {
  categories: GalleryCategoryType[];
};

type ChefKeyType = "id" | "name" | "image" | "desc";
export type ChefDataType = {
  [index in ChefKeyType]: string;
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
  chefs: ChefDataType[];
};
