import { SocialDataType } from "./mainData.type";

export type ScrollStyleType = { txtColor: string; iconColor: string };
export type ScrollBreakpointsType = { id: string; styleIndex: string };
export type ScrollDataType = {
  scrollStyles: ScrollStyleType[];
  scrollBreakpoints: ScrollBreakpointsType[];
};

export type StatusDataType = {
  name: string;
  count: string;
};

type ServicesKeyType = "iconName"|"title"|"desc";
export type ServicesDataType = {
	[index in ServicesKeyType]: string;
};

type WorksKeyType = "title"|"category"|"des"|"image";
export type WorksDataType = {
	[index in WorksKeyType]: string;
};

export type ClientsDataType = {
  name: string;
  iconName: string;
};

type TeamMembersKeyType = "name"|"job"|"image"|"desc";
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
