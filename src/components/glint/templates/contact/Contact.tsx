import { useState } from "react";
import { ButtonType } from "../../../../dataTypes/buttonData.type";
import {
  IFormInputType,
  ValuesType,
} from "../../../../dataTypes/formData.type";
import { SocialDataType } from "../../../../dataTypes/mainData.type";
import {
  emailValidator,
  phoneValidator,
  requiredStringValidator,
} from "../../../../validators/rules";
import Aos from "../../../main/modules/aos/Aos";
import Form from "../../../main/modules/form/Form";
import "./contact.scss";
import Modal from "../../../main/templates/modal/Modal";
import Icon from "../../../main/modules/icon/Icon";

function Contact({ data }: { data: SocialDataType[] }) {
  const [showModal, setShowModal] = useState(false);

	// ---- Identify the different parts of the form such as inputs, buttons and submit handler
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
      initialvalue: "",
      validators: [requiredStringValidator()],
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
      initialvalue: "",
      validators: [requiredStringValidator(), emailValidator()],
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
      initialvalue: "",
      validators: [requiredStringValidator(), phoneValidator()],
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
      initialvalue: "",
      validators: [requiredStringValidator()],
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
      initialvalue: "",
      validators: [requiredStringValidator()],
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
    setShowModal(true);
  };

  return (
    <section
      id="Glint-Contacts"
      className="glint-section-container glint-contacts-container"
    >
      <div className="decoration"></div>
      <Aos aosStyle="fadeInUp" className="contacts-header" once={true}>

				{/* ---- title ---- */}
        <div>
          <p className="glint-top-title contacts-header__top">Contact Us</p>
          <h2 className="glint-main-title contacts-header__title">
            Reach out for a new project or just say hello
          </h2>
        </div>


        <div className="contacts-bottom-wrapper">

					{/* ---- form ---- */}
          <div className="form-container">
            <Form
              inputs={inputs}
              buttons={buttons}
              submitHandler={submitHandler}
            />
          </div>

					{/* ---- contact info ---- */}
          <div className="info-container" style={{ color: "#fff" }}>
            <h4 className="info-top-title">Contact Info </h4>
            <h5 className="info-title">Where to Find Us </h5>
            <p className="info-desc">
              1600 Amphitheatre Parkway Mountain View, CA 94043 US
            </p>
            <h5 className="info-title">Email Us At</h5>
            <p className="info-desc">
              contact@glintsite.com info@glintsite.com
            </p>
            <h5 className="info-title">Call Us At</h5>
            <p className="info-desc">
              Phone: <>&#x28;</>+63<>&#x29;</> 555 1212 Mobile: <>&#x28;</>+63
              <>&#x29;</> 555 0100 Fax: <>&#x28;</>+63<>&#x29;</> 555 0101
            </p>
            <div className="social-container">
              {data &&
                data.map((item) => (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    key={item.id}
                  >
                    <Icon
                      name={item.iconName}
                      className="contacts-info-social"
                    />
                  </a>
                ))}
            </div>
          </div>

        </div>
      </Aos>

			{/* ---- modal ---- */}
      {showModal && (
        <Modal
          desc="We receive your message. Our team will contact you as soon as possible."
          icon={{ name: "MdCheck", variant: "success" }}
          button={[
            {
              title: "OK",
              variant: "success",
              clickHandler: () => setShowModal(false),
            },
          ]}
        />
      )}
    </section>
  );
}

export default Contact;
