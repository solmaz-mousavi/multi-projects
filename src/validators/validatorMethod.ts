import { requiredString, emailValue, phoneValue, maxLength, minLength, pastDate } from "./rules";
import { phonePattern, emailPattern } from "./regex";
import { RulesType } from "../dataTypes/formData.type";

export default function validatorMethod(
  inputValue: string | number | Date,
  validators: { type: RulesType, validatorValue?: any }[]
) {
  let error = "";
  validators.some((validator) => {
    const value = inputValue.toString().trim();
    switch (validator.type) {
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

      case maxLength: {
        value.length > validator.validatorValue && (error = `Max length for this field is ${validator.validatorValue}.`);

        break;
      }

      case minLength: {
				value.length < validator.validatorValue && (error = `Min length for this field is ${validator.validatorValue}.`);
        break;
      }

			case pastDate: {
				const today = new Date();
				const eventDay = new Date(inputValue);
				eventDay < today && (error = `You can select only future days.`);
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
