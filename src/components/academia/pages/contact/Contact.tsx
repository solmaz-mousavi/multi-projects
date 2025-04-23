import { useContext } from "react";
import PageHeader from "../../modules/pageHeader/PageHeader";
import "./contact.scss";
import {
  IFormInputType,
  ValuesType,
} from "../../../../dataTypes/formData.type";
import { ButtonType } from "../../../../dataTypes/buttonData.type";
import {
  emailValidator,
  phoneValidator,
  requiredStringValidator,
} from "../../../../validators/rules";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";
import Form from "../../../main/modules/form/Form";
import { useOutletContext } from "react-router-dom";
import { AcademiaDataType } from "../../../../dataTypes/academiaData.type";
import Icon from "../../../main/modules/icon/Icon";
import { ModalContext } from "../../../../contexts/ModalContext";

function Contact() {
  const academiaData = useOutletContext<AcademiaDataType>();
  
	const { setShowModal, setModalDetails  } = useContext(ModalContext);

  const inputs: IFormInputType[] = [
    {
      tag: "input",
      type: "text",
      placeholder: "Name",

      variant: "light",
      name: "name",
      initialvalue: "",
      validators: [requiredStringValidator()],
    },
    {
      tag: "input",
      type: "text",
      placeholder: "Phone",

      variant: "light",
      name: "phone",
      initialvalue: "",
      validators: [requiredStringValidator(), phoneValidator()],
    },
    {
      tag: "input",
      type: "text",
      placeholder: "Email",

      variant: "light",
      name: "email",
      initialvalue: "",
      validators: [emailValidator()],
    },
    {
      tag: "textarea",
      placeholder: "Message",
      className: "pato-contact-textarea",

      variant: "light",
      name: "message",
      initialvalue: "",
      validators: [requiredStringValidator()],
    },
  ];
  const buttons: ButtonType[] = [
    {
      type: "submit",
      text: "Send Message",
      variant: "academia-aqua",
    },
  ];
  const submitHandler: (values: ValuesType) => void = (items) => {
    console.log(items);

		setModalDetails({
			desc:"We receive your message. Our team will contact you as soon as possible.",
			icon:{ name: "MdCheck", variant: "success" },
			 button:[{title:"OK", variant:"success", clickHandler:()=>setShowModal(false)}]
		});
    setShowModal(true);
  };

  return (
    <section className="academia-contact-wrapper">
      <PageHeader title="Contact Us" />

      <div className="academia-container">
        <div className="academia-contact-container">
          <div id="googleMap">
            <iframe
              width="100%"
              height="100%"
              className="location"
              title="academia"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Shariati%20street,%20Tehran,%20Iran+(pato%20restaurant)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/collections/drones/">buy drones</a>
            </iframe>
          </div>
          <div className="academia-contact-right">
            <div className="academia-contact-details">
              <div className="academia-contact-item">
                <div>
                  <MdLocationOn className="academia-icon" />
                  <span className="academia-title-sm">Address:</span>
                </div>
                <address className="academia-desc">
                  198 West 21th Street, Suite 721 New York NY 10016
                </address>
              </div>

              <div className="academia-contact-item">
                <div>
                  <MdEmail className="academia-icon" />
                  <span className="academia-title-sm">Email:</span>
                </div>
                <a href="mailto:info@yoursite.com" className="academia-desc">
                  info@yoursite.com
                </a>
              </div>

              <div className="academia-contact-item">
                <div>
                  <MdCall className="academia-icon" />
                  <span className="academia-title-sm">Phone:</span>
                </div>

                <a href="tel:+1235235598" className="pato-desc">
                  <>&#x28;</>+1<>&#x29;</> 235 2355 98
                </a>
              </div>
            </div>

            <h3 className="academia-title-sm">
              We're open for any suggestion or just to have a chat.
            </h3>
            <Form
              inputs={inputs}
              buttons={buttons}
              submitHandler={submitHandler}
            />

            <h3 className="academia-title-sm">Follow us here:</h3>
            <div className="academia-contact-social-container">
              {academiaData.social &&
                academiaData.social.map((item) => (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    key={item.id}
                  >
                    <Icon
                      key={item.id}
                      name={item.iconName}
                      className="academia-social"
                    />
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Contact;
