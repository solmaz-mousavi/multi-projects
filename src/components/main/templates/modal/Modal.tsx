import Button from "../../modules/button/Button";
import "./modal.scss";
type ModalPropsType = {
  title?: string;
  desc: string;
  icon?: {
    name: string;
    variant: "success" | "error" | "warning" | "info" | "grey";
  };
  button: {
    title: string;
    variant: "success" | "error" | "warning" | "info" | "grey";
    clickHandler: () => void;
  }[];
};

function Modal({ title, desc, icon, button }: ModalPropsType) {
  return (
    <div className="modal-container">
      <div className="modal">

				{/* ------------- modal messages ------------- */}
        <div className="modal-details">
          {icon && (
            <Button
              variant={icon.variant}
              transparent={true}
              icon={{ name: icon.name }}
              border={false}
            />
          )}
          <div className="modal-txt">
            <h4 className="modal-title">{title}</h4>
            <p className="modal-desc">{desc}</p>
          </div>
        </div>

				{/* ------------- modal buttons ------------- */}
        <div className="modal-btn-container">
          {button.map((item) => (
            <Button
              text={item.title}
              className="modal-btn"
              clickHandler={item.clickHandler}
              variant={item.variant}
              key={item.title}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Modal;
