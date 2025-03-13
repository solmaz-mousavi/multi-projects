import { ChangeEvent, FocusEventHandler } from "react";
import { IFormInputType, ValueType } from "./formDataType";

export interface InputType extends IFormInputType{
  id?: string;
  value: ValueType;
  onChange: (e: ChangeEvent ) => void;
  onBlur: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
};

