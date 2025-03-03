export type SocialDataType = {
  socialName: string;
  iconName: string;
};

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

export type ServicesDataType = {
  iconName: string;
  title: string;
  desc: string;
};

export type WorksDataType = {
  title: string;
  category: string;
  des: string;
  image: string;
};

export type ClientsDataType = {
  name: string;
  iconName: string;
};

export type TeamMembersDataType = {
  name: string;
	job: string;
	image: string;
	desc: string;
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
