export type BreakpointType = null | {
  display: "desktop" | "laptop" | "tablet" | "mobile";
  width: String;
  iconName:
   "FaDesktop"
    | "FaLaptop"
    | "FaTabletScreenButton"
    | "FaMobileScreenButton";
}[];

export type mainDataType = null | {
  breakPoints: BreakpointType;
};
