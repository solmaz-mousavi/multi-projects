import {
  NavbarDataType,
  PersonType,
  SocialDataType,
  BaseType,
  ImgIncludedType,
} from "./mainData.type";

type TitleType = {
  [index in "id" | "title" | "image"]: string;
};


// --------------------about--------------------
export interface IntroDataType extends BaseType, ImgIncludedType {}

export interface StatusDataType extends TitleType {
  number: number;
}

// --------------------teacher--------------------
export interface TeacherDataType extends PersonType, ImgIncludedType {
  education: string;
  desc: string;
  social: SocialDataType[];
}

// --------------------student--------------------
export interface StudentDataType extends PersonType {
  courses: string[];
}

// --------------------category--------------------
export type CategoryDataType = TitleType;

// --------------------comment--------------------
export type CommentDataType = {
  id: string;
  userID: string;
  role: "student" | "teacher";
  date: string;
  desc: string;
};

// --------------------course--------------------
export type LectureDataType = {
  [index in "id" | "title" | "duration" | "video"]: string;
};

export interface CourseDataType extends BaseType {
  iconName: string;
  teacher: string;
  score: number;
  price: number;
  discount: number;
  categories: string[];
  lectures: LectureDataType[];
  comments: CommentDataType[];
}

// --------------------blog--------------------
type BlogKeyType = "id" | "title" | "desc" | "image" | "date" | "author";
export type BlogDataType = {
  [index in BlogKeyType]: string;
} & {
  comments: CommentDataType[];
};


// --------------------package--------------------
export interface PackageDataType extends BaseType {
  courses: string[];
  price: number;
};


// --------------------data--------------------
export type AcademiaDataType = {
  navbar: NavbarDataType[];
  social: SocialDataType[];
  intro: IntroDataType[];
  status: StatusDataType[];
  teachers: TeacherDataType[];
  categories: CategoryDataType[];
  students: StudentDataType[];
  courses: CourseDataType[];
  blogs: BlogDataType[];
  packages: PackageDataType[];
};
