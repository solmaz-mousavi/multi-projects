import { MdMailOutline, MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import {
  IFormInputType,
  ValuesType,
} from "../../../../dataTypes/formData.type";
import {
  emailValidator,
  requiredStringValidator,
} from "../../../../validators/rules";
import { ButtonType } from "../../../../dataTypes/buttonData.type";
import Form from "../../../main/modules/form/Form";
import Aos from "../../../main/modules/aos/Aos";
import "./footer.scss";
import { SocialDataType } from "../../../../dataTypes/mainData.type";
import Icon from "../../../main/modules/icon/Icon";
import { GalleryDataType } from "../../../../dataTypes/patoData.type";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../../../main/templates/modal/Modal";
type FooterPropsType = {
  socialData: SocialDataType[];
  galleryData: GalleryDataType[];
};
function Footer({ socialData, galleryData }: FooterPropsType) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const inputs: IFormInputType[] = [
    {
      tag: "input",
      type: "text",
      placeholder: "Email Address",
      className: "footer-input",
      label: {
        content: <MdMailOutline />,
        color: "#fff",
        className: "footer-label",
      },
      variant: "dark",
      fullWidth: true,

      name: "email",
      initialvalue: "",
      validators: [requiredStringValidator(), emailValidator()],
    },
  ];

  const buttons: ButtonType[] = [
    {
      type: "submit",
      text: "submit",
      variant: "light",
      className: "pato-dark",
      fullWidth: true,
    },
  ];

  const submitHandler: (values: ValuesType) => void = (items) => {
    console.log(items);
    setShowModal(true);
  };
  return (
    <section className="pato-footer-wrapper">
      <div className="pato-footer-container">
        <div className="pato-footer-item">
          <Aos aosStyle="fadeInUp" once={true}>
            <h3 className="pato-footer-title">contact us</h3>
            <p className="pato-footer-desc">
              <MdLocationOn />
              8th floor, 379 Hudson St, New York, NY 10018
            </p>
            <p className="pato-footer-desc">
              <FaPhone />
              <a href="tel:+196 716 6879">(+1) 96 716 6879</a>
            </p>
            <p className="pato-footer-desc">
              <MdLocationOn />
              <a href="mailto:contact@site.com">contact@site.com</a>
            </p>
            <div className="pato-footer-social-container">
              {socialData &&
                socialData.map((item) => (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    key={item.id}
                  >
                    <Icon
                      name={item.iconName}
                      className="pato-footer-social-icon"
                    />
                  </a>
                ))}
            </div>
          </Aos>
        </div>

        <div className="pato-footer-item">
          <Aos aosStyle="fadeInUp" once={true}>
            <h3 className="pato-footer-title">Opening Times</h3>
            <p className="pato-footer-desc">09:30 AM {"-"} 11:00 PM</p>
            <p className="pato-footer-desc">Every Day</p>
          </Aos>
        </div>

        <div className="pato-footer-item">
          <Aos aosStyle="fadeInUp" once={true}>
            <h3 className="pato-footer-title">Specials Sign up</h3>
            <Form
              inputs={inputs}
              buttons={buttons}
              submitHandler={submitHandler}
            />
          </Aos>
        </div>

        <div className="pato-footer-item">
          <Aos aosStyle="fadeInUp" once={true}>
            <h3 className="pato-footer-title">gallery</h3>
            <div className="pato-footer-gallery-container">
              {galleryData &&
                galleryData.slice(0, 8).map((item) => (
                  <div
                    key={item.id}
                    className="pato-footer-gallery-item"
                    onClick={() => navigate("/pato/gallery")}
                  >
                    <img src={item.image} alt={item.title} />
                  </div>
                ))}
            </div>
          </Aos>
        </div>
      </div>

      <div className="footer-bottom">
        <Aos aosStyle="fadeInUp" once={true}>
          <p>© Copyright 2017 by Colorlib</p>
        </Aos>
      </div>
      {showModal && (
        <Modal
          desc="Your email have been submitted successfully."
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

export default Footer;
