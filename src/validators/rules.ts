import { RulesType, RuleObjectType } from "../dataTypes/formData.type";

export const requiredString: RulesType = "REQUIRED_STRING";
export const emailValue: RulesType = "EMAIL_VALUE";
export const phoneValue: RulesType = "PHONE_VALUE";
export const maxLength: RulesType = "MAX_LENGTH";
export const minLength: RulesType = "MIN_LENGTH";
export const pastDate: RulesType = "PAST_DATE";

export const requiredStringValidator: RuleObjectType = () => ({  type: requiredString});
export const emailValidator: RuleObjectType = () => ({ type: emailValue });
export const phoneValidator: RuleObjectType = () => ({ type: phoneValue });
export const maxLengthValidator: RuleObjectType = (max) => ({ type: maxLength, validatorValue:max });
export const minLengthValidator: RuleObjectType = (min) => ({ type: minLength, validatorValue:min });
export const pastDateValidator: RuleObjectType = () => ({ type: pastDate });
