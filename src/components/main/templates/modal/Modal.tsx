import Button from "../../modules/button/Button";
import Icon from "../../modules/icon/Icon";
import "./modal.scss";
type ModalPropsType = {
  title?: string;
  desc: string;
  icon?: {
    name: string;
		variant:"success" | "error" | "warning" | "info" | "grey";
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
        <div className="modal-details">
          {icon && (
						<>
            {/* <Icon name={icon.name} className={`modal-icon ${icon.variant}`} /> */}
						<Button variant={icon.variant} transparent={true} icon={{name: icon.name}} border={false} />
						</>
          )}
          <div className="modal-txt">
            <h4 className="modal-title">{title}</h4>
            <p className="modal-desc">{desc}</p>
          </div>
        </div>
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
