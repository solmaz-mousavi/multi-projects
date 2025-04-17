import { NavbarDataType, SocialDataType } from "./mainData.type";

type IntroKeyType = "id" | "title" | "desc" | "img";
export type IntroDataType = {
  [index in IntroKeyType]: string;
};

export type StatusDataType = {
  id: string;
  title: string;
  number: number;
  img: string;
};

export type TeacherDataType = {
  id: string;
  name: string;
  education: string;
  img: string;
	desc: string;
  social: SocialDataType[];
};

export type CategoryDataType = {
  id: string;
  title: string;
  img: string;
};

export type StudentDataType = {
  id: string;
  name: string;
  courses: string[];
};

export type LectureDataType = {
  id: string;
  title: string;
  duration: number;
  video: string;
};
export type CommentDataType = {
  id: string;
  userID: string;
  role: "student" | "teacher";
  date: string;
  desc: string;
};
export type CourseDataType = {
  id: string;
  title: string;
  iconName: string;
  desc: string;
  teacher: string;
  score: number;
  price: number;
  discount: number;
  categories: string[];
  lectures: LectureDataType[];
  comments: CommentDataType[];
};

type BlogKeyType = "id" | "title" | "desc" | "image" | "date" | "author";
export type BlogDataType = {
  [index in BlogKeyType]: string;
} & {
  comments: CommentDataType[];
};

export type PackageDataType = {
  id: string;
  title: string;
  desc: string;
  courses: string[];
  price: number;
};







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
