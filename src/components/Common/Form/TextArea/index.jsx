// node_modules
import React from 'react';

// styles
import {
  ValidateError,
  MarkdownEditor
} from './cssinjs';

// pure function
const TextArea = (props) => {
  return (
    <span
      id="input"
    >
      <MarkdownEditor
        placeholder={props.placeholder}
        value={props.input.value}
        label={props.label}
        onBlur={() => props.input.onBlur(props.value)}
        onChange={props.input.onChange}
        style={props.style}
        className={props.className}
        readOnly={props.disabled}
      />
      {
        props.meta.touched
        && props.meta.error
        && <ValidateError>{props.meta.error}</ValidateError>
      }
    </span>
  );
};

export default TextArea;
