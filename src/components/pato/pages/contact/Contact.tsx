import {
  MdCall,
  MdLocationOn,
  MdOutlineAccessTimeFilled,
} from "react-icons/md";
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
      initialvalue: "",
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
      initialvalue: "",
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
      initialvalue: "",
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
      initialvalue: "",
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

      <h3 className="pato-subtitle">Find us here</h3>
      <div id="googleMap">
        <iframe
          width="100%"
          height="300"
          className="location"
					title="pato-restaurant"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Shariati%20street,%20Tehran,%20Iran+(pato%20restaurant)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/collections/drones/">buy drones</a>
        </iframe>
      </div>

      <h3 className="pato-subtitle">Send us a message</h3>
      <Form inputs={inputs} buttons={buttons} submitHandler={submitHandler} />

      <div className="pato-contact-bottom">
        <div className="pato-contact-bottom-item">
          <MdLocationOn className="pato-contact-bottom-icon"/>
          <div className="pato-contact-bottom-details">
            <h3 className="pato-subtitle">location</h3>
            <address className="pato-desc">
              8th floor, 379 Hudson St, New York, NY 10018
            </address>
          </div>
        </div>
        <div className="pato-contact-bottom-item">
          <MdCall className="pato-contact-bottom-icon"/>
          <div className="pato-contact-bottom-details">
            <h3 className="pato-subtitle">call us</h3>
            <a href="tel:+1967166879" className="pato-desc">
              (+1) 96 716 6879
            </a>
          </div>
        </div>
        <div className="pato-contact-bottom-item">
          <MdOutlineAccessTimeFilled className="pato-contact-bottom-icon"/>
          <div className="pato-contact-bottom-details">
            <h3 className="pato-subtitle">openning hours</h3>
            <p className="pato-desc">09:30 AM - 11:00 PM Every Day</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
