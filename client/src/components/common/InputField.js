import React from "react";

const InputField = ({ id, name, value, type,placeholder,label, onChange }) => {
  return (
    <div>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        class="form-control"
        value={value}
        onChange={(e) => onChange(e)}
        required
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default InputField;
