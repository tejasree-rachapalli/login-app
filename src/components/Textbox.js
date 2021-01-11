import React from "react";

function Textbox({ label, type, placeholder, valueChange }) {
  let [value, setValue] = React.useState("");
  let [touched, setTouched] = React.useState(false);
  return (
    <div className="form-group my-3">
      {label ? <label>{label}</label> : null}
      <input
        type={type}
        className="form-control bg-light text-dark"
        placeholder={placeholder}
        value={value}
        onFocus={() => setTouched(true)}
        onChange={(e) => {
          setValue(e.target.value);
          valueChange(e.target.value);
        }}
      />
      {touched && value === "" ? (
        <small className="text-danger">This field is required</small>
      ) : null}
    </div>
  );
}
export default Textbox;
