import { ErrorsType, IFormInputType, ValuesType } from "../../../../dataTypes/formData.type";
import { ButtonType } from "../../../../dataTypes/buttonData.type";
import { useFormik } from "formik";
import Input from "../input/Input";
import Button from "../button/Button";
import validatorMethod from "../../../../validators/validatorMethod";
import "./form.scss";

type FormPropsType = {
  inputs: IFormInputType[];
  buttons: ButtonType[];
  submitHandler: (values: ValuesType) => void;
  className?: string;
};

export default function Form({
  inputs,
  buttons,
  submitHandler,
  className,
}: FormPropsType) {
  const formInitialValues: ValuesType = {};
  inputs.forEach((input) => {
    const { name, initialValue } = input;
    formInitialValues[name] = initialValue;
  });

  const formik = useFormik({
    initialValues: formInitialValues,

    onSubmit: (values) => {
      submitHandler(values);
    },

    validate: (values) => {
      let errors: ErrorsType = {};

      inputs.forEach((input) => {
        const { name, validators } = input;
        errors[name] = validatorMethod(values[name], validators);
        errors[name] === "" && delete errors[name];
      });
      return errors;
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`form-wrapper ${className}`}
    >
      {inputs.map((input) => {
        const { name } = input;

        return (
          <div key={name} className={`input-container ${name}`}>
            <Input
              {...input}
							id={name}
              value={formik.values[name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors[name] && formik.touched[name] && (
              <span className="inputError">{formik.errors[name]}</span>
            )}
          </div>
        );
      })}

      <div className="buttons-container">
        {buttons.map((button, index) => (
          <Button {...button} key={index} />
        ))}
      </div>
    </form>
  );
}
