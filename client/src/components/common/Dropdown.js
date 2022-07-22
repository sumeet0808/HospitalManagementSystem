import React from "react";

const Dropdown = ({id, value, data, placeholder, styleClass, onChange }) => {
  return (
    <div className={`form-group ${styleClass}`}>
      <select
      id={id}
        class="form-control"
        value={value}
        className="form-control"
        onChange={(e) => onChange(e)}
        required
      >
        <option value="">{placeholder}</option>
        {data.map((item, key) => (
          <option key={key} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
