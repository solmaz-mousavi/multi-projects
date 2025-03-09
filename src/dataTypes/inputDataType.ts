import { ButtonStyleType } from "./buttonDataType";
import { RuleObjectType } from "./formDataType";

export type InputType = {
  tag: "input" | "textarea";
  type?: "text" | "email" | "number" | "password";
  placeholder?: string;
  className?: string;

  variant?: keyof ButtonStyleType;
  label?: {
    content: string;
    color: string;
    className: string;
  };

  fullWidth?: boolean;
  transparent?: boolean;
  border?: boolean;

  id?: string;
  name: string;
  value?: string;
  onChange?: () => void;
  onBlur?: () => void;

  initialValue: string | number | boolean;
  validators: RuleObjectType[];
};
