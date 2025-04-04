import { InputType } from "../../../../dataTypes/inputData.type";
import "./input.scss";

function Input({
  tag = "input",
  type = "text",
  placeholder,
  className,
  variant = "dark",
  label,
  fullWidth = false,
  transparent = false,
  border = true,

  id,
  name,
  value,
  selectValues,
  onChange,
  onBlur,
	...rest
}: InputType) {
  return (
    <div className="input-container">
      {label && (
        <label style={{ color: `${label.color}` }} className={label.className}>
          {label.content}
        </label>
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
      ) : tag === "select" ? (
        <select
          id={id}
          name={name}
          className={`input ${variant} ${fullWidth ? "fullWidth" : ""} ${
            transparent ? "transparent" : ""
          } ${border ? "border" : ""} ${className || ""}`}
          onChange={onChange}
					{...rest}
        >
          {selectValues?.map(item => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
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
					{...rest}
        />
      )}
    </div>
  );
}

export default Input;
