export type RulesType = "REQUIRED_STRING" | "EMAIL_VALUE" | "PHONE_VALUE";
export type RuleObjectType = () => { type: RulesType };

export type ValuesType = {
  [key: string]: string | number | boolean;
};

export type ErrorsType = {
  [key: string]: string;
};
