import { InputType } from "../../../../dataTypes/inputDataType";
import "./input.scss";

function Input({
  tag = "input",
  type = "text",
  placeholder,
  className,
  variant="dark",
  label,
  fullWidth=false,
  transparent=false,
  border=true,

  id,
  name,
  value,
  onChange,
  onBlur,
}: InputType) {
  return (
    <div className="input-container">
      {label && (
        <label style={{ color: `${label.color}` }} className={label.className}>{label.content}</label>
      )}
      {tag === "textarea" ? (
        <textarea
				id={id}
				name={name}
				placeholder={placeholder}
				className={`input ${variant} ${fullWidth ? "fullWidth" : ""} ${
					transparent ? "transparent" : ""
				} ${border ? "border" : ""} ${className || ""}`}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				 />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          className={`input ${variant} ${fullWidth ? "fullWidth" : ""} ${
            transparent ? "transparent" : ""
          } ${border ? "border" : ""} ${className || ""}`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    </div>
  );
}

export default Input;
