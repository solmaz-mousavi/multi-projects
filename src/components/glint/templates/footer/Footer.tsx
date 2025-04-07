import { ButtonType } from "../../../../dataTypes/buttonData.type";
import {
  IFormInputType,
  ValuesType,
} from "../../../../dataTypes/formData.type";
import {
  emailValidator,
  requiredStringValidator,
} from "../../../../validators/rules";
import { MdMailOutline } from "react-icons/md";
import "./footer.scss";
import Form from "../../../main/modules/form/Form";
import Aos from "../../../main/modules/aos/Aos";
import Modal from "../../../main/templates/modal/Modal";
import { useState } from "react";

function Footer() {
  const [showModal, setShowModal] = useState(false);
  const inputs: IFormInputType[] = [
    {
      tag: "input",
      type: "text",
      placeholder: "Your Email",
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
      className: "glint-form-button",
      fullWidth: true,
    },
  ];

  const submitHandler: (values: ValuesType) => void = (items) => {
		console.log(items);
    setShowModal(true);
  };
  return (
    <section className="glint-footer-container">
      <Aos aosStyle="fadeInUp" className="contacts-header" once={true}>
        <div className="footer-top">
          <div className="footer-top__left">
            <h3>Glint.</h3>
            <p>
              Proin eget tortor risus. Mauris blandit aliquet elit, eget
              tincidunt nibh pulvinar a. Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi. Mauris blandit aliquet elit,
              eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
              tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas
              autem necessitatibus vitae aut.
            </p>
          </div>
          <div className="footer-top__right">
            <h3>Get Notified</h3>
            <p>
              Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae
              aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt
              iusto porro.
            </p>
            <Form
              inputs={inputs}
              buttons={buttons}
              submitHandler={submitHandler}
            />
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom__left">© Copyright Glint 2022</div>
          <div className="footer-bottom__right">Site Template by Colorlib</div>
        </div>
      </Aos>
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
