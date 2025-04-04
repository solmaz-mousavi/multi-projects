import { SocialDataType } from "./mainData.type";

export type ScrollStyleType = { txtColor: string; iconColor: string };
export type ScrollBreakpointsType = { id: string; styleIndex: string };
export type ScrollDataType = {
  scrollStyles: ScrollStyleType[];
  scrollBreakpoints: ScrollBreakpointsType[];
};

type StatusKeyType = "id" | "name" | "count";
export type StatusDataType = {
  [index in StatusKeyType]: string;
};

type ServicesKeyType = "id" | "iconName" | "title" | "desc";
export type ServicesDataType = {
  [index in ServicesKeyType]: string;
};

type WorksKeyType = "id" | "title" | "category" | "des" | "image";
export type WorksDataType = {
  [index in WorksKeyType]: string;
};

type ClientsKeyType = "id" | "name" | "iconName";
export type ClientsDataType = {
  [index in ClientsKeyType]: string;
};

type TeamMembersKeyType = "id" | "name" | "job" | "image" | "desc";
export type TeamMembersDataType = {
  [index in TeamMembersKeyType]: string;
};

export type GlintDataType = {
  menu: string[];
  social: SocialDataType[];
  scrollData: ScrollDataType;
  status: StatusDataType[];
  services: ServicesDataType[];
  works: WorksDataType[];
  clients: ClientsDataType[];
  teamMembers: TeamMembersDataType[];
};
