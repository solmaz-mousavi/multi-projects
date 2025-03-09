export const bb = 5;

// import {
//   requiredString,
//   emailValue,
//   phoneValue,
// } from "./rules";
// import { phonePattern, emailPattern } from "./regex";

// type InputValueType = string;




// export default function validator(inputValue: InputValueType, validators:ValidatorsType) {
//   let error = "";
//   validators.some((validator) => {
//     switch (validator.type) {

//       case requiredString: {
//         inputValue.toString().trim().length === 0 &&
//           (error = "This field is required.");
//         break;
//       }

//       case phoneValue: {
//         !phonePattern.test(inputValue) &&
//           (error = "The phone number is not valid");
//         break;
//       }

//       case emailValue: {
//         if (inputValue.length > 0) {
//           if (!emailPattern.test(inputValue)) {
//             error = "The email is not valid";
//           }
//         }
//         break;
//       }

//       default: {
//         break;
//       }
//     }

//     return error !== "";
//   });

//   return error;
// }
