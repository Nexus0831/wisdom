// node_modules
import React from 'react';


// pure function
const Input = (props) => {
  return (
    <span
      id="input"
    >
      <input
        placeholder={props.placeholder}
        value={props.input.value}
        label={props.label}
        onBlur={() => props.input.onBlur(props.value)}
        onChange={props.input.onChange}
        style={props.style}
        className={props.className}
        type={props.type}
        size={props.size}
      />
      {
        props.meta.touched
        && props.meta.error
        && <span>{props.meta.error}</span>
      }
    </span>
  );
};

export default Input;
