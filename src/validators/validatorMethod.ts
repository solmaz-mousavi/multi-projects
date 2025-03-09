import { requiredString, emailValue, phoneValue } from "./rules";
import { phonePattern, emailPattern } from "./regex";
import { RuleObjectType } from "../dataTypes/formDataType";

export default function validatorMethod(
  inputValue: string | number | boolean,
  validators: RuleObjectType[]
) {
  let error = "";
  validators.some((validator) => {
    const value = inputValue.toString().trim();
    switch (validator().type) {
      case requiredString: {
        value.length === 0 && (error = "This field is required.");
        break;
      }
      case phoneValue: {
        !phonePattern.test(value) && (error = "The phone number is not valid");
        break;
      }
      case emailValue: {
        if (value.length > 0) {
          if (!emailPattern.test(value)) {
            error = "The email is not valid";
          }
        }
        break;
      }
      default: {
        break;
      }
    }
    return error !== "";
  });
  return error;
}
