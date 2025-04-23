import { ReactNode } from "react";
import { ButtonStyleType } from "./buttonData.type";

export type RulesType =
  | "REQUIRED_STRING"
  | "EMAIL_VALUE"
  | "PHONE_VALUE"
  | "MAX_LENGTH"
  | "MIN_LENGTH"
	| "PAST_DATE";
export type RuleObjectType = (val?: any ) => { type: RulesType, validatorValue?: any };

export type ValueType = string | number;
export type ValuesType = {
  [key: string]: ValueType;
};

export type ErrorsType = {
  [key: string]: string;
};

export interface IFormInputType {
  tag: "input" | "textarea" | "select";
  type?: "text" | "email" | "number" | "password" | "date" | "checkbox" | "radio";
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
  selectValues?: string[];
  initialvalue: ValueType;
  validators: { type: RulesType, validatorValue?: any }[];
 [index:string]: any;
}
