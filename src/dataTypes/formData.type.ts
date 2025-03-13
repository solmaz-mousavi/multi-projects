import { ReactNode } from "react";
import { ButtonStyleType } from "./buttonData.type";

export type RulesType = "REQUIRED_STRING" | "EMAIL_VALUE" | "PHONE_VALUE";
export type RuleObjectType = () => { type: RulesType };

export type ValueType = string | number;
export type ValuesType = {
  [key: string]: ValueType;
};

export type ErrorsType = {
  [key: string]: string;
};

export interface IFormInputType {
  tag: "input" | "textarea";
  type?: "text" | "email" | "number" | "password";
  placeholder?: any;
  className?: string;

  variant?: keyof ButtonStyleType;
  label?: {
    content: string | ReactNode;
    color: string;
    className?: string;
  };

  fullWidth?: boolean;
  transparent?: boolean;
  border?: boolean;

  name: string;
  initialValue: ValueType;
  validators: RuleObjectType[];
}
