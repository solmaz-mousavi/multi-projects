import { ButtonType } from "../../../../dataTypes/buttonData.type";
import {
  IFormInputType,
  ValuesType,
} from "../../../../dataTypes/formData.type";
import { dateFormatter } from "../../../../utils/dateFormatter";
import {
  emailValidator,
  pastDateValidator,
  phoneValidator,
  requiredStringValidator,
} from "../../../../validators/rules";
import Aos from "../../../main/modules/aos/Aos";
import Form from "../../../main/modules/form/Form";
import "./reservation.scss";

function Reservation() {
	const today = new Date().toString();

	console.log(dateFormatter(today, 3));
  const inputs: IFormInputType[] = [
    {
      tag: "input",
      type: "date",
      className: "pato-reservation-input",
      label: {
        color: "#555",
        content: "Date",
        className: "pato-reservation-label",
      },

      variant: "light",
      name: "date",
      initialValue: dateFormatter(today, 3) || "",
      validators: [pastDateValidator(), requiredStringValidator()],
    },
    {
      tag: "select",
      placeholder: "Time",
      className: "pato-reservation-input",
      label: {
        color: "#555",
        content: "Time",
        className: "pato-reservation-label",
      },

      variant: "light",
      name: "time",
      initialValue: "12:00",
      validators: [],
      selectValues: [
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
      ],
    },
    {
      tag: "input",
      type: "number",
      className: "pato-reservation-input",
      label: {
        color: "#555",
        content: "People",
        className: "pato-reservation-label",
      },

      variant: "light",
      name: "people",
      initialValue: 1,
      validators: [],
      min: 1,
      max: 12,
    },
    {
      tag: "input",
      type: "text",
      placeholder: "Name",
      className: "pato-reservation-input",
      label: {
        color: "#555",
        content: "Name",
        className: "pato-reservation-label",
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
      className: "pato-reservation-input",
      label: {
        color: "#555",
        content: "Phone",
        className: "pato-reservation-label",
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
      className: "pato-reservation-input",
      label: {
        color: "#555",
        content: "Email",
        className: "pato-reservation-label",
      },

      variant: "light",
      name: "email",
      initialValue: "",
      validators: [emailValidator()],
    },
  ];

  const buttons: ButtonType[] = [
    {
      type: "submit",
      text: "submit",
      variant: "pato-dark",
      className: "pato-form-button",
    },
  ];

  const submitHandler: (values: ValuesType) => void = (items) => {
    console.log(items);
  };

  return (
    <section className="pato-reservation-container">
      <div className="pato-header pato-reservation-header">
        <Aos aosStyle="fadeInUp" once={true}>
          <p className="pato-top-title">reservation</p>
          <h3 className="pato-title">book a table</h3>
        </Aos>
      </div>
      <div className="pato-reservation-content">
        <Form inputs={inputs} buttons={buttons} submitHandler={submitHandler} />
        <div className="pato-reservation-bottom">
          <div className="pato-reservation-bottom__item">
            <div className="pato-subtitle">Reserve by Phone</div>
            <p className="pato-desc">
              Donec quis euismod purus. Donec feugiat ligula rhoncus, varius
              nisl sed, tincidunt lectus. Nulla vulputate , lectus vel volutpat
              efficitur, orci lacus sodales sem, sit amet quam:{" "}
              <span className="pato-reservation-bold">(001) 345 6889</span>
            </p>
          </div>
          <div className="pato-reservation-bottom__item">
            <div className="pato-subtitle">For Event Booking</div>
            <p className="pato-desc">
              Donec feugiat ligula rhoncus:{" "}
              <span className="pato-reservation-bold">(001) 345 6889</span>,
              varius nisl sed, tinci-dunt lectus sodales sem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservation;
