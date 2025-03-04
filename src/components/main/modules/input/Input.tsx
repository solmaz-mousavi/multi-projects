import { useState } from "react";
import "./input.scss";
type InputPropsType = {
  type?: "text" | "email" | "textarea" | "password";
  color?: "transparent" | "";
  placeholder?: string;
  label?: string;
  width?: "full" | "";
};

function Input({
  type = "text",
  color = "transparent",
  placeholder = "",
  label,
  width,
}: InputPropsType) {
  const [value, setValue] = useState<string>("");
  return (
    <div className="input-container">
      {label && <label>{label}</label>}
			{
				type==="textarea" ? (
					<textarea/>
				) : (
					<input
						type={type}
						placeholder={placeholder}
						className={`input ${color} ${width}`}
						onChange={(e) => setValue(e.target.value)}
						value={value}
					/>

				)
			}
    </div>
  );
}

export default Input;
