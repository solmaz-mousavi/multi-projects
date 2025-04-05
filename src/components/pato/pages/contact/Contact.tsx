import { ButtonType } from "../../../../dataTypes/buttonData.type";
import {
  IFormInputType,
  ValuesType,
} from "../../../../dataTypes/formData.type";
import {
  emailValidator,
  phoneValidator,
  requiredStringValidator,
} from "../../../../validators/rules";
import Form from "../../../main/modules/form/Form";
import Header from "../../templates/header/Header";
import "./contact.scss";

function Contact() {
  const inputs: IFormInputType[] = [
    {
      tag: "input",
      type: "text",
      placeholder: "Name",
      label: {
        color: "#555",
        content: "Name",
        className: "pato-contact-label",
      },

      variant: "light",
      name: "name",
      initialValue: "",
      validators: [requiredStringValidator()],
    },
    {
      tag: "input",
      type: "text",
      placeholder: "Phone",
      label: {
        color: "#555",
        content: "Phone",
        className: "pato-contact-label",
      },

      variant: "light",
      name: "phone",
      initialValue: "",
      validators: [requiredStringValidator(), phoneValidator()],
    },
    {
      tag: "input",
      type: "text",
      placeholder: "Email",
      label: {
        color: "#555",
        content: "Email",
        className: "pato-contact-label",
      },

      variant: "light",
      name: "email",
      initialValue: "",
      validators: [emailValidator()],
    },
		{
      tag: "textarea",
      placeholder: "Message",
      className: "pato-contact-textarea",
      label: {
        color: "#555",
        content: "Message",
        className: "pato-contact-label",
      },

      variant: "light",
      name: "email",
      initialValue: "",
      validators: [requiredStringValidator()],
    },
  ];
  const buttons: ButtonType[] = [
    {
      type: "submit",
      text: "send",
      variant: "pato-dark",
      className: "pato-form-button",
    },
  ];
  const submitHandler: (values: ValuesType) => void = (items) => {
    console.log(items);
  };
  return (
    <section className="pato-contact-container">
      <Header title="contact" section={true} />





			<Form inputs={inputs} buttons={buttons} submitHandler={submitHandler} />









    </section>
  );
}

export default Contact;
