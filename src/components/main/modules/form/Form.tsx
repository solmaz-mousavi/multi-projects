import React from 'react'

function Form() {
	return (
		<></>
	)
}

export default Form

// import { useFormik } from "formik";
// import validatorMethod from "../../../../validators/validators";
// import "./form.scss";

// type FormPropsType = {
// inputs:;
// submitHandler:;
// }

// export default function Form({ inputs, submitHandler }: FormPropsType) {

//   const formInitialValues = {};
//   inputs.forEach((input) => {
//     const { name, initialValue } = input;
//     formInitialValues[name] = initialValue;
//   });

//   const formik = useFormik({
//     initialValues: formInitialValues,

//     onSubmit: (values) => {
//       submitHandler(values);
//     },

//     validate: (values) => {
//       let errors = {};

//       inputs.forEach((input) => {
//         const { tag, name, validators } = input;
      
//           errors[name] = validatorMethod(values[name], validators);
   

//         errors[name] === "" && delete errors[name];
//       });
//       return errors;
//     },
//   });


//   return (
//     <form onSubmit={formik.handleSubmit} className="form-wrapper">
//       <div className="inputs-container">
//         {inputs.map((input) => {
//           switch (input.tag) {
//             case "input": {
//               const { name, label, type } = input;
//               return (
//                 <div
//                   className={`input-wrapper ${
//                     type === "checkbox" ? "checkbox" : ""
//                   } `}
//                   key={name}
//                 >
//                   <label htmlFor={name}>{label}</label>
//                   <input
//                     type={type}
//                     dir={input.dir}
//                     id={name}
//                     name={name}
//                     value={formik.values[name]}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.errors[name] && formik.touched[name] && (
//                     <span className="inputError">{formik.errors[name]}</span>
//                   )}
//                 </div>
//               );
//             }

//             default:
//               return <></>;
//           }
//         })}
//       </div>
//       <div className="buttons-container">
//         {buttons.map((btn) => {
//           const { title, type, className, method } = btn;
//           if (type === "submit") {
//             return (
//               <button type="submit" className={className} key={title}>
//                 {title}
//               </button>
//             );
//           } else {
//             return (
//               <button
//                 type={type}
//                 className={className}
//                 onClick={method}
//                 key={title}
//               >
//                 {title}
//               </button>
//             );
//           }
//         })}
//       </div>
//     </form>
//   );
// }
