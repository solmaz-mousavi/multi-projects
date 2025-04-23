import { useNavigate, useOutletContext } from "react-router-dom";
import "./login.scss";
import { AcademiaDataType } from "../../../../dataTypes/academiaData.type";
import { createRef, useContext } from "react";
import {
  IFormInputType,
  ValuesType,
} from "../../../../dataTypes/formData.type";
import { requiredStringValidator } from "../../../../validators/rules";
import { ButtonType } from "../../../../dataTypes/buttonData.type";
import PageHeader from "../../modules/pageHeader/PageHeader";
import Form from "../../../main/modules/form/Form";
import { AuthContext } from "../../../../contexts/AuthContext";
import { ModalContext } from "../../../../contexts/ModalContext";

function Login() {
	const navigate = useNavigate();
  const academiaData = useOutletContext<AcademiaDataType>();
  const { setUserInfo, setToken } = useContext(AuthContext);

	const { setShowModal, setModalDetails  } = useContext(ModalContext);

  const inputs: IFormInputType[] = [
    {
      tag: "input",
      type: "text",
      placeholder: "Username",
      fullWidth: true,
      label: {
        color: "#555",
        content: "Username",
        className: "pato-contact-label",
      },

      variant: "light",
      name: "user",
      initialvalue: "",
      validators: [requiredStringValidator()],
    },
    {
      tag: "input",
      type: "password",
      placeholder: "Password",
      fullWidth: true,
      label: {
        color: "#555",
        content: "Password",
        className: "pato-contact-label",
      },

      variant: "light",
      name: "pass",
      initialvalue: "",
      validators: [requiredStringValidator()],
    },
		{
      tag: "input",
      type: "checkbox",
      label: {
        color: "#555",
        content: "remember me",
        className: "checkbox-label",
      },

      variant: "light",
      name: "rme",
      initialvalue: "",
      validators: [],
			className:"checkbox"
    },
  ];
  const buttons: ButtonType[] = [
    {
      type: "submit",
      text: "login",
      variant: "academia-aqua",
      fullWidth: true,
    },
  ];
  const submitHandler: (values: ValuesType) => void = (items) => {

    const isLoggedIn = academiaData.students.find(
      (i) => i.user === items.user && i.password === items.pass
    );
    if (isLoggedIn) {
      setUserInfo(isLoggedIn);
      setToken(isLoggedIn.token);
			items.rme && localStorage.setItem("token", isLoggedIn.token);
			navigate("/academia/");
    } else {
			setModalDetails({
				desc:"Username or Password is wrong. Please try again.",
				icon:{ name: "MdErrorOutline", variant: "error" },
				 button:[{title:"OK", variant:"error", clickHandler:()=>setShowModal(false)}]
			});
      setShowModal(true);
    }
  };

  return (
    <section className="academia-contact-wrapper">
      <PageHeader title="Login" />

      <div className="academia-container">
        <div className="academia-thumb">
          <Form
            inputs={inputs}
            buttons={buttons}
            submitHandler={submitHandler}
          />
        </div>
      </div>
    </section>
  );
}

export default Login;
