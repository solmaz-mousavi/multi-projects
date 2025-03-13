import { ButtonType } from "../../../../dataTypes/buttonDataType";
import { IFormInputType, ValuesType } from "../../../../dataTypes/formDataType";
import { SocialDataType } from "../../../../dataTypes/glintDataType";
import {
  emailValidator,
  phoneValidator,
  requiredStringValidator,
} from "../../../../validators/rules";
import Aos from "../../../main/modules/aos/Aos";
import Button from "../../../main/modules/button/Button";
import Form from "../../../main/modules/form/Form";
import "./contact.scss";

function Contact({ data }: { data: SocialDataType[] }) {
  const inputs: IFormInputType[] = [
    {
      tag: "input",
      type: "text",
      placeholder: "Your Name",
      className: "contacts-input",

      variant: "dark",
      fullWidth: true,
      transparent: true,
      border: false,

      name: "username",
      initialValue: "",
      validators: [requiredStringValidator],
    },
    {
      tag: "input",
      type: "text",
      placeholder: "Your Email",
      className: "contacts-input",

      variant: "dark",
      fullWidth: true,
      transparent: true,
      border: false,

      name: "email",
      initialValue: "",
      validators: [requiredStringValidator, emailValidator],
    },
    {
      tag: "input",
      type: "text",
      placeholder: "Your Phone",
      className: "contacts-input",

      variant: "dark",
      fullWidth: true,
      transparent: true,
      border: false,

      name: "phone",
      initialValue: "",
      validators: [requiredStringValidator, phoneValidator],
    },
    {
      tag: "input",
      type: "text",
      placeholder: "Subject",
      className: "contacts-input",

      variant: "dark",
      fullWidth: true,
      transparent: true,
      border: false,

      name: "subject",
      initialValue: "",
      validators: [requiredStringValidator],
    },
    {
      tag: "textarea",
      type: "text",
      placeholder: "Your Message",
      className: "contacts-input",

      variant: "dark",
      fullWidth: true,
      transparent: true,
      border: false,

      name: "message",
      initialValue: "",
      validators: [requiredStringValidator],
    },
  ];

  const buttons: ButtonType[] = [
    {
      type: "submit",
      text: "submit",
      variant: "light",
      className: "glint-form-button",
      fullWidth: true,
    },
  ];

  const submitHandler: (values: ValuesType) => void = (items) => {
    console.log(items);
  };

  return (
    <section id="Contacts" className="section-container contacts-container">
      <div className="decoration"></div>
      <Aos aosStyle="fadeInUp" className="contacts-header" once={true}>
        <div>
          <p className="top-title contacts-header__top">Contact Us</p>
          <p className="main-title contacts-header__title">
            Reach out for a new project or just say hello
          </p>
        </div>

      <div className="contacts-bottom-wrapper">
        <div className="form-container">
          <Form
            inputs={inputs}
            buttons={buttons}
            submitHandler={submitHandler}
          />
        </div>
        <div className="info-container" style={{ color: "#fff" }}>
          <h4 className="info-top-title">Contact Info </h4>
          <h5 className="info-title">Where to Find Us </h5>
          <p className="info-desc">
            1600 Amphitheatre Parkway Mountain View, CA 94043 US
          </p>
          <h5 className="info-title">Email Us At</h5>
          <p className="info-desc">contact@glintsite.com info@glintsite.com</p>
          <h5 className="info-title">Call Us At</h5>
          <p className="info-desc">
            Phone: (+63) 555 1212 Mobile: (+63) 555 0100 Fax: (+63) 555 0101
          </p>
          <div className="social-container">
            {data &&
              data.map((item, index) => (
                <Button
                  key={index}
                  icon={{ name: `${item.iconName}` }}
                  variant="light"
                  transparent={true}
                  border={false}
                  className="contacts-info-social"
                />
              ))}
          </div>
        </div>
      </div>
			</Aos>
    </section>
  );
}

export default Contact;
