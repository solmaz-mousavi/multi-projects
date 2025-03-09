import { InputType } from "../../../../dataTypes/inputDataType";
import { ErrorsType, ValuesType } from "../../../../dataTypes/formDataType";
import { ButtonType } from "../../../../dataTypes/buttonDataType";
import { useFormik } from "formik";
import Input from "../input/Input";
import Button from "../button/Button";
import validatorMethod from "../../../../validators/validatorMethod";
import "./form.scss";

type FormPropsType = {
  inputs: InputType[];
  buttons: ButtonType[];
  submitHandler: (values: ValuesType) => void;
  className: string;
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
        const { tag, name, validators } = input;
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
            <Input {...input} />
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
