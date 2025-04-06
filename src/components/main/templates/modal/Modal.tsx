import Icon from "../../modules/icon/Icon";
import "./modal.scss";
type ModalPropsType = {
  title?: string;
  desc: string;
  icon?: {
    name: string;
    className: string;
  };
  button: {
    title: string;
    iconName?: string;
    variant: "success" | "error" | "warning" | "info" | "grey";
    clickHandler: () => void;
  }[];
};
function Modal({ title, desc, icon, button }: ModalPropsType) {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-details">
          {icon && <Icon name={icon.name} className={`modal-icon ${icon.className}`} />}
          <div className="modal-txt">
            <h4 className="modal-title">{title}</h4>
            <p className="modal-desc">{desc}</p>
          </div>
        </div>
        <div className="modal-btn-container">
          {button.map((item) => (
            <button onClick={item.clickHandler} className={`modal-btn ${item.variant}`}>
              {item.iconName && <Icon name={item.iconName} className="modal-btn-icon"/>}
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
