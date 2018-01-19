// node_modules
import React from 'react';
import $ from 'jquery';

// styles
import {
  ValidateError,
  MarkdownEditor
} from './cssinjs';

// pure function
const TextArea = (props) => {
  const changeToggle = (e) => {
    props.input.onChange(e.target.value);
  };

  return (
    <span
      id="textarea"
    >
      <MarkdownEditor
        id="editor"
        placeholder={props.placeholder}
        onBlur={() => props.input.onBlur(props.value)}
        value={props.input.value}
        onChange={changeToggle}
        readOnly={props.disabled}
        className={props.className}
        size={props.size}
        style={props.style}
        wrap={props.wrap}
        onKeyDown={props.onKeyDown}
        onKeyUp={props.onKeyUp}
        onKeyPress={props.onKeyPress}
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
