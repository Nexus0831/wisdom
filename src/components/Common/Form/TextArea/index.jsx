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
    // ToDo: 補足機能はここで実装;
    const textarea = document.querySelector('textarea');
    if (textarea.value === '{') {
      const pos = textarea.selectionStart;
      let sentence = textarea.value;
      textarea.value = sentence.substr(0, pos) + '}' + sentence.substr(pos, sentence.length);
    //   // $textarea.attr('selectionStart', 1);
    //   // $textarea.get(0).setSelectionRange(1, 1);
      textarea.selectionEnd = pos;
      textarea.selectionStart = pos;
    }
    props.input.onChange(textarea.value);
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
