import {
  NavbarDataType,
  PersonType,
  SocialDataType,
  BaseType,
  ImgIncludedType,
} from "./mainData.type";

// --------------------home--------------------

// ----slider
export interface SlideDataType extends BaseType, ImgIncludedType {
  button: {
    [index in "title" | "navigate"]: string;
  };
}

// ----intro
export interface IntroDataType extends BaseType, ImgIncludedType {
  route: string;
}

// ----review
export interface ReviewDataType extends PersonType, CommentKeyType {}

// --------------------menu--------------------
export interface MenuItemType extends BaseType {
  image?: string;
  price: number;
}
type MenuDataKeyType = {
  [index in "id" | "category" | "image"]: string;
};
export interface MenuDataType extends MenuDataKeyType {
  main: boolean;
  items: MenuItemType[];
}

// --------------------event--------------------
export interface EventsDataType extends BaseType, ImgIncludedType {
  date: string;
  time: string;
}

// --------------------blog--------------------
export type BlogCategoryType =
  | "Cooking recipe"
  | "Delicious foods"
  | "Events Design"
  | "Restaurant Place";

type CommentKeyType = {
  [index in "city" | "date" | "desc"]: string;
};
interface CommentType extends PersonType, CommentKeyType {}

export interface BlogDataType extends BaseType, ImgIncludedType {
  date: string;
  author: string;
  categories: BlogCategoryType[];
  comments: CommentType[];
}

// --------------------gallery--------------------
export type GalleryCategoryType = "interior" | "food" | "events" | "vip guests";

type GalleryKeyType = "id" | "title" | "image" | "date" | "author";
export type GalleryDataType = {
  [index in GalleryKeyType]: string;
} & {
  categories: GalleryCategoryType[];
};

export interface ChefDataType extends PersonType, ImgIncludedType {
  desc: string;
}

// --------------------data--------------------
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
