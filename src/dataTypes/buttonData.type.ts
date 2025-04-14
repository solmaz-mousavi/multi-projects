import { ReactNode } from "react";
import { IconPropsType } from "../components/main/modules/icon/Icon";

type ColorKeyType = "text" | "bg" | "border" | "hoverText" | "hoverBg";
export type StyleType =
  | "success"
  | "info"
  | "warning"
  | "error"
  | "light"
  | "dark"
  | "grey"
  | "transparent"
  | "pato-dark"
  | "pato-light"
  | "pato-transparent"
  | "academia-aqua"
  | "academia-light";
export type ColorType = {
  [index in ColorKeyType]: string;
};
export type ButtonStyleType = {
  [index in StyleType]: ColorType;
};

export type ButtonType = {
  type?: "button" | "submit" | "link";
  text?: string;
  title?: string;
  className?: string;
  clickHandler?: () => void;
  variant?: keyof ButtonStyleType;
  icon?: IconPropsType;
  tooltip?: {
    content: string;
    color: string;
    position: "left" | "right" | "top" | "bottom";
  };
  to?: string;
  fullWidth?: boolean;
  transparent?: boolean;
  border?: boolean;
  round?: boolean;
  children?: ReactNode;
};
