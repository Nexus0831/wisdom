// node_modules
import React from 'react';

// styles
import {
  ValidateError,
  GhostInput
} from './cssinjs';

// pure function
const Input = (props) => {
  const changeToggle = (e) => {
    props.input.onChange(e.target.value);
  };

  return (
    <span
      id="input"
    >
      <GhostInput
        placeholder={props.placeholder}
        value={props.input.value}
        label={props.label}
        onBlur={() => props.input.onBlur(props.value)}
        onChange={changeToggle}
        style={props.style}
        className={props.className}
        type={props.type}
        size={props.size}
      />
      {
        props.meta.touched
        &&
        props.meta.error
        &&
        <ValidateError>
          {props.meta.error}
        </ValidateError>
      }
    </span>
  );
};

export default Input;
