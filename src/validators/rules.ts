import { RulesType, RuleObjectType } from "../dataTypes/formDataType";

export const requiredString: RulesType = "REQUIRED_STRING";
export const emailValue: RulesType = "EMAIL_VALUE";
export const phoneValue: RulesType = "PHONE_VALUE";

export const requiredStringValidator: RuleObjectType = () => ({  type: requiredString});
export const emailValidator: RuleObjectType = () => ({ type: emailValue });
export const phoneValidator: RuleObjectType = () => ({ type: phoneValue });
